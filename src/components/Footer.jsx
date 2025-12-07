/**
 * Footer Component
 * Simple footer with copyright and credits
 */

import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Logo */}
          <a href="#home" className="font-mono text-sm text-gray-500 hover:text-gray-300 transition-colors">
            <span className="text-purple-400">{"<"}</span>
            Nithish
            <span className="text-purple-400">{" />"}</span>
          </a>

          {/* Copyright */}
          <p className="text-sm text-gray-600 text-center">
            Designed & Built by{" "}
            <span className="text-gray-400">Nithish Sagar Dharmappa</span>
            {" "} © {currentYear}
          </p>

          {/* Back to top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="
              flex items-center gap-2
              text-sm text-gray-500 hover:text-gray-300
              transition-colors
            "
          >
            Back to top
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
