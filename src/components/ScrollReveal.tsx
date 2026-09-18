"use client";

import React from "react";
import { motion } from "motion/react";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
  once?: boolean;
  scale?: number;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  distance = 28,
  duration = 0.75,
  className = "",
  style = {},
  once = true,
  scale = 1,
}: ScrollRevealProps) {
  const getInitial = () => {
    const base: Record<string, any> = { opacity: 0 };
    if (scale !== 1) base.scale = scale;

    switch (direction) {
      case "up":
        base.y = distance;
        break;
      case "down":
        base.y = -distance;
        break;
      case "left":
        base.x = distance;
        break;
      case "right":
        base.x = -distance;
        break;
      case "none":
        break;
    }
    return base;
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once, margin: "0px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
