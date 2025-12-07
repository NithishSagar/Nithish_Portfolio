/**
 * App Component - Main Application Layout
 * 
 * This is the root component that composes all sections together.
 * 
 * STRUCTURE:
 * - Navbar (sticky at top)
 * - Hero (full-height landing)
 * - About (introduction + education)
 * - Skills (technology chips)
 * - Projects (project cards)
 * - Experience (work timeline)
 * - Achievements (badges)
 * - Contact (CTA + socials)
 * - Footer
 * 
 * ANIMATION APPROACH:
 * - Using Framer Motion for all animations
 * - Scroll-triggered animations use whileInView
 * - Page load animations use initial/animate
 * - Hover effects use whileHover/whileTap
 * 
 * DATA FLOW:
 * - Each section imports its own data from src/data/
 * - Data files export arrays of objects
 * - Components map over the data to render cards/items
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorFollower from './components/CursorFollower';

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Custom cursor follower - hidden on mobile/touch devices */}
      <CursorFollower />
      
      {/* 
        Global background gradient
        Creates a subtle dark gradient with colored accents
      */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-950 to-black -z-10" />
      
      {/* 
        Noise texture overlay for visual depth
        Very subtle, adds a premium feel
      */}
      <div 
        className="fixed inset-0 opacity-[0.015] -z-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Navigation - sticky header */}
      <Navbar />

      {/* Main content sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
