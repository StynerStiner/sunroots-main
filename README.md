# Minimal Design Studio

A Next.js TypeScript application featuring a minimal design studio website with 3D Spline background and glass morphism effects.

## Features

- ✨ Modern minimalist design
- 🎨 Interactive 3D background using Spline
- 🔮 Glass morphism navigation and components
- ⚡ Built with Next.js 15 and TypeScript
- 🎭 Tailwind CSS for styling
- 📱 Fully responsive design
- 🚀 Optimized performance

## Project Structure

```
src/
├── app/
│   ├── globals.css     # Global styles and font imports
│   ├── layout.tsx      # Root layout with Inter font
│   └── page.tsx        # Main homepage
└── components/
    ├── Navigation.tsx      # Glass floating navigation bar
    ├── HeroSection.tsx     # Main hero content section
    └── SplineBackground.tsx # 3D background iframe
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) to view the website.

## Design Features

- **Glass Navigation**: Floating navigation bar with backdrop blur effects
- **3D Background**: Interactive Spline 3D scene
- **Minimalist Typography**: Clean typography with Inter font family
- **Smooth Animations**: Hover effects and transitions
- **App Preview**: Mockup interface showcase

## Technologies Used

- [Next.js 15](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Spline](https://spline.design/) - 3D graphics
- [Inter Font](https://fonts.google.com/specimen/Inter) - Typography

## Deployment

This project is ready to be deployed on [Vercel](https://vercel.com/), [Netlify](https://netlify.com/), or any other platform that supports Next.js.

For Vercel deployment:

```bash
npm run build
```

## Performance Notes

- No hydration mismatches due to proper SSR/CSR handling
- Optimized font loading with `next/font`
- Static generation for optimal performance
- Proper TypeScript configuration
