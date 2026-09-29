import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { ProjectCase } from "@/components/projects/project-case";
import { experiences, experiencePeriod } from "@/content/experiences";
import { ExperienceCase } from "@/components/experience/experience-case";

const legacyExperiences = experiences.filter((item) =>
  item.href.startsWith("/projetos/"),
);
const cases = [...projects, ...legacyExperiences];
export function generateStaticParams() {
  return cases.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = cases.find((item) => item.slug === slug);
  if (!project) notFound();
  return {
    title: project.name,
    description:
      "startDate" in project
        ? `${experiencePeriod(project)}. ${project.summary}`
        : project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = cases.find((item) => item.slug === slug);
  if (!project) notFound();
  return "startDate" in project ? (
    <ExperienceCase experience={project} />
  ) : (
    <ProjectCase project={project} />
  );
}
