"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Core position
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth trail for the outer ring
  const trailX = useSpring(mouseX, { damping: 30, stiffness: 200 });
  const trailY = useSpring(mouseY, { damping: 30, stiffness: 200 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement;
      const isInteractive =
        target.closest("button") ||
        target.closest("a") ||
        target.closest("input") ||
        target.closest("textarea") ||
        window.getComputedStyle(target).cursor === "pointer";

      setIsHovering(!!isInteractive);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (typeof window === "undefined") return null;

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-[9999] hidden lg:block">
        {/* Outer Ring / Trail */}
        <motion.div
          className="absolute top-0 left-0 w-10 h-10 rounded-full border border-indigo-500/30 dark:border-indigo-400/20"
          style={{
            x: trailX,
            y: trailY,
            translateX: "-50%",
            translateY: "-50%",
            opacity: isVisible ? 1 : 0,
          }}
          animate={{
            scale: isClicking ? 0.8 : isHovering ? 2 : 1,
            backgroundColor: isHovering ? "rgba(99, 102, 241, 0.1)" : "rgba(99, 102, 241, 0)",
          }}
        />

        {/* Inner Dot */}
        <motion.div
          className="absolute top-0 left-0 w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"
          style={{
            x: mouseX,
            y: mouseY,
            translateX: "-50%",
            translateY: "-50%",
            opacity: isVisible ? 1 : 0,
          }}
          animate={{
            scale: isClicking ? 1.5 : isHovering ? 0.5 : 1,
          }}
        />
      </div>

      <style jsx global>{`
        @media (min-width: 1024px) {
          body, a, button, input, textarea {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;