# TechGenius - University Tech Club Website

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/heet-ps-projects/v0-tech-genius-website-build)
[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

> **Where Innovation Meets Excellence**
> 
> Official website for TechGenius, the premier technology club fostering innovation, learning, and collaboration among students passionate about shaping the future of technology.

## 🚀 Live Demo

**Website:** [https://techgenius-website.vercel.app](https://vercel.com/heet-ps-projects/v0-tech-genius-website-build)

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Components Overview](#components-overview)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Team](#team)
- [License](#license)

## 🎯 About

TechGenius is a comprehensive website for our university technology club, showcasing our community, events, achievements, and leadership. We are a collective of passionate students united by our deep tech knowledge, human-centric mindset, and passion for using technology to drive forward transformation.

### Our Mission
- **500+** Active Members
- **50+** Projects Completed  
- **25+** Industry Partners
- **100+** Events Hosted

## ✨ Features

### 🏠 **Hero Section**
- Animated hero with call-to-action buttons
- Feature highlights showcasing club values
- Responsive design with smooth animations

### 👥 **Committee Section**
- Interactive member profiles with morphing dialogs
- Social media integration (LinkedIn, GitHub, Email)
- Detailed member bios and roles
- Glow card effects for enhanced UI

### 📅 **Events Section**
- Tabbed interface for upcoming and past events
- Event registration and details
- Interactive event cards with morphing dialogs
- Event highlights and descriptions

### 🏆 **Achievements Section**
- Timeline view of milestones
- Achievement cards with statistics
- Visual progress indicators
- Category-based filtering

### 🤝 **Partners Section**
- Partnership benefits showcase
- Partner tier system (Platinum, Gold, Silver, Bronze)
- Interactive partner profiles
- Partnership opportunities

### 📱 **Responsive Design**
- Mobile-first approach
- Smooth animations and transitions
- Dark/Light theme support
- Accessible design patterns

## 🛠️ Tech Stack

### **Frontend**
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library

### **UI Components**
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible components
- **Custom UI Components** - Built with Radix primitives
- **Lucide React** - Beautiful icons
- **Class Variance Authority** - Component variants

### **Styling & Animation**
- **Tailwind CSS** - Utility classes
- **CSS Custom Properties** - Theme variables
- **Framer Motion** - Page transitions and animations
- **Custom Glow Effects** - Enhanced visual appeal

### **Development Tools**
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **pnpm** - Fast, disk space efficient package manager
- **Vercel** - Deployment and hosting

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm/yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/techgenius-website.git
   cd techgenius-website
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

## 📁 Project Structure

```
techgenius-website/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/           # React components
│   ├── ui/              # Reusable UI components
│   │   ├── card.tsx
│   │   ├── button.tsx
│   │   ├── badge.tsx
│   │   ├── dock.tsx
│   │   ├── glow-card.tsx
│   │   ├── glow-button.tsx
│   │   └── morphing-dialog.tsx
│   ├── navigation.tsx    # Navigation component
│   ├── hero-section.tsx  # Hero section
│   ├── about-section.tsx # About section
│   ├── committee-section.tsx # Committee profiles
│   ├── events-section.tsx    # Events showcase
│   ├── achievements-section.tsx # Achievements timeline
│   ├── partners-section.tsx     # Partners showcase
│   └── footer.tsx       # Footer component
├── public/              # Static assets
│   ├── images/         # Member photos and assets
│   └── ...
├── lib/                # Utility functions
├── styles/            # Additional styles
└── package.json       # Dependencies and scripts
```

## 🧩 Components Overview

### Core Components

- **[`Navigation`](components/navigation.tsx)** - Responsive navigation with dock-style menu
- **[`HeroSection`](components/hero-section.tsx)** - Landing section with animations
- **[`AboutSection`](components/about-section.tsx)** - Club information and values
- **[`CommitteeSection`](components/committee-section.tsx)** - Member profiles and details
- **[`EventsSection`](components/events-section.tsx)** - Events showcase and registration
- **[`AchievementsSection`](components/achievements-section.tsx)** - Timeline of milestones
- **[`PartnersSection`](components/partners-section.tsx)** - Partner showcases
- **[`Footer`](components/footer.tsx)** - Contact information and links

### UI Components

- **[`Card`](components/ui/card.tsx)** - Flexible card component
- **[`Button`](components/ui/button.tsx)** - Various button styles
- **[`Badge`](components/ui/badge.tsx)** - Status and category indicators
- **[`GlowCard`](components/ui/glow-card.tsx)** - Cards with glow effects
- **[`GlowButton`](components/ui/glow-button.tsx)** - Buttons with glow effects
- **[`MorphingDialog`](components/ui/morphing-dialog.tsx)** - Animated modal dialogs
- **[`Dock`](components/ui/dock.tsx)** - macOS-style dock component

## 💻 Development

### Adding New Members

To add new committee members, edit the [`committeeMembers`](components/committee-section.tsx) array in the CommitteeSection component:

```typescript
{
  name: "Member Name",
  role: "Position",
  department: "Computer Science & Engineering", 
  year: "Year",
  bio: "Short bio...",
  fullBio: "Detailed biography...",
  image: "/member-photo.jpg",
  linkedin: "https://linkedin.com/in/username",
  github: "https://github.com/username", 
  email: "email@example.com"
}
```

### Adding New Events

Events are managed in the [`EventsSection`](components/events-section.tsx) component. Add to `upcomingEvents` or `pastEvents` arrays:

```typescript
{
  title: "Event Name",
  date: "Date",
  time: "Time",
  location: "Location",
  attendees: 0,
  maxAttendees: 100,
  type: "Event Type",
  description: "Brief description...",
  fullDescription: "Detailed description...",
  image: "/event-image.jpg",
  highlights: ["highlight1", "highlight2"]
}
```

### Styling Guide

- Use Tailwind CSS utility classes
- Follow the existing color scheme with CSS variables
- Maintain consistency with spacing and typography
- Use the custom glow effects for enhanced visuals

## 🚀 Deployment

The project is automatically deployed on Vercel. Any push to the main branch triggers a new deployment.

### Manual Deployment

```bash
# Build the project
pnpm build

# Deploy to Vercel
vercel --prod
```

### Environment Variables

No environment variables are currently required for basic functionality.

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Code Style

- Use TypeScript for type safety
- Follow the existing component structure
- Add proper documentation for new components
- Ensure responsive design
- Test across different screen sizes

## 👥 Team

### Faculty Coordinators
- **Dr. Amit Thakkar** - Convener & HOD
- **Dr. Jigar Sarda** - Faculty Coordinator  
- **Srushti Gajjar** - Faculty Coordinator
- **Avani Khokhariya** - Faculty Coordinator

### Student Leadership
- **Mishri Bhanwadia** - President
- **Akshat Patel** - Vice President  
- **Harikesh Patel** - Treasurer
- **Yashvi Tanna** - Secretary

### Development Team
- **Heet Parikh** - Lead Developer & Hackathon Coordinator
- And many more talented members!

*View all team members on our [website](https://techgenius-website.vercel.app/)*

## 📞 Contact

- **Email:** [techgenius@charusat.ac.in](mailto:techgenius@charusat.ac.in)
- **Phone:** +91 75677 02409
- **Location:** A7 Building, Room 630, CSPIT Campus
- **Website:** [TechGenius Website](https://techgenius-website.vercel.app/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Built with ❤️ by the TechGenius Team**

[Website](https://techgenius-website.vercel.app/) • [GitHub](https://github.com/yourusername/techgenius-website) • [LinkedIn](https://linkedin.com/company/techgenius)

</div>
