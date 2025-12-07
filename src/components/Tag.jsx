/**
 * Tag Component
 * Reusable chip/tag for skills, tech stack, etc.
 * Includes hover animation with lift and glow effect
 */

import { motion } from "framer-motion";

const Tag = ({ text, variant = "default" }) => {
  const variants = {
    default: "bg-white/5 border-white/10 text-gray-300 hover:border-purple-500/50",
    primary: "bg-purple-500/10 border-purple-500/30 text-purple-300 hover:border-purple-400",
    secondary: "bg-cyan-500/10 border-cyan-500/30 text-cyan-300 hover:border-cyan-400",
  };

  return (
    <motion.span
      whileHover={{ 
        scale: 1.05, 
        y: -2,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`
        inline-block px-3 py-1.5 text-sm font-medium
        rounded-full border backdrop-blur-sm
        transition-colors duration-300
        cursor-default
        ${variants[variant]}
      `}
    >
      {text}
    </motion.span>
  );
};

export default Tag;
