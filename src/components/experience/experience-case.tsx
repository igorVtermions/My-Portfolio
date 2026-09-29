import type { Experience } from "@/content/experiences";
import { ActionLink, Tags } from "@/components/ui/primitives";
import { Reveal } from "@/components/motion/reveal";
import { ExperiencePeriod } from "./experience-period";

export function ExperienceCase({ experience }: { experience: Experience }) {
  return (
    <>
      <section className="page-title experience-case-title">
        <ActionLink href="/projetos" icon="arrow-left">
          Trabalhos e produtos
        </ActionLink>
        <p className="eyebrow case-eyebrow">
          {experience.endDate ? "Experiência anterior" : "Atuação atual"}
          {experience.engagement && ` / ${experience.engagement}`}
        </p>
        <h1>
          {experience.name}
          <em>.</em>
        </h1>
        <p>
          {experience.role} · {experience.scope}
        </p>
        <ExperiencePeriod experience={experience} />
      </section>
      <div className="experience-case-body">
        <Reveal className="experience-case-context">
          <p className="eyebrow">Contexto</p>
          <h2>
            {experience.endDate
              ? "Da construção à publicação."
              : "Construindo junto, desde o início."}
          </h2>
          <p>{experience.context}</p>
        </Reveal>
        <Reveal className="experience-case-contributions">
          <p className="eyebrow">Minha contribuição</p>
          <h2>
            {experience.endDate
              ? "O que fiz nessa experiência."
              : "O que faço no produto."}
          </h2>
          <ul className="experience-contributions">
            {[...experience.contributions, ...experience.details].map(
              (item) => (
                <li key={item}>{item}</li>
              ),
            )}
          </ul>
        </Reveal>
        <Reveal className="experience-case-outcome">
          <p className="eyebrow">Entregas</p>
          <h2>{experience.outcome}</h2>
          <Tags items={experience.technologies} />
        </Reveal>
      </div>
      <section className="section contact-strip">
        <h2>Vamos construir o próximo?</h2>
        <ActionLink href="/contato" variant="primary">
          Vamos conversar
        </ActionLink>
      </section>
    </>
  );
}
