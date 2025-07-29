# 🛡️ Abdul Rafay - Cybersecurity Portfolio

A modern, responsive portfolio website showcasing my journey in cybersecurity, CTF achievements, and technical projects. Built with Next.js 15, TypeScript, and Tailwind CSS.

[![Deploy to GitHub Pages](https://github.com/yourusername/abdul-rafay-portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/yourusername/abdul-rafay-portfolio/actions/workflows/deploy.yml)
[![Next.js](https://img.shields.io/badge/Next.js-15.4.4-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.11-38B2AC)](https://tailwindcss.com/)

## 🚀 Live Demo

Visit the live portfolio: [https://yourusername.github.io/abdul-rafay-portfolio/](https://abdulrafay1-4.github.io/Portfolio-Website/)

## ✨ Features

- **Modern Design**: Clean, professional interface with dark theme
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Interactive Animations**: Smooth transitions using Framer Motion
- **CTF Achievements**: Showcase of Capture The Flag competition results
- **Project Gallery**: Detailed cybersecurity projects with live demos
- **Contact Form**: Functional contact form with validation
- **Performance Optimized**: Static site generation for fast loading
- **SEO Friendly**: Optimized meta tags and structure

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Heroicons](https://heroicons.com/)
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📁 Project Structure

```
abdul-rafay-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── public/
│   ├── favicon.ico            # Site favicon
│   ├── resume.pdf             # Downloadable resume
│   └── .nojekyll              # GitHub Pages configuration
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/
│   │   ├── Header.tsx         # Navigation header
│   │   ├── Hero.tsx           # Landing section
│   │   ├── About.tsx          # About section
│   │   ├── Skills.tsx         # Technical skills
│   │   ├── Projects.tsx       # Project showcase
│   │   ├── CTFAchievements.tsx # CTF results
│   │   └── Contact.tsx        # Contact form
│   └── styles/
│       └── globals.css        # Global styles
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # Tailwind CSS configuration
└── package.json               # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/abdul-rafay-portfolio.git
   cd abdul-rafay-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment

This portfolio is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Deploy to GitHub Pages

1. **Fork or clone this repository**
2. **Update the configuration**
   - Update `basePath` in `next.config.js` with your repository name
   - Update repository URLs in this README
3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select "GitHub Actions" as source
4. **Push to main branch**
   - The site will automatically build and deploy

### Deploy to Other Platforms

- **Vercel**: Connect your GitHub repository to Vercel
- **Netlify**: Connect your GitHub repository to Netlify
- **Custom Server**: Use `npm run build` and serve the `out/` directory

## 🎨 Customization

### Personal Information
Update personal details in:
- `src/components/Hero.tsx` - Name, roles, description
- `src/components/About.tsx` - Bio, skills, statistics
- `src/components/Contact.tsx` - Contact information, social links

### Projects
Add your projects in `src/components/Projects.tsx`:
```typescript
const projects = [
  {
    title: "Your Project",
    description: "Project description",
    technologies: ["Tech1", "Tech2"],
    github: "https://github.com/...",
    demo: "https://demo-url.com"
  }
]
```

### CTF Achievements
Update CTF results in `src/components/CTFAchievements.tsx`

### Styling
- **Colors**: Modify Tailwind classes throughout components
- **Fonts**: Update font configuration in `src/app/layout.tsx`
- **Animations**: Customize Framer Motion animations

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Abdul Rafay**
- Email: [abdulrafaybinrauf@gmail.com](mailto:abdulrafaybinrauf@gmail.com)
- LinkedIn: [abdul-rafay-b343592b6](https://www.linkedin.com/in/abdul-rafay-b343592b6/)
- GitHub: [abdulrafay1-7](https://github.com/abdulrafay1-4)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Heroicons](https://heroicons.com/) for beautiful icons
- [FAST-NUCES](https://www.nu.edu.pk/) for academic foundation

---

⭐ **If you found this portfolio helpful, please give it a star!** ⭐
