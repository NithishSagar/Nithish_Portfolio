/**
 * Contact Component
 * Contact section with email CTA and social links
 * 
 * Animation:
 * - Content slides in on scroll
 * - Buttons have hover lift effects
 */

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const Contact = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/NithishSagar",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/nithishsagar", // Update with your actual LinkedIn
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      name: "Email",
      url: "mailto:nsd8681@gmail.com",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="relative py-16 md:py-24 lg:py-32">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/4 w-60 md:w-80 h-60 md:h-80 bg-purple-500/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-1/4 w-60 md:w-80 h-60 md:h-80 bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="CONTACT" subtitle="Let's connect" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Friendly intro text */}
          <p className="text-gray-300 text-base md:text-lg mb-3 md:mb-4">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology.
          </p>
          <p className="text-gray-400 text-sm md:text-base mb-6 md:mb-8">
            Whether you have a question, want to collaborate, or just want to say hello — 
            my inbox is always open!
          </p>

          {/* Email CTA Button */}
          <motion.a
            href="mailto:nsd8681@gmail.com"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="
              inline-flex items-center gap-2 md:gap-3
              px-6 md:px-8 py-3 md:py-4 mb-6 md:mb-8
              text-base md:text-lg font-medium
              bg-gradient-to-r from-purple-500 to-pink-500
              text-white rounded-full
              shadow-lg shadow-purple-500/25
              hover:shadow-xl hover:shadow-purple-500/30
              transition-shadow duration-300
            "
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Say Hello
          </motion.a>

          {/* Contact details */}
          <div className="mb-8 md:mb-10 space-y-2 text-gray-500 text-sm md:text-base">
            <p className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
              <span className="text-gray-400">Email:</span>
              <a 
                href="mailto:nsd8681@gmail.com" 
                className="text-purple-400 hover:text-purple-300 transition-colors break-all"
              >
                nsd8681@gmail.com
              </a>
            </p>
            <p className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
              <span className="text-gray-400">Phone:</span>
              <a 
                href="tel:+447407640655" 
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                +44 7407 640655
              </a>
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="text-gray-400">Location:</span>
              <span>Leeds, UK</span>
            </p>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target={link.name !== "Email" ? "_blank" : undefined}
                rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -3,
                }}
                whileTap={{ scale: 0.95 }}
                className="
                  p-4 rounded-full
                  bg-white/5 border border-white/10
                  text-gray-400 hover:text-white
                  hover:bg-white/10 hover:border-purple-500/30
                  transition-all duration-300
                "
                aria-label={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
