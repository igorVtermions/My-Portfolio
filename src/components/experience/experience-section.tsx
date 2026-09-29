import { experiences } from "@/content/experiences";
import { Section, SectionHeading } from "@/components/ui/primitives";
import { ExperienceEntry } from "./experience-entry";
import { AuthorProductFeature } from "@/components/projects/author-product-feature";

export function ExperienceSection() {
  return (
    <Section id="projetos" className="experience-section">
      <SectionHeading
        id="projetos-title"
        eyebrow="Experiência profissional"
        title={
          <>
            Onde trabalhei.
            <br />O que entreguei.
          </>
        }
      />
      <div className="experience-list">
        {experiences.map((experience) => (
          <ExperienceEntry key={experience.slug} experience={experience} />
        ))}
      </div>
      <AuthorProductFeature />
    </Section>
  );
}
