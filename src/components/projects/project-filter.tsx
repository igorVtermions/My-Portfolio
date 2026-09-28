"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useIsPresent,
  useReducedMotion,
} from "motion/react";
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
  const reduced = useReducedMotion();
  return (
    <motion.div
      layout={!reduced}
      initial={false}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduced ? 0 : motionTokens.base }}
      inert={!present}
    >
      <ProjectCard project={project} />
    </motion.div>
  );
}

export function ProjectFilter() {
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
