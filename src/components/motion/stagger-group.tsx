import { Children, type ReactNode } from "react";
import { Reveal } from "./reveal";
import { motionTokens } from "@/lib/motion-tokens";

export function StaggerGroup({
  children,
  className,
  columns = 2,
}: {
  children: ReactNode;
  className?: string;
  columns?: number;
}) {
  return (
    <div className={className}>
      {Children.toArray(children).map((child, index) => (
        <Reveal
          key={
            typeof child === "object" && child !== null && "key" in child
              ? child.key
              : index
          }
          delay={(index % columns) * motionTokens.stagger}
        >
          {child}
        </Reveal>
      ))}
    </div>
  );
}
