import React from "react";
import { motion } from "framer-motion";

interface SplitTextProps {
  text: string;
  delay?: number;
  stagger?: number;  // ✅ Add stagger here
  direction?: "top" | "bottom";
  className?: string;
}

const SplitText: React.FC<SplitTextProps> = ({ text, delay = 50, stagger = 0.1, direction = "top", className }) => {
  const variants = {
    hidden: { opacity: 0, y: direction === "top" ? -20 : 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: stagger } },  // ✅ Fix stagger usage
  };

  return (
    <motion.span initial="hidden" animate="visible" variants={variants} className={`inline-block ${className}`}>
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={variants} className="inline-block">
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default SplitText;
