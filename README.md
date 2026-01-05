# Personal Portfolio

A terminal-themed personal portfolio website built with Next.js 16, TypeScript, and TailwindCSS.

## Features

- Terminal/hacker aesthetic with CRT effects and scanlines
- Typing animation in the hero section
- Responsive design
- Smooth scroll navigation
- Interactive skill bars with category filters
- Project showcase with status indicators
- Contact form

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Deployment:** Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/akhil-p-git/Personal-Portfolio.git

# Navigate to project directory
cd Personal-Portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
npm run start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css    # Global styles and terminal theme
│   ├── layout.tsx     # Root layout with metadata
│   └── page.tsx       # Main page component
└── components/
    ├── Navigation.tsx # Fixed navigation bar
    ├── Hero.tsx       # Landing section with typing effect
    ├── About.tsx      # About me section
    ├── Skills.tsx     # Skills with animated progress bars
    ├── Projects.tsx   # Project showcase
    ├── Contact.tsx    # Contact form and social links
    └── Footer.tsx     # Footer component
```

## Customization

1. Update personal info in each component
2. Modify skills in `Skills.tsx`
3. Add your projects in `Projects.tsx`
4. Update social links in `Contact.tsx`
5. Customize colors in `globals.css` CSS variables

## License

MIT
