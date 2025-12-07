/**
 * GlassCard Component
 * Reusable glassmorphism card with blur and border effects
 * Used throughout the portfolio for consistent styling
 */

import { motion } from "framer-motion";

const GlassCard = ({ 
  children, 
  className = "", 
  hover = true,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: delay,
        ease: "easeOut" 
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={hover ? { 
        y: -5, 
        boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.15)",
      } : {}}
      className={`
        relative overflow-hidden
        bg-white/[0.03] backdrop-blur-xl
        border border-white/[0.08]
        rounded-2xl
        transition-all duration-300
        ${hover ? "hover:border-purple-500/30 hover:bg-white/[0.05]" : ""}
        ${className}
      `}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.02] to-transparent pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default GlassCard;
