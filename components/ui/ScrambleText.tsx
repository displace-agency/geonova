import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface ScrambleTextProps {
  text: string;
  className?: string;
  scrambleSpeed?: number;
  revealSpeed?: number;
  trigger?: boolean;
  delay?: number;
}

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

const ScrambleText: React.FC<ScrambleTextProps> = ({ 
  text, 
  className = "", 
  scrambleSpeed = 30, 
  revealSpeed = 50, // ms between revealing each character
  trigger = true,
  delay = 0
}) => {
  const [displayText, setDisplayText] = useState("");
  const intervalRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (!trigger) return;

    // Initial delay before starting
    const startTimeout = setTimeout(() => {
      let scrambleIndex = 0;
      
      intervalRef.current = window.setInterval(() => {
        const scrambled = text.split('').map((char, index) => {
          if (index < scrambleIndex) {
            return char;
          }
          // Preserve spaces
          if (char === ' ') return ' ';
          return characters[Math.floor(Math.random() * characters.length)];
        }).join('');

        setDisplayText(scrambled);

        if (scrambleIndex >= text.length) {
          if (intervalRef.current) clearInterval(intervalRef.current);
        }

        // Randomly increment progress to make it feel organic, but ensure it eventually finishes
        // Using a fractional increment and floor for the index creates a variable speed effect
        scrambleIndex += 1/3; 

      }, scrambleSpeed);

    }, delay * 1000);

    return () => {
      clearTimeout(startTimeout);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text, trigger, scrambleSpeed, delay]);

  return (
    <motion.span 
      className={`inline-block font-mono ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {displayText || text.split('').map(() => characters[Math.floor(Math.random() * characters.length)]).join('')}
    </motion.span>
  );
};

export default ScrambleText;