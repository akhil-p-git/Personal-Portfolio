/**
 * Every fact on the site lives here. Source of truth:
 * ~/work/Dev/jobsearch/master-resume.md, plus each project's own README for
 * the case-study detail. Add nothing that is not in one of those.
 */

export const SITE_URL = "https://akhil-p.dev";

export const profile = {
  name: "Akhil Pinnani",
  role: "Full-stack engineer",
  positioning:
    "Full-stack engineer building production web, mobile and AI-powered applications.",
  years: "7+",
  location: "San Ramon, CA",
  availability:
    "Open to full-time and contract work, onsite, hybrid or remote, anywhere in the US.",
  email: "akhilrvpinnani@gmail.com",
  linkedin: "https://www.linkedin.com/in/akhil-pinnani",
  github: "https://github.com/akhil-p-git",
  summary:
    "7+ years building production web, mobile, and AI-driven applications across React, Next.js, ASP.NET Core, and Node. At Cathedral Plumbing, I shipped an internal platform and three mobile apps serving 7 construction companies and 3,000+ field technicians. I completed the Gauntlet AI fellowship building agentic, LLM-powered products end-to-end, and have since designed and taught AI-engineering curriculum to working software engineers.",
} as const;

export const stats = [
  { value: "7+", label: "years building production software" },
  { value: "3,000+", label: "field technicians using the mobile apps I shipped" },
  { value: "7", label: "construction companies on one internal portal" },
] as const;

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "Soledad Data Solutions",
    role: "Full Stack AI Engineer & AI Instructor",
    location: "San Diego, CA (Remote)",
    period: "Jan 2026 – May 2026",
    highlights: [
      "Designed and delivered a hands-on AI engineering curriculum to about 20 practicing software engineers across two cohorts of about 10 weeks each, covering how to design, build, and ship AI-first and agentic applications.",
      "Led instruction on modern AI development workflows — LLM APIs, agent orchestration, automation, and prompt engineering — turning fast-moving practices into structured, repeatable lessons.",
      "Built Java full-stack applications, including a trading application that was sold commercially.",
    ],
  },
  {
    company: "Gauntlet AI",
    role: "AI Engineering Fellow",
    location: "Austin, TX",
    period: "Oct 2025 – Dec 2025",
    highlights: [
      "Built and shipped multiple full-stack AI products end-to-end, including CollabCanvas (real-time collaborative design with GPT-4o generation), MessageAI (GPT-powered iOS messaging with semantic search), and ClipForge (an Electron video editor with Whisper transcription).",
      "Contributed to Chartsmith, Replicated's AI-powered Helm chart tool, working across a TypeScript, Go, and Kubernetes codebase.",
      "Contributed to OmniGen, a team generative AI video pipeline on Terraform-managed AWS (ECS Fargate, Lambda + Step Functions, DynamoDB, S3/CloudFront).",
    ],
  },
  {
    company: "Cathedral Plumbing",
    role: "Full Stack Developer",
    location: "Carrollton, TX",
    period: "Aug 2022 – May 2025",
    highlights: [
      "Built and maintained an internal web portal (React.js and ASP.NET Core on Microsoft Azure) used by 7 construction companies to run core operational workflows and day-to-day field operations.",
      "Designed and shipped three production mobile apps — MiTrade, MiDia, and MiDay — adopted by 3,000+ field technicians for access to job-critical tools and information.",
      "Improved microservice response times, query times, and error rates by optimizing service-to-service communication and database interactions, with added monitoring and logging for faster troubleshooting.",
    ],
  },
  {
    company: "Risk and Safety Solutions",
    role: "Project Coordinator / Web Developer",
    location: "Davis, CA",
    period: "Oct 2020 – Apr 2022",
    highlights: [
      "Joined as a contract web developer building React.js and CSS features for an internal portal, then transitioned into a full-time project coordination role.",
      "Drove Agile delivery in Jira through sprint planning, progress tracking, blocker resolution, and stakeholder communication across engineering teams.",
    ],
  },
  {
    company: "Orbees Business Solutions",
    role: "Frontend Developer",
    location: "Fremont, CA",
    period: "Jun 2019 – Oct 2020",
    highlights: [
      "Built an internal timesheet and leave-management portal, and maintained Orbees' internal applications and websites — HTML, JavaScript, CSS.",
    ],
  },
  {
    company: "KnoahSoft Inc.",
    role: "Web Development Intern",
    location: "Hyderabad, India",
    period: "Jun 2014 – Jul 2015",
    highlights: [
      "Worked full time as a web development intern at KnoahSoft's Hyderabad office; first professional coding experience.",
    ],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: [
      "JavaScript",
      "TypeScript",
      "Python",
      "C#",
      "Java",
      "SQL",
      "Swift",
      "Bash",
      "HTML5",
      "CSS3",
    ],
  },
  {
    group: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "React Native",
      "SwiftUI",
      "Redux",
      "Tailwind CSS",
      "Zustand",
    ],
  },
  {
    group: "Backend & APIs",
    items: [
      "Node.js",
      "Express.js",
      "ASP.NET Core",
      "Spring Boot",
      "Spring Security",
      "JPA/Hibernate",
      "FastAPI",
      "REST",
      "GraphQL",
      "WebSockets",
      "JWT",
      "Microservices",
      "Entity Framework Core",
    ],
  },
  {
    group: "Databases & Cloud",
    items: [
      "PostgreSQL",
      "pgvector",
      "Redis",
      "MongoDB",
      "SQLite",
      "Flyway",
      "Firebase",
      "AWS",
      "Azure",
      "Azure Data Factory",
      "Azure SQL",
      "Azure Analysis Services",
      "GCP",
      "Cloudflare R2",
    ],
  },
  {
    group: "DevOps & Testing",
    items: [
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "CI/CD",
      "Jest",
      "JUnit",
      "Cypress",
      "Playwright",
      "Postman",
      "ServiceNow",
      "Jira",
    ],
  },
  {
    group: "AI & Automation",
    items: [
      "OpenAI",
      "Claude",
      "Gemini",
      "LangGraph",
      "LangChain",
      "RAG",
      "MCP",
      "OpenRouter",
      "Ollama",
      "n8n",
      "Whisper",
    ],
  },
];

export const education = [
  { school: "Arizona State University", credential: "B.A. in Economics" },
  { school: "BloomTech", credential: "Full Stack Development Training" },
] as const;

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  /** CSS object-position for cropped covers. Defaults to the top edge. */
  focus?: string;
}

export interface Project {
  slug: string;
  title: string;
  period: string;
  /** One line shown under the title. */
  summary: string;
  problem: string;
  /** Two or three short lines for the card. */
  built: string[];
  stack: string[];
  github?: string;
  demo?: string;
  /** Plain-language caveat shown next to the links. */
  note?: string;
  /** First image is the card cover; the rest appear on the project page. */
  images: ProjectImage[];
  /** Long-form write-up for /projects/<slug>. */
  overview: string[];
  details: { heading: string; points: string[] }[];
  status: string;
}

const sopilotNote = "Synthetic data: two fictional tenants.";

export const projects: Project[] = [
  {
    slug: "sopilot",
    title: "SOPilot",
    period: "Oct 2026",
    summary:
      "A multi-tenant AI copilot that answers questions from standard operating procedures and cites the exact section.",
    problem:
      "People need answers from SOPs they can check: every claim tied to a section, and a plain refusal when the documents do not answer.",
    built: [
      "FastAPI agent that answers from retrieved SOPs with citations, a Spring Boot SQS ingest worker, a React app, and a TypeScript webhook Lambda.",
      "Tenant isolation with Postgres Row-Level Security, HMAC-verified webhooks with idempotent intake, and more than 500 automated tests.",
    ],
    stack: [
      "FastAPI",
      "Spring Boot",
      "React",
      "TypeScript",
      "Terraform",
      "AWS",
      "PostgreSQL",
    ],
    note: sopilotNote,
    images: [
      {
        src: "/work/sopilot-ask.webp",
        alt: "SOPilot's Ask page: a question about changing gloves in a cleanroom, answered from an SOP with numbered citations and a collapsed retrieval trace.",
        width: 1440,
        height: 900,
        caption:
          "The Ask page. Every claim carries a citation; the trace shows retrieval hits, tool calls and cost.",
      },
      {
        src: "/work/sopilot-citations.webp",
        alt: "SOPilot's citation drawer open beside an answer, showing the cited SOP section.",
        width: 1440,
        height: 900,
        caption: "A citation opens the source section beside the answer.",
      },
      {
        src: "/work/sopilot-versions.webp",
        alt: "SOPilot's version compare view showing two versions of an SOP side by side.",
        width: 1440,
        height: 900,
        caption: "Comparing two versions of an SOP.",
      },
      {
        src: "/work/sopilot-evals.webp",
        alt: "SOPilot's Evals page with a grid of small bar charts comparing retrieval configurations.",
        width: 1440,
        height: 900,
        caption: "The Evals page compares retrieval configurations.",
      },
    ],
    overview: [
      "SOPilot is a multi-tenant AI copilot for Standard Operating Procedures. People ask questions in a chat, and an agent answers from the SOPs it retrieves, citing the exact section for every claim and saying so when the documents do not answer.",
      "I designed and built it from a written spec as four apps in one repository: a FastAPI service, a Spring Boot ingest worker, a React app and a TypeScript webhook Lambda. All data is synthetic: two fictional tenants, and every generated document carries a \"FICTIONAL - FOR DEMO ONLY\" notice. It uses patterns common in regulated environments and makes no compliance claim.",
    ],
    details: [
      {
        heading: "What I built",
        points: [
          "A FastAPI agent that answers from retrieved SOPs with citations, using hybrid search and reranking, with a human-in-the-loop approval for the one action it may only propose: a draft deviation report.",
          "A Spring Boot SQS ingest worker with a dead-letter queue, partial batch failures and idempotency, fed by browser uploads and by signed webhook deliveries.",
          "A React app with live ingestion progress, version compare, an audit log, an eval dashboard and per-tenant API keys that connect Claude Code over MCP.",
          "Tenant isolation in the database: every tenant-scoped query runs in a transaction that first sets the tenant, and Postgres Row-Level Security does the isolating.",
          "Webhook intake that verifies HMAC signatures and handles duplicate deliveries idempotently.",
        ],
      },
      {
        heading: "How it is checked",
        points: [
          "More than 500 automated tests, and Playwright journeys that run accessibility checks.",
          "An eval runner that scores retrieval configurations on recall, citation precision and version correctness. No quality numbers are published yet.",
          "The Terraform covers Lambda, CloudFront, Cognito, SQS, and Bedrock, and is validated offline.",
        ],
      },
    ],
    status:
      "Runs end to end on a local Docker Compose stack. The AWS infrastructure is written in Terraform but not yet deployed.",
  },
  {
    slug: "rapidphotoupload",
    title: "RapidPhotoUpload",
    period: "Gauntlet AI, 2025",
    summary:
      "A Spring Boot and React media platform for uploading large photo batches straight to object storage.",
    problem:
      "Bulk upload of high-resolution photos: getting a large batch up quickly and surviving the failures that come with sending a thousand of anything over a network.",
    built: [
      "Direct-to-storage uploads with presigned URLs, plus resumable chunked uploads for larger files.",
      "EXIF extraction, three thumbnail sizes per photo, a searchable gallery and live progress over WebSocket.",
    ],
    stack: [
      "Java 17",
      "Spring Boot",
      "PostgreSQL",
      "React",
      "TypeScript",
      "Cloudflare R2",
    ],
    github: "https://github.com/akhil-p-git/RapidPhotoUpload",
    demo: "https://rapid-photo-upload.vercel.app",
    note: "Sign-in required for the gallery.",
    images: [],
    overview: [
      "RapidPhotoUpload is a Spring Boot and React media platform: bulk photo upload straight to object storage, EXIF and thumbnail processing, a searchable gallery, and live progress over WebSocket. I built it against a PRD during the Gauntlet AI fellowship.",
      "The repository is candid about performance. Uploading a large batch got faster because the backend left the data path for small files, client concurrency went up, and a self-imposed rate limit was lifted. Chunking buys recovery, not throughput. The method and numbers are in the repo's PERFORMANCE.md.",
    ],
    details: [
      {
        heading: "What I built",
        points: [
          "Direct-to-storage upload for files at or below 5 MiB: the browser PUTs to Cloudflare R2 with a presigned URL, so the bytes never cross the backend.",
          "Chunked upload above 5 MiB, in 5 MiB pieces, ten in parallel per file. Sessions survive a reload: the client asks the server which chunks it holds and sends only the rest.",
          "Validation that survives the bytes not crossing the server: the presigned URL is signed over content-length and content-type, and completion verifies the stored object's real size and sniffs its format.",
          "A processing pipeline for EXIF extraction and three thumbnail sizes per photo, a gallery with search, filters, sorting and pagination, and JWT auth with per-user quotas and rate limiting.",
        ],
      },
      {
        heading: "Stack",
        points: [
          "Java 17 and Spring Boot 3 REST API with Spring Security and JWT, JPA/Hibernate, PostgreSQL and Flyway migrations.",
          "A React and TypeScript web client and a React Native client sharing a typed API client.",
        ],
      },
      {
        heading: "A bug worth telling",
        points: [
          "A structural test failure kept 16 of 20 backend tests from running: Postgres-only jsonb columns broke H2 schema generation. I fixed it, documented the root cause, and grew the JUnit suite to 35 tests.",
        ],
      },
    ],
    status: "Deployed demo and public source.",
  },
  {
    slug: "collabcanvas",
    title: "CollabCanvas",
    period: "Gauntlet AI, 2025",
    summary:
      "A real-time collaborative design canvas where natural-language commands generate shapes and layouts.",
    problem:
      "Multiplayer design tools and AI assistants rarely meet: this puts live cursors, presence and GPT-4o design commands on one shared canvas.",
    built: [
      "Multi-user canvas with live cursors, presence, and object locking so two people don't edit the same shape.",
      "GPT-4o commands such as \"make a 4x4 grid of squares\" that create shapes on the shared canvas.",
    ],
    stack: ["React", "Firebase", "Konva", "GPT-4o"],
    github: "https://github.com/akhil-p-git/CollabCanvas",
    demo: "https://collab-canvas-f20e2.web.app",
    note: "Sign-in required. Open two tabs to see the sync.",
    images: [],
    overview: [
      "CollabCanvas is a real-time collaborative design tool that combines multiplayer editing with AI-driven design assistance. I built it during the Gauntlet AI fellowship.",
      "To try it, sign in and open the app in two browser tabs: you will see live cursors, presence indicators and shape changes sync between them.",
    ],
    details: [
      {
        heading: "What I built",
        points: [
          "A multi-user canvas with live cursor tracking, presence awareness and smart object locking that prevents simultaneous edits.",
          "Shape creation and editing: rectangles, circles, text and lines, multi-select, resize handles, group and ungroup, alignment and distribution tools, and pan and zoom.",
          "An AI design assistant using GPT-4o: commands like \"create a blue circle\", \"make a 4x4 grid of squares\" or \"create a navigation bar with Home, About, Services, Contact\" are turned into shapes, and AI activity shows to collaborators.",
        ],
      },
      {
        heading: "Stack",
        points: ["React 18, Firebase, Konva and the OpenAI API."],
      },
    ],
    status: "Live demo and public source.",
  },
  {
    slug: "ai-command-center",
    title: "AI Command Center",
    period: "Dec 2025 – May 2026",
    summary:
      "A mission-control dashboard for AI agents: conversations, agent graphs, n8n runs and vector-store queries in one place.",
    problem:
      "Once more than two or three agents are in production, finding out why a conversation went off the rails means digging through scattered logs and opaque vector-store queries.",
    built: [
      "Browse conversations, view agent graphs and n8n workflow runs, and test queries against a vector store.",
      "Chat with agents while watching each step live.",
    ],
    stack: ["FastAPI", "React", "LangGraph", "n8n", "ChromaDB"],
    github: "https://github.com/akhil-p-git/ai-command-center",
    images: [],
    overview: [
      "AI Command Center is a dashboard for monitoring AI agents. It pulls conversations, agent graphs, n8n workflows and knowledge bases into one operational view, so you can see why an agent did what it did.",
    ],
    details: [
      {
        heading: "What I built",
        points: [
          "An overview dashboard with KPI cards, charts and an activity feed, and a conversations explorer with filtering and message history.",
          "Agent management with stats, graph visualizations and recent runs, and a workflows view of n8n executions.",
          "Knowledge management for vector-store collections with a test-query interface, and a live chat that visualizes each agent step.",
        ],
      },
      {
        heading: "Stack",
        points: [
          "Backend: FastAPI on Python 3.11, LangGraph and LangChain, ChromaDB, SQLAlchemy with SQLite.",
          "Frontend: React 19 and TypeScript, Material UI, React Query, React Router and Recharts.",
          "Infrastructure: Docker Compose, n8n for workflow automation, GitHub Actions.",
        ],
      },
    ],
    status: "Public source; runs locally with Docker Compose.",
  },
  {
    slug: "aihub",
    title: "aihub",
    period: "Oct 2026 – present",
    summary:
      "A private web chat that puts local models, OpenRouter models and a spend-capped Claude workspace behind one composer.",
    problem:
      "One person, many models: local Ollama, free and cheap OpenRouter models, and Claude, with a visible cost and a hard spending limit.",
    built: [
      "Streaming replies, a per-model reasoning-effort control, and the estimated cost under each reply.",
      "Hardened for single-user use: loopback-only binding, strict CSP, sanitized model output and 30-day chat retention.",
    ],
    stack: ["Python", "Starlette", "JavaScript", "Ollama", "OpenRouter", "Claude API"],
    github: "https://github.com/akhil-p-git/aihub",
    note: "Runs on your own machine; built and tested on Arch Linux only.",
    images: [
      {
        src: "/work/aihub-chat.webp",
        alt: "aihub's chat page: a question about cache stampedes answered by a local qwen3:8b model, with model, reasoning effort, tokens per second, token count and time shown under the reply.",
        width: 1440,
        height: 655,
        caption:
          "A reply from a local model, with speed, token count and time under it. Screenshot of a fresh instance with an empty database.",
      },
      {
        src: "/work/aihub-models.webp",
        alt: "aihub's model picker listing local Ollama models with size, context and capabilities, and paid OpenRouter models that are disabled until a key is set.",
        width: 1440,
        height: 900,
        caption:
          "The model picker on a fresh install: local models are ready, paid ones are listed but disabled until a key is added.",
      },
    ],
    overview: [
      "aihub is a private AI hub for one person: a web chat that puts local, free and paid models behind one composer. I run it as a systemd user service on my own machine.",
    ],
    details: [
      {
        heading: "What I built",
        points: [
          "One composer over local Ollama models, OpenRouter models, and a spend-capped Claude workspace, with streaming replies, a per-model reasoning-effort control, and the estimated cost shown under each reply.",
          "Models whose key is missing are listed but disabled, with the fix written next to them.",
          "Hardening for single-user use: loopback-only binding, strict CSP, sanitized model output and 30-day chat retention, with Python, browser-module and end-to-end tests.",
        ],
      },
    ],
    status:
      "In progress. Built and tested on Arch Linux with an NVIDIA GPU; nothing else has been tried.",
  },
  {
    slug: "varsity-tutors-mvp",
    title: "Varsity Tutors MVP",
    period: "Gauntlet AI, 2025",
    summary:
      "A Next.js growth prototype exploring social learning loops, gamified rewards and K-factor analytics for K-12 tutoring.",
    problem:
      "Tutoring sessions are isolated, though the value compounds when friends invite each other to study. The prototype explores a design where each completed session becomes an outbound invite.",
    built: [
      "Buddy challenges, voice rooms and gem rewards, with agent-based personalization.",
      "K-factor analytics for engagement experiments, and an automated walkthrough of the full flow.",
    ],
    stack: ["Next.js 14", "TypeScript", "Tailwind"],
    github: "https://github.com/akhil-p-git/Varsity-Tutors",
    demo: "https://varsity-tutors-six.vercel.app/dashboard",
    note: "Demo uses mock users only.",
    images: [
      {
        src: "/work/varsity-tutors.webp",
        alt: "Varsity Tutors landing page with the headline 'Study Together, Grow Together' and cards for mock users to log in as.",
        width: 1440,
        height: 900,
        caption: "The demo opens on a list of mock users to log in as.",
        focus: "50% 22%",
      },
    ],
    overview: [
      "A growth-focused Next.js 14 prototype exploring viral loops, social learning and gamified rewards for K-12 tutoring, built during the Gauntlet AI fellowship.",
      "The design aims for a K-factor above 1: buddy challenges, voice rooms and gem rewards that turn each completed session into an outbound invite. The demo includes an automated walkthrough of the full flow.",
    ],
    details: [
      {
        heading: "What I built",
        points: [
          "Gamified social learning loops with buddy challenges, voice-room flows and gem rewards.",
          "Agent-based personalization, and K-factor analytics for engagement experiments.",
          "Three mock users (student, parent, tutor roles) so the whole flow can be tried without an account.",
        ],
      },
    ],
    status: "Live demo and public source.",
  },
];

export interface MoreProject {
  title: string;
  period: string;
  description: string;
  stack: string[];
  github?: string;
}

export const moreProjects: MoreProject[] = [
  {
    title: "MessageAI",
    period: "Gauntlet AI, 2025",
    description:
      "GPT-powered iOS messaging with conversation summaries, action-item extraction and semantic search.",
    stack: ["SwiftUI", "Firebase", "OpenAI"],
    github: "https://github.com/akhil-p-git/MessageAI",
  },
  {
    title: "ClipForge",
    period: "Gauntlet AI, 2025",
    description:
      "Electron desktop video editor with screen and webcam capture, timeline editing, FFmpeg export and Whisper transcription.",
    stack: ["Electron", "React", "FFmpeg", "Whisper"],
    github: "https://github.com/akhil-p-git/ClipForge",
  },
  {
    title: "Incident & Known-Error Tracker",
    period: "Oct 2026",
    description:
      "ASP.NET Core app for logging incidents, linking them to known errors and searching past root causes. An Azure Data Factory pipeline loads incident data into Azure SQL, and an Azure Analysis Services model powers trend reporting.",
    stack: [
      "ASP.NET Core",
      "Azure Data Factory",
      "Azure SQL",
      "Azure Analysis Services",
    ],
  },
  {
    title: "Multi-LLM RAG System",
    period: "2026",
    description:
      "Retrieval-augmented generation on PostgreSQL and pgvector with MCP tool support, routing across LLM providers through OpenRouter.",
    stack: ["Python", "PostgreSQL", "pgvector", "MCP", "OpenRouter"],
  },
  {
    title: "Zero-to-Running Dev Environment",
    period: "2025",
    description:
      "A Node.js and Express API in TypeScript, a React front end, PostgreSQL and Redis on Docker Compose, with one-command startup, health checks and a GitHub Actions workflow.",
    stack: ["Node.js", "Express", "TypeScript", "React", "Docker Compose"],
    github: "https://github.com/akhil-p-git/Zero-to-Running-Dev-Environment",
  },
  {
    title: "AIWatch",
    period: "2026",
    description:
      "Python desktop tray app that collects Claude and Gemini CLI usage and spend data into SQLite.",
    stack: ["Python", "PyQt6", "SQLite"],
    github: "https://github.com/akhil-p-git/aiwatch",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
