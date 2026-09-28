import { getRecentRepositories } from "@/lib/github-repositories";
import { type Repository } from "@/content/repositories";
import { StaggerGroup } from "@/components/motion/stagger-group";
import { profile } from "@/content/profile";
import { Icon } from "@/components/ui/icon";
import { TechnologyIcon } from "@/components/ui/technology-icon";
import {
  ActionLink,
  SectionHeading,
  Section,
} from "@/components/ui/primitives";

function RepositoryRow({ repository }: { repository: Repository }) {
  return (
    <a
      className="repository-row"
      href={repository.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="repository-card-top">
        <TechnologyIcon name="GitHub" />
        <Icon name="external-link" />
      </span>
      <span className="repository-name">{repository.name}</span>
      <span className="repository-description">{repository.description}</span>
      <span className="repository-language">
        <TechnologyIcon name={repository.language} />
        {repository.language}
      </span>
    </a>
  );
}

export async function RepositoryIndex({ items }: { items?: Repository[] }) {
  const result = items ? { items, live: false } : await getRecentRepositories();
  return (
    <Section id="repositories" className="repository-index">
      <div className="heading-with-action">
        <SectionHeading
          id="repositories-title"
          eyebrow="Código público / @igorVtermions"
          title={
            result.live
              ? "Últimas atualizações no GitHub."
              : "Por dentro dos projetos."
          }
          description={
            result.live
              ? "Experimentos, produtos e código em evolução. Explore o que tenho desenvolvido."
              : undefined
          }
        />
        <ActionLink href={`${profile.github}?tab=repositories`}>
          Meu GitHub
        </ActionLink>
      </div>
      <StaggerGroup columns={3} className="repository-grid">
        {result.items.map((repository) => (
          <RepositoryRow key={repository.name} repository={repository} />
        ))}
      </StaggerGroup>
    </Section>
  );
}
