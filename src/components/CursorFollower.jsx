/**
 * CursorFollower Component
 * An innovative magnetic cursor with particle trail, morphing shape, and interactive effects
 * Hidden on touch devices for better mobile experience
 */

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";

const CursorFollower = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [trail, setTrail] = useState([]);
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const lastPos = useRef({ x: 0, y: 0 });
  const trailId = useRef(0);

  // Motion values for cursor position
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Multiple spring configs for layered following effect
  const fastSpring = { damping: 30, stiffness: 400 };
  const mediumSpring = { damping: 25, stiffness: 200 };
  const slowSpring = { damping: 20, stiffness: 100 };
  const trailSpring = { damping: 15, stiffness: 50 };

  // Create springs with different speeds
  const cursorXFast = useSpring(cursorX, fastSpring);
  const cursorYFast = useSpring(cursorY, fastSpring);
  const cursorXMedium = useSpring(cursorX, mediumSpring);
  const cursorYMedium = useSpring(cursorY, mediumSpring);
  const cursorXSlow = useSpring(cursorX, slowSpring);
  const cursorYSlow = useSpring(cursorY, slowSpring);
  const cursorXTrail = useSpring(cursorX, trailSpring);
  const cursorYTrail = useSpring(cursorY, trailSpring);

  // Transform velocity to rotation for dynamic cursor shape
  const rotation = useTransform(
    [cursorXFast, cursorYFast],
    ([x, y]) => {
      const angle = Math.atan2(velocity.y, velocity.x) * (180 / Math.PI);
      return velocity.x !== 0 || velocity.y !== 0 ? angle : 0;
    }
  );

  // Calculate stretch based on velocity
  const speed = Math.sqrt(velocity.x ** 2 + velocity.y ** 2);
  const stretch = Math.min(1 + speed * 0.02, 2);

  // Particle trail effect
  const addTrailParticle = useCallback((x, y) => {
    const id = trailId.current++;
    setTrail(prev => [...prev.slice(-12), { id, x, y, timestamp: Date.now() }]);
  }, []);

  useEffect(() => {
    // Clean up old trail particles
    const interval = setInterval(() => {
      setTrail(prev => prev.filter(p => Date.now() - p.timestamp < 600));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Check if touch device
    const checkTouchDevice = () => {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0
      );
    };
    checkTouchDevice();

    // Don't add listeners on touch devices
    if (isTouchDevice) return;

    let frameId;
    let lastTime = Date.now();

    const moveCursor = (e) => {
      const now = Date.now();
      const dt = Math.max(now - lastTime, 1);
      
      // Calculate velocity
      const vx = (e.clientX - lastPos.current.x) / dt * 16;
      const vy = (e.clientY - lastPos.current.y) / dt * 16;
      setVelocity({ x: vx, y: vy });
      
      lastPos.current = { x: e.clientX, y: e.clientY };
      lastTime = now;

      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      // Add trail particles based on movement
      if (Math.abs(vx) > 0.5 || Math.abs(vy) > 0.5) {
        addTrailParticle(e.clientX, e.clientY);
      }
      
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Track hoverable elements
    const handleHoverStart = (e) => {
      if (
        e.target.tagName === "A" ||
        e.target.tagName === "BUTTON" ||
        e.target.closest("a") ||
        e.target.closest("button") ||
        e.target.dataset.hover
      ) {
        setIsHovering(true);
      }
    };

    const handleHoverEnd = () => setIsHovering(false);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleHoverStart);
    document.addEventListener("mouseout", handleHoverEnd);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleHoverStart);
      document.removeEventListener("mouseout", handleHoverEnd);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [cursorX, cursorY, isVisible, isTouchDevice, addTrailParticle]);

  // Don't render on touch devices
  if (isTouchDevice) return null;

  return (
    <>
      {/* Trail particles */}
      <AnimatePresence>
        {trail.map((particle, index) => (
          <motion.div
            key={particle.id}
            initial={{ opacity: 0.8, scale: 1 }}
            animate={{ opacity: 0, scale: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed pointer-events-none z-[9995]"
            style={{
              left: particle.x,
              top: particle.y,
            }}
          >
            <div 
              className="w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                background: `linear-gradient(135deg, 
                  hsl(${280 + index * 10}, 80%, 60%) 0%, 
                  hsl(${320 + index * 10}, 80%, 60%) 100%)`,
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Magnetic field effect - outermost layer */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9996]"
        style={{
          x: cursorXTrail,
          y: cursorYTrail,
        }}
      >
        <motion.div
          animate={{
            scale: isHovering ? 3 : isClicking ? 0.8 : 1,
            opacity: isVisible ? 0.08 : 0,
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative -translate-x-1/2 -translate-y-1/2 w-48 h-48"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-conic from-purple-500 via-pink-500 via-cyan-400 to-purple-500 blur-3xl animate-spin-slow" 
            style={{ animationDuration: '8s' }}
          />
        </motion.div>
      </motion.div>

      {/* Morphing blob - slow layer */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997]"
        style={{
          x: cursorXSlow,
          y: cursorYSlow,
        }}
      >
        <motion.div
          animate={{
            scale: isHovering ? 2 : isClicking ? 0.6 : 1,
            opacity: isVisible ? 0.2 : 0,
            borderRadius: isHovering ? "30% 70% 70% 30% / 30% 30% 70% 70%" : "50%",
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 blur-xl"
        />
      </motion.div>

      {/* Ring layer - medium speed */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: cursorXMedium,
          y: cursorYMedium,
        }}
      >
        <motion.div
          animate={{
            scale: isHovering ? 2.5 : isClicking ? 0.7 : 1,
            opacity: isVisible ? 0.6 : 0,
            rotate: isHovering ? 180 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative -translate-x-1/2 -translate-y-1/2"
        >
          {/* Outer decorative ring */}
          <svg width="50" height="50" viewBox="0 0 50 50" className="absolute -translate-x-1/2 -translate-y-1/2">
            <defs>
              <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="50%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
            <circle 
              cx="25" 
              cy="25" 
              r="20" 
              fill="none" 
              stroke="url(#ringGradient)" 
              strokeWidth="1"
              strokeDasharray="4 4"
              className="animate-spin"
              style={{ animationDuration: '4s', transformOrigin: 'center' }}
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Main cursor - fastest layer with velocity stretching */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXFast,
          y: cursorYFast,
        }}
      >
        <motion.div
          animate={{
            scale: isHovering ? 2 : isClicking ? 0.5 : 1,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ duration: 0.15 }}
          className="relative -translate-x-1/2 -translate-y-1/2"
          style={{
            transform: `scaleX(${stretch}) rotate(${Math.atan2(velocity.y, velocity.x) * (180 / Math.PI)}deg)`,
          }}
        >
          {/* Core */}
          <div className="w-4 h-4 bg-white rounded-full relative">
            {/* Inner glow */}
            <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-30" 
              style={{ animationDuration: '2s' }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Click ripple effect */}
      <AnimatePresence>
        {isClicking && (
          <motion.div
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: 3, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed pointer-events-none z-[9994]"
            style={{
              left: cursorX.get(),
              top: cursorY.get(),
            }}
          >
            <div className="w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-purple-400" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hover text indicator */}
      <AnimatePresence>
        {isHovering && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed pointer-events-none z-[10000]"
            style={{
              x: cursorXFast,
              y: cursorYFast,
            }}
          >
            <div className="absolute top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-white/10 backdrop-blur-sm rounded text-[10px] text-white/80 font-mono whitespace-nowrap">
              click
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CursorFollower;
