"use client";
import { useMotionPreference } from "@/components/motion/use-motion-preference";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

export function ScrollSurface({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useMotionPreference();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [10, -10]);
  return (
    <motion.div
      ref={ref}
      className={`scroll-surface ${className}`}
      style={{ y: reduced ? 0 : y }}
    >
      {children}
    </motion.div>
  );
}
