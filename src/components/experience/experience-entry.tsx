import type { Experience } from "@/content/experiences";
import { ActionLink } from "@/components/ui/primitives";
import { TechnologyIcon } from "@/components/ui/technology-icon";
import { Reveal } from "@/components/motion/reveal";
import { ExperiencePeriod } from "./experience-period";

export function ExperienceEntry({ experience }: { experience: Experience }) {
  return (
    <Reveal>
      <article
        className="experience-entry"
        aria-labelledby={`${experience.slug}-heading`}
      >
        <div className="experience-dates">
          <span className="experience-state" data-current={!experience.endDate}>
            {experience.endDate ? "Experiência anterior" : "Atuação atual"}
          </span>
          <ExperiencePeriod experience={experience} />
          {experience.engagement && (
            <span className="experience-engagement">
              {experience.engagement}
            </span>
          )}
        </div>
        <div className="experience-content">
          <p className="eyebrow">{experience.scope}</p>
          <h3 id={`${experience.slug}-heading`}>{experience.name}</h3>
          <p className="experience-role">{experience.role}</p>
          <p className="experience-summary">{experience.summary}</p>
          <ul className="experience-contributions">
            {experience.contributions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <ul
            className="experience-technologies"
            aria-label="Tecnologias utilizadas"
          >
            {experience.technologies.map((name) => (
              <li key={name}>
                <TechnologyIcon name={name} />
                <span>{name}</span>
              </li>
            ))}
          </ul>
          <ActionLink href={experience.href} icon="arrow-right">
            {experience.cta}
          </ActionLink>
        </div>
      </article>
    </Reveal>
  );
}
