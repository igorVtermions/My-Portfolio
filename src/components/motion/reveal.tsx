"use client";
import { useMotionPreference } from "@/components/motion/use-motion-preference";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { motionTokens } from "@/lib/motion-tokens";
import { useCompactViewport } from "./use-compact-viewport";

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "content",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "content" | "title" | "visual";
}) {
  const reduced = useMotionPreference();
  const compact = useCompactViewport();
  return (
    <motion.div
      className={`reveal reveal-${variant} ${className ?? ""}`}
      initial={false}
      whileInView={
        reduced
          ? undefined
          : {
              y: [
                compact || variant === "title"
                  ? motionTokens.smallDistance
                  : motionTokens.distance,
                0,
              ],
              opacity: [1, 1],
            }
      }
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: motionTokens.reveal,
        delay: reduced ? 0 : Math.min(delay, 0.24),
        ease: motionTokens.ease,
      }}
    >
      {children}
    </motion.div>
  );
}
