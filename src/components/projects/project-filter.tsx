"use client";
import { useMotionPreference } from "@/components/motion/use-motion-preference";

import { useState } from "react";
import { AnimatePresence, motion, useIsPresent } from "motion/react";
import {
  projects,
  type Project,
  type ProjectCategory,
} from "@/content/projects";
import { motionTokens } from "@/lib/motion-tokens";
import { ProjectCard } from "./project-card";

const categories = ["Todos", "Autoral", "Profissional"] as const;

function FilteredProject({ project }: { project: Project }) {
  const present = useIsPresent();
  const reduced = useMotionPreference();
  return (
    <motion.div
      layout={!reduced}
      initial={reduced ? false : { opacity: 0.3, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduced ? 0 : motionTokens.base }}
      inert={!present}
    >
      <ProjectCard project={project} />
    </motion.div>
  );
}

export function ProjectFilter() {
  const reduced = useMotionPreference();
  const [selectedCategory, setSelectedCategory] = useState<
    ProjectCategory | "Todos"
  >("Todos");
  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === "Todos" || project.category === selectedCategory,
  );
  return (
    <>
      <div className="filter-bar" role="group" aria-label="Filtrar projetos">
        {categories.map((category) => (
          <button
            key={category}
            className="filter-button"
            aria-pressed={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          >
            {selectedCategory === category && (
              <motion.span
                className="filter-indicator"
                layoutId={reduced ? undefined : "project-filter-indicator"}
                transition={{
                  duration: reduced ? 0 : motionTokens.base,
                  ease: motionTokens.ease,
                }}
              />
            )}
            {category}{" "}
            <sup>
              {
                projects.filter(
                  (project) =>
                    category === "Todos" || project.category === category,
                ).length
              }
            </sup>
          </button>
        ))}
      </div>
      <p className="filter-status note" role="status">
        {filteredProjects.length}{" "}
        {filteredProjects.length === 1
          ? "caso encontrado"
          : "casos encontrados"}
      </p>
      <div className="project-list">
        <AnimatePresence initial={false}>
          {filteredProjects.map((project) => (
            <FilteredProject key={project.slug} project={project} />
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}
