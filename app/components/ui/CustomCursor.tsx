"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Use motion values for smoother, higher-performance movement.
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Damping and stiffness for high-end "elastic" feel
  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive =
        target.closest("button") ||
        target.closest("a") ||
        target.closest("input") ||
        target.closest("textarea") ||
        window.getComputedStyle(target).cursor === "pointer";

      setIsHovering(!!isInteractive);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary/40 pointer-events-none z-[9999] hidden lg:block"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          scale: isClicking ? 0.7 : isHovering ? 1.5 : 1,
          borderColor: isHovering
            ? "rgba(147, 51, 234, 0.6)" // Purple-600 with opacity
            : "rgba(107, 114, 128, 0.4)", // Gray-500 with opacity
          backgroundColor: isHovering 
            ? "rgba(147, 51, 234, 0.05)" 
            : "rgba(0, 0, 0, 0)",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      />

      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-primary rounded-full pointer-events-none z-[9999] hidden lg:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicking ? 1.5 : isHovering ? 0.5 : 1,
          backgroundColor: isHovering ? "#9333ea" : "#6366f1", // purple-600 to indigo-500
        }}
      />

      <style jsx global>{`
        @media (min-width: 1024px) {
          body, a, button {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;