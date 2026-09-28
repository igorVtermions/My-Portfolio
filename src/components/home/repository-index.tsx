import { repositories, type Repository } from "@/content/repositories";
import { profile } from "@/content/profile";
import { Icon } from "@/components/ui/icon";
import { ActionLink, SectionHeading } from "@/components/ui/primitives";

function RepositoryRow({ repository }: { repository: Repository }) {
  return (
    <a
      className="repository-row"
      href={repository.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="repository-name">{repository.name}</span>
      <span className="repository-description">{repository.description}</span>
      <span className="repository-language">{repository.language}</span>
      <Icon name="external-link" />
    </a>
  );
}

export function RepositoryIndex({
  items = repositories,
}: {
  items?: Repository[];
}) {
  return (
    <section
      className="section repository-index"
      aria-labelledby="repositories-title"
    >
      <div className="heading-with-action">
        <SectionHeading
          id="repositories-title"
          eyebrow="Código público / @igorVtermions"
          title="Por dentro dos projetos."
        />
        <ActionLink href={`${profile.github}?tab=repositories`}>
          Meu GitHub
        </ActionLink>
      </div>
      {items.map((repository) => (
        <RepositoryRow key={repository.name} repository={repository} />
      ))}
    </section>
  );
}
