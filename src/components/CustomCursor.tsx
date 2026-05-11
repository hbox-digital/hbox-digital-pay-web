"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CustomCursorProps {
  isHovered: boolean;
}

export const CustomCursor = ({ isHovered }: CustomCursorProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  if (!isHovered) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999] flex items-center justify-center"
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <div className="relative transform -translate-x-1/2 -translate-y-1/2">
        {/* Circular Background */}
        <div className="w-24 h-24 bg-black rounded-full flex flex-col items-center justify-center shadow-2xl gap-1">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
              fill="white"
              stroke="white"
              strokeWidth="0.5"
            />
          </svg>
          <span className="text-white font-bold text-sm uppercase tracking-wide">
            VIEW
          </span>
        </div>
      </div>
    </motion.div>
  );
};
