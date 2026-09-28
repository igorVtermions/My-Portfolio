import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { ProjectCase } from "@/components/projects/project-case";

const cases = projects.filter((project) => project.slug !== "thux-mathux");
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
  return { title: project.name, description: project.summary };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = cases.find((item) => item.slug === slug);
  if (!project) notFound();
  return <ProjectCase project={project} />;
}
