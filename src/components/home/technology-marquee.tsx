"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { TechnologyIcon } from "@/components/ui/technology-icon";
import { useInView } from "motion/react";

const technologies = [
  "React Native",
  "TypeScript",
  "React / Next.js",
  "Node.js",
];
const subscribe = () => () => {};
const clientSnapshot = () => true;
const serverSnapshot = () => false;

export function TechnologyMarquee() {
  const ref = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);
  const ready = useSyncExternalStore(subscribe, clientSnapshot, serverSnapshot);
  const visible = useInView(ref);
  const [paused, setPaused] = useState(false);
  const running = !paused;
  const [pageVisible, setPageVisible] = useState(true);

  useEffect(() => {
    const onVisibility = () => setPageVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    const group = groupRef.current;
    const observer = new ResizeObserver(() => {
      if (group && trackRef.current)
        trackRef.current.style.setProperty(
          "--marquee-duration",
          `${group.getBoundingClientRect().width / 32}s`,
        );
    });
    if (group) observer.observe(group);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="technology-marquee"
      data-ready={ready}
      data-enabled={running}
      data-running={ready && visible && pageVisible && running}
    >
      <ul className="sr-only" aria-label="Tecnologias em destaque">
        {technologies.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="marquee-window" aria-hidden="true">
        <div ref={trackRef} className="marquee-track">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              ref={copy === 0 ? groupRef : undefined}
              className="marquee-group"
            >
              {technologies.map((item) => (
                <span key={item}>
                  <TechnologyIcon name={item} />
                  {item}
                  <i>+</i>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <button
        type="button"
        className="marquee-control"
        aria-pressed={!running}
        onClick={(event) => {
          setPaused(running);
          if (event.detail > 0) event.currentTarget.blur();
        }}
        disabled={!ready}
        aria-label={running ? "Pausar movimento" : "Reproduzir movimento"}
      >
        <span aria-hidden="true">{running ? "Ⅱ" : "▷"}</span>
      </button>
    </div>
  );
}
