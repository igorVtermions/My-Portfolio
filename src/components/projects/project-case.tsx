import type { Project } from "@/content/projects";
import { repositories } from "@/content/repositories";
import { ActionLink, Tags } from "@/components/ui/primitives";
import { Reveal } from "@/components/motion/reveal";
import { RepositoryIndex } from "@/components/home/repository-index";
import { ProjectArt } from "./project-art";

export function ProjectCase({ project }: { project: Project }) {
  const sections = [
    { label: "01 / Contexto", title: project.name, body: project.context },
    {
      label: "02 / Minha contribuição",
      title: "Onde entrei no trabalho.",
      body: project.contribution,
    },
    { label: "03 / Tecnologia", title: "As peças da construção.", body: null },
    {
      label: "04 / Estado atual",
      title: "O que existe hoje.",
      body: project.currentState,
    },
  ];
  return (
    <>
      <section className="page-title">
        <ActionLink href="/projetos" icon="arrow-left">
          Todos os projetos
        </ActionLink>
        <p className="eyebrow case-eyebrow">
          {project.slug === "thux-mathux" ? "Experiência" : "Projeto"} /{" "}
          {project.name}
        </p>
        <h1>
          {project.title[0]}
          <br />
          <em>{project.title[1]}</em>
        </h1>
        <div className="case-meta">
          <div>
            <span>Papel</span>
            <p>{project.role}</p>
          </div>
          <div>
            <span>Momento</span>
            <p>
              {project.period && <>{project.period} · </>}
              {project.status}
            </p>
          </div>
        </div>
      </section>
      <ProjectArt project={project} />
      <div className="case-text">
        {sections.map((section) => (
          <Reveal className="case-section" key={section.label}>
            <span className="eyebrow">{section.label}</span>
            <section>
              <h2>{section.title}</h2>
              {section.body ? (
                <p>{section.body}</p>
              ) : (
                <Tags items={project.technologies} />
              )}
            </section>
          </Reveal>
        ))}
      </div>
      <p className="note section">
        As composições são conceituais. Capturas reais, demonstração e
        resultados poderão ser adicionados quando estiverem disponíveis para
        divulgação.
      </p>
      <section className="section contact-strip">
        <h2>Quer saber mais?</h2>
        <ActionLink href="/contato" variant="primary">
          Vamos conversar
        </ActionLink>
      </section>
      {project.repositoryNames.length > 0 && (
        <RepositoryIndex
          items={repositories.filter((repository) =>
            project.repositoryNames.includes(repository.name),
          )}
        />
      )}
    </>
  );
}
