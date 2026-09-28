"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { motionTokens } from "@/lib/motion-tokens";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={
        reduced
          ? undefined
          : { y: [motionTokens.smallDistance, 0], opacity: [0.75, 1] }
      }
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: motionTokens.reveal,
        delay: reduced ? 0 : Math.min(delay, 0.15),
        ease: motionTokens.ease,
      }}
    >
      {children}
    </motion.div>
  );
}
