# Nithish Sagar Portfolio

A modern, animated developer portfolio built with React, Tailwind CSS, and Framer Motion.

![Portfolio Preview](public/NSD.png)

## 🚀 Live Demo

[View Live Site](#) <!-- Add your deployed URL here -->

## ✨ Features

- **Dark, Minimal, Luxury Aesthetic** - Clean design with glassmorphism effects
- **Smooth Animations** - Powered by Framer Motion with scroll-triggered reveals
- **Interactive Cursor** - Custom cursor with particle trails and magnetic effects (desktop only)
- **Fully Responsive** - Mobile-first design that works on all devices
- **Fast Performance** - Built with Vite for lightning-fast development and builds

## 🛠️ Tech Stack

- **React** - UI Framework
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Google Fonts** - Inter & JetBrains Mono

## 📁 Project Structure

```
Nithish_Portfolio/
├── public/                     # Static assets served at root
│   ├── NSD.png                 # Profile image
│   └── logo-removebg-preview.png  # Logo image
│
├── src/
│   ├── components/             # React components
│   │   ├── About.jsx           # About me section
│   │   ├── Achievements.jsx    # Achievements & certifications
│   │   ├── AnimatedBlob.jsx    # Decorative animated gradient blob
│   │   ├── Contact.jsx         # Contact form & social links
│   │   ├── CursorFollower.jsx  # Custom animated cursor (desktop)
│   │   ├── Experience.jsx      # Work experience timeline
│   │   ├── Footer.jsx          # Site footer
│   │   ├── GlassCard.jsx       # Reusable glassmorphism card
│   │   ├── Hero.jsx            # Hero/landing section with profile
│   │   ├── Navbar.jsx          # Navigation bar with mobile menu
│   │   ├── Projects.jsx        # Projects showcase grid
│   │   ├── SectionHeader.jsx   # Reusable section title component
│   │   ├── SkillIcon.jsx       # SVG icons for skills
│   │   ├── Skills.jsx          # Skills section with icons
│   │   └── Tag.jsx             # Reusable tag/pill component
│   │
│   ├── data/                   # Data files for content
│   │   ├── achievements.js     # Achievements data
│   │   ├── experience.js       # Work experience data
│   │   ├── projects.js         # Projects data
│   │   └── skills.js           # Skills data with icons
│   │
│   ├── App.jsx                 # Main app component
│   ├── index.css               # Global styles & Tailwind config
│   └── main.jsx                # React entry point
│
├── index.html                  # HTML template
├── package.json                # Dependencies & scripts
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── vite.config.js              # Vite configuration
└── .gitignore                  # Git ignore rules
```

## 🧩 Component Overview

| Component | Description |
|-----------|-------------|
| `Navbar` | Sticky navigation with glassmorphism, smooth scroll, mobile hamburger menu |
| `Hero` | Full-height landing with animated profile image and rotating rings |
| `About` | Personal introduction with gradient text highlights |
| `Skills` | Categorized skills grid with SVG icons and hover effects |
| `Projects` | Project cards with tech tags and GitHub links |
| `Experience` | Work timeline with company details and highlights |
| `Achievements` | Certifications and accomplishments |
| `Contact` | Contact information and social media links |
| `CursorFollower` | Multi-layered animated cursor with particle trails |

## 🎨 Design System

### Colors
- **Primary**: Purple (`#a855f7`)
- **Secondary**: Pink (`#ec4899`)
- **Accent**: Cyan (`#06b6d4`)
- **Background**: Black (`#000000`)
- **Text**: White/Gray shades

### Glassmorphism Pattern
```css
background: rgba(255, 255, 255, 0.03);
backdrop-filter: blur(24px);
border: 1px solid rgba(255, 255, 255, 0.08);
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/NithishSagar/Nithish_Portfolio.git
cd Nithish_Portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173)

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` folder.

## 📝 Customization

### Update Personal Info
Edit the data files in `src/data/`:
- `projects.js` - Your projects
- `experience.js` - Work history
- `skills.js` - Technical skills
- `achievements.js` - Certifications

### Change Images
Replace images in `public/`:
- `NSD.png` - Profile photo
- `logo-removebg-preview.png` - Logo

### Modify Colors
Edit `tailwind.config.js` to customize the color palette.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Nithish Sagar Dharmappa**
- GitHub: [@NithishSagar](https://github.com/NithishSagar)
- LinkedIn: [Nithish Sagar](https://linkedin.com/in/nithishsagar)

---

⭐ Star this repo if you found it helpful!
