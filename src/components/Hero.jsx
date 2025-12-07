/**
 * Hero Component
 * Full-height landing section with animated text and decorative blob
 * 
 * Animation approach:
 * - Staggered text reveal using Framer Motion variants
 * - Floating blob animation with continuous motion
 * - Button hover effects with spring physics
 */

import { motion } from "framer-motion";
import AnimatedBlob from "./AnimatedBlob";

const Hero = () => {
  // Container variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  // Child variants for each animated element
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1], // Custom easing similar to power3.out
      },
    },
  };

  // Smooth scroll to section
  const scrollTo = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary blob */}
        <AnimatedBlob
          className="top-1/4 right-1/4"
          colors={["purple", "pink"]}
          size="500px"
          blur="120px"
        />
        {/* Secondary blob */}
        <AnimatedBlob
          className="bottom-1/4 left-1/4"
          colors={["cyan", "blue"]}
          size="400px"
          blur="100px"
        />
        {/* Subtle grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center md:text-left"
          >
            {/* Code-style greeting */}
            <motion.p
              variants={itemVariants}
              className="font-mono text-sm md:text-base text-purple-400 mb-4"
            >
              {"// Namaste(); 🙏"}
            </motion.p>

            {/* Main heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6"
            >
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">
                Nithish
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-300 font-light mb-4"
            >
              Frontend Developern & AI Enthusiast
            </motion.p>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-base md:text-lg mb-8 max-w-lg mx-auto md:mx-0"
            >
              Crafting elegant web experiences with a passion for AI and Software Development. 
              I’m a full stack developer and AI enthusiast, currently pursuing my MSc in Advanced Artificial Intelligence. 
              I’ve built projects across AI, IoT, and web development. I also trained and mentored 60+ interns in full stack development.
              I’m driven by clean design, meaningful user experiences, and the intersection of creativity and technology.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <motion.button
                onClick={() => scrollTo("#projects")}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="
                  px-8 py-3 rounded-full
                  bg-gradient-to-r from-purple-500 to-pink-500
                  text-white font-medium
                  shadow-lg shadow-purple-500/25
                  hover:shadow-xl hover:shadow-purple-500/30
                  transition-shadow duration-300
                "
              >
                View Projects
              </motion.button>
              
              <motion.button
                onClick={() => scrollTo("#contact")}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="
                  px-8 py-3 rounded-full
                  bg-white/5 border border-white/10
                  text-white font-medium
                  hover:bg-white/10 hover:border-white/20
                  transition-all duration-300
                "
              >
                Contact Me
              </motion.button>
            </motion.div>

            {/* Location badge */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex items-center justify-center md:justify-start gap-2 text-gray-500"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-sm">Leeds, UK</span>
            </motion.div>
          </motion.div>

          {/* Visual Element - Profile Image with Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden md:flex items-center justify-center"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Outer rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-purple-500/30"
              />
              
              {/* Middle rotating ring (opposite direction) */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-pink-500/25"
              />
              
              {/* Glowing background ring */}
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="
                  absolute inset-8 rounded-full
                  bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-cyan-500/30
                  blur-xl
                "
              />
              
              {/* Profile Image Container */}
              <motion.div
                animate={{ 
                  scale: [1, 1.02, 1],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-12 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl shadow-purple-500/20"
              >
                <img 
                  src="/NSD.png" 
                  alt="Nithish Sagar" 
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating dots around the image */}
              {[...Array(8)].map((_, i) => {
                const angle = (i / 8) * Math.PI * 2;
                const radius = 48;
                return (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.25,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
                    style={{
                      top: `${50 + Math.sin(angle) * radius}%`,
                      left: `${50 + Math.cos(angle) * radius}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  />
                );
              })}
              
              {/* Orbiting dot */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
                style={{ transformOrigin: 'center center' }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 shadow-lg shadow-cyan-500/50" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="text-xs font-mono">scroll</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
