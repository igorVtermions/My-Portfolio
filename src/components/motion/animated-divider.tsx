"use client";
import { useMotionPreference } from "@/components/motion/use-motion-preference";

import { motion } from "motion/react";
import { motionTokens } from "@/lib/motion-tokens";

export function AnimatedDivider() {
  const reduced = useMotionPreference();
  return (
    <motion.span
      aria-hidden="true"
      className="section-divider"
      initial={false}
      whileInView={
        reduced ? undefined : { scaleX: [0.15, 1], opacity: [0.4, 1] }
      }
      viewport={{ once: true }}
      transition={{ duration: motionTokens.reveal, ease: motionTokens.ease }}
    />
  );
}
