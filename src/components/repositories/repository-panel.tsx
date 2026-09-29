import { repositoryDate, type Repository } from "@/content/repositories";
import { ActionLink, Tags } from "@/components/ui/primitives";
import { TechnologyIcon } from "@/components/ui/technology-icon";

export function RepositoryPanel({ repository }: { repository: Repository }) {
  return (
    <>
      <div className="repo-panel-top">
        <span className="eyebrow">
          {repository.platform ?? "Código público"}
        </span>
        <TechnologyIcon
          name={repository.technologies[0] ?? repository.language ?? "GitHub"}
        />
      </div>
      <h3>{repository.title}</h3>
      <p className="repo-path">igorVtermions / {repository.name}</p>
      {repository.description && (
        <p className="repo-description">{repository.description}</p>
      )}
      {repository.highlights.length > 0 && (
        <ul className="repo-highlights">
          {repository.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      {repository.technologies.length > 0 && (
        <ul
          className="experience-technologies"
          aria-label="Tecnologias do repositório"
        >
          {repository.technologies.map((name) => (
            <li key={name}>
              <TechnologyIcon name={name} />
              {name}
            </li>
          ))}
        </ul>
      )}
      {repository.topics.length > 0 && <Tags items={repository.topics} />}
      <div className="repo-metadata">
        {repository.language && (
          <div>
            <span>Linguagem principal</span>
            <strong>{repository.language}</strong>
          </div>
        )}
        {repository.pushedAt && (
          <div>
            <span>Último push</span>
            <time dateTime={repository.pushedAt}>
              {repositoryDate(repository.pushedAt)}
            </time>
          </div>
        )}
      </div>
      <div className="repo-actions">
        <ActionLink href={repository.href} variant="primary">
          Ver código
        </ActionLink>
        {repository.demoUrl && (
          <ActionLink href={repository.demoUrl}>Abrir demonstração</ActionLink>
        )}
      </div>
      <div className="repo-secondary">
        <ActionLink href={`${repository.href}#readme`}>Ler README</ActionLink>
        <ActionLink
          href={`${repository.href}/commits${repository.defaultBranch ? `/${encodeURIComponent(repository.defaultBranch)}` : ""}`}
        >
          Ver atividade
        </ActionLink>
      </div>
    </>
  );
}
