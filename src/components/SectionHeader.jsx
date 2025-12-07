/**
 * SectionHeader Component
 * Reusable header for each section with monospace styling
 * Includes animated underline effect
 */

import { motion } from "framer-motion";

const SectionHeader = ({ title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="mb-16 text-center"
    >
      {/* Monospace section tag */}
      <span className="font-mono text-sm text-purple-400/80 tracking-wider">
        {"<"}
        {title}
        {" />"}
      </span>
      
      {/* Main title */}
      <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">
        {subtitle}
      </h2>
      
      {/* Animated gradient underline */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "80px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mx-auto mt-4 h-1 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500"
      />
    </motion.div>
  );
};

export default SectionHeader;
