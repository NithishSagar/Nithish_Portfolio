/**
 * AnimatedBlob Component
 * Decorative floating blob with gradient and animation
 * Used in Hero and other sections for visual interest
 */

import { motion } from "framer-motion";

const AnimatedBlob = ({ 
  className = "",
  colors = ["purple", "pink", "cyan"],
  size = "400px",
  blur = "100px",
}) => {
  // Generate gradient based on colors
  const gradientColors = {
    purple: "#8b5cf6",
    pink: "#ec4899",
    cyan: "#06b6d4",
    blue: "#3b82f6",
    indigo: "#6366f1",
  };

  const gradient = colors
    .map((color) => gradientColors[color] || color)
    .join(", ");

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ 
        scale: [1, 1.1, 1],
        opacity: [0.3, 0.5, 0.3],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${gradient})`,
        filter: `blur(${blur})`,
      }}
      className={`absolute rounded-full pointer-events-none ${className}`}
    />
  );
};

export default AnimatedBlob;
