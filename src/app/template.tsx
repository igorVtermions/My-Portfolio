import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/reveal";

export default function Template({ children }: { children: ReactNode }) {
  return (
    <Reveal className="route-content" variant="title">
      {children}
    </Reveal>
  );
}
