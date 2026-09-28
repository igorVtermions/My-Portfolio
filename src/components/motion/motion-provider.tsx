"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

export function MotionProvider({ children }: { children: ReactNode }) {
  // Each animation uses the SSR-safe preference hook. Keep Motion's mount-time
  // policy stable so its initial server snapshot cannot freeze later animations.
  return <MotionConfig reducedMotion="never">{children}</MotionConfig>;
}
