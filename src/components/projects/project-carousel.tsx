"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "motion/react";
import { projects } from "@/content/projects";
import { ProjectCard } from "./project-card";
import { Icon } from "@/components/ui/icon";
import { useMotionPreference } from "@/components/motion/use-motion-preference";

export function ProjectCarousel() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [visible, setVisible] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.25 });
  const reduced = useMotionPreference();
  const running = playing;
  useEffect(() => {
    const change = () => setVisible(!document.hidden);
    document.addEventListener("visibilitychange", change);
    return () => document.removeEventListener("visibilitychange", change);
  }, []);
  useEffect(() => {
    if (!running || !inView || !visible) return;
    const timer = setTimeout(
      () => setIndex((current) => (current + 1) % projects.length),
      6500,
    );
    return () => clearTimeout(timer);
  }, [running, inView, visible, index]);
  function select(next: number) {
    setIndex((next + projects.length) % projects.length);
  }
  return (
    <div
      ref={ref}
      className="project-carousel"
      role="region"
      aria-roledescription="carrossel"
      aria-label="Trabalhos em foco"
    >
      <div aria-live={running ? "off" : "polite"} className="carousel-stage">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={projects[index].slug}
            initial={{ opacity: 0.2, x: reduced ? 0 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: reduced ? 0 : -20 }}
            transition={{ duration: reduced ? 0.1 : 0.4 }}
          >
            <ProjectCard project={projects[index]} featured />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="carousel-controls">
        <div className="carousel-tabs">
          {projects.map((project, position) => (
            <button
              type="button"
              key={project.slug}
              aria-pressed={position === index}
              onClick={() => select(position)}
            >
              {project.name}
            </button>
          ))}
        </div>
        <div className="carousel-buttons">
          <button
            type="button"
            aria-label="Projeto anterior"
            onClick={() => select(index - 1)}
          >
            <Icon name="arrow-left" />
          </button>
          <button
            type="button"
            aria-label={running ? "Pausar projetos" : "Reproduzir projetos"}
            onClick={() => {
              setPlaying(!running);
            }}
          >
            {running ? "Ⅱ" : "▷"}
          </button>
          <button
            type="button"
            aria-label="Próximo projeto"
            onClick={() => select(index + 1)}
          >
            <Icon name="arrow-right" />
          </button>
        </div>
      </div>
    </div>
  );
}
