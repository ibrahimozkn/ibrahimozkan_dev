# ibrahimozkan.dev

A modern, performant personal portfolio website built with React, TypeScript, and Vite. Showcase your projects, blog posts, and professional journey with a sleek, responsive design.

## ✨ Features

- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Blog System** - Write and publish blog posts with Markdown support
- **Project Showcase** - Highlight your featured projects with descriptions and technologies
- **Dark Mode Ready** - Built with a dark theme foundation
- **Fast Performance** - Optimized with Vite and React Compiler
- **Type-Safe** - Full TypeScript support for reliability
- **Code Syntax Highlighting** - Beautiful code blocks in blog posts
- **Modern Stack** - Latest versions of React (19), React Router (7), and supporting libraries

## 🚀 Quick Start

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd ibrahimozkan_dev
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start the development server with HMR
- `npm run build` - Build for production with TypeScript checking
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint to check code quality
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting without changes

## 📁 Project Structure

```
src/
├── pages/              # Route pages
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Blog.tsx
│   └── BlogPost.tsx
├── components/         # Reusable components
│   ├── Layout.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── SectionCard.tsx
│   ├── TimelineItem.tsx
│   ├── CodeBlock.tsx
│   ├── blog/
│   └── project/
├── assets/            # Static assets and data
│   ├── data.json      # Blog posts and projects data
│   └── blog_posts/    # Markdown blog posts
├── lib/               # Utility libraries
├── utils/             # Helper functions
└── types/             # TypeScript type definitions
```

## 🎨 Customization

### Adding Blog Posts

Blog posts are stored in `src/assets/blog_posts/` as Markdown files and referenced in `src/assets/data.json`.

### Adding Projects

Update the `projects` array in `src/assets/data.json` to add new projects to your portfolio.

## 🔧 Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4 with Typography plugin
- **Routing**: React Router DOM 7
- **Markdown**: React Markdown with GFM support
- **Code Highlighting**: React Syntax Highlighter
- **Icons**: React Icons
- **Code Quality**: ESLint, Prettier
- **Compiler**: React Compiler (experimental)

## 🎯 Pages

- **Home** - Landing page with hero section
- **About** - Your professional biography and background
- **Projects** - Showcase of your work and projects
- **Blog** - List of blog posts with previews
- **Blog Post** - Individual blog post with full content

## 📝 Styling

This project uses Tailwind CSS v4 with:

- Custom dark theme configuration
- Tailwind Typography plugin for content-rich pages
- Responsive design utilities
- Custom color palette and spacing

## 🚀 Deployment

Build the project for production:

```bash
npm run build
```

The optimized build will be in the `dist/` directory, ready to deploy to:

- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 📋 Code Quality

This project maintains high code quality standards:

- **ESLint** - Configured for React and TypeScript best practices
- **Prettier** - Automatic code formatting
- **TypeScript** - Strict type checking enabled

Run quality checks:

```bash
npm run lint        # Check for linting issues
npm run format:check # Check formatting
```

---

**Happy building! 🚀**
