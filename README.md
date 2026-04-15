# Batman-Themed Portfolio Website

An ultra-modern, cinematic portfolio website with a Batman/Gotham aesthetic. Built with Next.js, TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion.

## 🦇 Features

- **Cinematic Design**: Dark Gotham aesthetic with bat-signal yellow accents
- **Smooth Animations**: Framer Motion for page transitions and micro-interactions
- **Responsive**: Mobile-first design that works on all devices
- **Accessible**: Keyboard navigation, focus rings, and semantic HTML
- **Performance Optimized**: Code splitting and optimized images
- **Modern Stack**: Next.js 15, TypeScript, Tailwind CSS

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI + Tailwind)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter + Space Grotesk

## 📦 Installation
hiii
1. **Install dependencies**:
```bash
npm install
```

2. **Run development server**:
```bash
npm run dev
```

3. **Open browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 🚢 Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and deploy

Or use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Global styles with Batman theme
│   ├── layout.tsx            # Root layout with fonts
│   ├── page.tsx              # Main page
│   └── not-found.tsx         # Custom 404 page
├── components/
│   ├── ui/                   # shadcn/ui components
│   │   ├── button.tsx
│   │   └── card.tsx
│   ├── layout/               # Layout components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── sections/             # Page sections
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Skills.tsx
│       ├── Experience.tsx
│       ├── Projects.tsx
│       └── Contact.tsx
├── data/
│   └── content.ts            # Portfolio content data
├── lib/
│   └── utils.ts              # Utility functions
└── public/                   # Static assets
```

## 🎨 Design System

### Colors
- **Background**: Near-black (#07080B, #0A0B10)
- **Accent**: Bat-signal yellow (#F5C542, #FFCC33)
- **Steel Blue**: Muted highlights (#3A4A5A)

### Typography
- **Sans**: Inter (body text)
- **Display**: Space Grotesk (headings)

### Effects
- Glassmorphism panels
- Neon edge glow on hover
- Subtle parallax scrolling
- Animated spotlight (bat-signal)
- Film grain texture

## 📝 Customization

### Update Content
Edit `/data/content.ts` to update:
- Personal information
- Experience
- Projects
- Skills
- Awards

### Modify Theme
Edit `/app/globals.css` and `/tailwind.config.ts` to customize:
- Colors
- Fonts
- Animations
- Spacing

## ♿ Accessibility

- Semantic HTML structure
- Keyboard navigation support
- Focus visible indicators
- ARIA labels where needed
- Respects `prefers-reduced-motion`

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🧪 Testing

Run tests with Jest:

```bash
npm test
```

## 📄 License

This project is open source and available under the MIT License.

---

Built with 🦇 and ⚡ in Gotham 
