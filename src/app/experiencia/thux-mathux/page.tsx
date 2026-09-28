import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { ProjectCase } from "@/components/projects/project-case";

export const metadata: Metadata = {
  title: "Experiência na Thux / Mathux",
  description:
    "Atuação Full Stack de Igor Franco na Thux/Mathux, de junho de 2025 a agosto de 2026. Desenvolvimento web, mobile e APIs.",
};
export default function ExperiencePage() {
  const project = projects.find((item) => item.slug === "thux-mathux");
  if (!project) notFound();
  return <ProjectCase project={project} />;
}
