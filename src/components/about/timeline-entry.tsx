"use client";
import { useMotionPreference } from "@/components/motion/use-motion-preference";

import { useRef, type ReactNode } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { Reveal } from "@/components/motion/reveal";

export function TimelineEntry({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const active = useInView(ref, { margin: "-15% 0px -35% 0px" });
  const reduced = useMotionPreference();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 50%"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <div ref={ref} className="timeline-entry" data-active={active}>
      <Reveal className="timeline-item">
        <motion.span
          aria-hidden="true"
          className="timeline-progress"
          style={{ scaleY: reduced ? 1 : scaleY }}
        />
        <motion.span
          aria-hidden="true"
          className="timeline-marker"
          animate={{ scale: reduced ? 1 : active ? 1.4 : 1 }}
        />
        {children}
      </Reveal>
    </div>
  );
}
