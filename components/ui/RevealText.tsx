import React from 'react';
import { motion } from 'framer-motion';

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  tag?: keyof React.JSX.IntrinsicElements;
}

const RevealText: React.FC<RevealTextProps> = ({ text, className, delay = 0, tag: Tag = 'div' }) => {
  // Split text into words
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.02, delayChildren: 0.04 * i + delay },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  // @ts-ignore - Dynamic tag creation with motion
  const MotionTag = motion[Tag] || motion.div;

  return (
    <MotionTag
      className={`flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index} className="mr-[0.25em] inline-block">
          {word}
        </motion.span>
      ))}
    </MotionTag>
  );
};

export default RevealText;