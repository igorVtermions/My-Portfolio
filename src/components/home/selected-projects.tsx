import { ProjectCarousel } from "@/components/projects/project-carousel";
import {
  Section,
  SectionHeading,
  ActionLink,
} from "@/components/ui/primitives";

export function SelectedProjects() {
  return (
    <Section id="projetos">
      <div className="heading-with-action">
        <SectionHeading
          id="projetos-title"
          eyebrow="Trabalho em foco"
          title="O que estou construindo."
        />
        <ActionLink href="/projetos">Ver seleção</ActionLink>
      </div>
      <ProjectCarousel />
    </Section>
  );
}
