import { projects } from "@/content/projects";
import { ProjectCard, ProjectRow } from "@/components/projects/project-card";
import {
  Section,
  SectionHeading,
  ActionLink,
} from "@/components/ui/primitives";
import { Reveal } from "@/components/motion/reveal";

export function SelectedProjects() {
  return (
    <Section id="projetos">
      <div className="heading-with-action">
        <SectionHeading
          id="projetos-title"
          eyebrow="04 / Trabalho em foco"
          title="O que estou construindo."
        />
        <ActionLink href="/projetos">Ver seleção</ActionLink>
      </div>
      <Reveal>
        <ProjectCard project={projects[0]} featured />
      </Reveal>
      {projects.slice(1).map((project, index) => (
        <ProjectRow
          key={project.slug}
          project={project}
          number={`0${index + 2}`}
        />
      ))}
    </Section>
  );
}
