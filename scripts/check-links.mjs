// Crawls a running site and checks every link, anchor and image.
// Usage: node scripts/check-links.mjs [baseUrl]   (default http://localhost:3100)
// Start the site first: npm run build && npm start -- -p 3100
const base = new URL(process.argv[2] ?? "http://localhost:3100");
const timeout = () => AbortSignal.timeout(15000);
const failures = [];
const warnings = [];

// Sites that refuse automated requests: a refusal there is not a broken link.
const BOT_BLOCKED = new Set(["www.linkedin.com", "linkedin.com"]);

const sitemap = await (await fetch(new URL("/sitemap.xml", base), { signal: timeout() })).text();
// The sitemap and metadata name the production origin; map it onto the site under test.
const prodOrigin = new URL(sitemap.match(/<loc>([^<]+)<\/loc>/)[1]).origin;
const toLocal = (url) => {
  const u = new URL(url, base);
  return u.origin === prodOrigin ? new URL(u.pathname + u.search + u.hash, base) : u;
};

const pages = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => toLocal(m[1]).pathname);
const seenPages = new Map(); // path -> html
const external = new Map(); // url -> pages that link to it
const assets = new Set();

for (const path of pages) {
  const res = await fetch(new URL(path, base), { signal: timeout() });
  if (!res.ok) {
    failures.push(`${path} -> ${res.status}`);
    continue;
  }
  seenPages.set(path, await res.text());
}

const idsOf = (html) => new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));

for (const [path, html] of seenPages) {
  for (const m of html.matchAll(/<a\s[^>]*href="([^"]+)"/g)) {
    const href = m[1].replaceAll("&amp;", "&");
    if (href.startsWith("mailto:") || href.startsWith("tel:")) continue;
    const u = new URL(href, new URL(path, base));
    if (u.origin !== base.origin) {
      if (!external.has(u.href)) external.set(u.href, new Set());
      external.get(u.href).add(path);
      continue;
    }
    const target = seenPages.get(u.pathname) ?? (await fetchPage(u.pathname));
    if (target === null) {
      failures.push(`${path}: ${href} -> page not found`);
      continue;
    }
    if (u.hash && !idsOf(target).has(u.hash.slice(1))) {
      failures.push(`${path}: ${href} -> no element with id "${u.hash.slice(1)}"`);
    }
  }
  for (const m of html.matchAll(/<img\s[^>]*src="([^"]+)"/g)) assets.add(m[1].replaceAll("&amp;", "&"));
  for (const m of html.matchAll(/<(?:link|meta)\s[^>]*(?:href|content)="([^"]+\.(?:png|ico|jpg|webp))"/g)) assets.add(m[1]);
}

async function fetchPage(pathname) {
  const res = await fetch(new URL(pathname, base), { signal: timeout() });
  if (!res.ok) return null;
  const html = await res.text();
  seenPages.set(pathname, html);
  return html;
}

for (const src of assets) {
  const res = await fetch(toLocal(src), { signal: timeout() });
  if (!res.ok) failures.push(`asset ${src} -> ${res.status}`);
}

for (const [url, from] of external) {
  const host = new URL(url).hostname;
  try {
    let res = await fetch(url, { method: "HEAD", redirect: "follow", signal: timeout() });
    if (res.status === 405 || res.status === 403) res = await fetch(url, { redirect: "follow", signal: timeout() });
    if (!res.ok) {
      (BOT_BLOCKED.has(host) ? warnings : failures).push(`${url} -> ${res.status} (linked from ${[...from].join(", ")})`);
    }
  } catch (err) {
    failures.push(`${url} -> ${err.name}: ${err.message} (linked from ${[...from].join(", ")})`);
  }
}

console.log(`Checked ${seenPages.size} pages, ${assets.size} assets, ${external.size} external links.`);
for (const w of warnings) console.log(`warning: ${w}`);
for (const f of failures) console.log(`FAIL: ${f}`);
if (failures.length) process.exit(1);
console.log("No broken links.");
