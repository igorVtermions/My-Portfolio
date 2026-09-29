import { getRecentRepositories } from "@/lib/github-repositories";
import { type Repository } from "@/content/repositories";
import { profile } from "@/content/profile";
import {
  ActionLink,
  SectionHeading,
  Section,
} from "@/components/ui/primitives";
import { RepositoryExplorer } from "@/components/repositories/repository-explorer";

export async function RepositoryIndex({ items }: { items?: Repository[] }) {
  const result = items ? { items, live: false } : await getRecentRepositories();
  return (
    <Section id="repositories" className="repository-index">
      <div className="heading-with-action">
        <SectionHeading
          id="repositories-title"
          eyebrow="Código público / @igorVtermions"
          title={
            items
              ? "Explore o código do produto."
              : "Por dentro do que desenvolvo."
          }
          description={
            items
              ? undefined
              : "Explore os projetos, as tecnologias e o código por trás de cada ideia."
          }
        />
        <ActionLink href={`${profile.github}?tab=repositories`}>
          Meu GitHub
        </ActionLink>
      </div>
      {items ? (
        <div className="repo-compact">
          {items.map((item) => (
            <article key={item.name}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ActionLink href={item.href}>Ver {item.title}</ActionLink>
            </article>
          ))}
        </div>
      ) : (
        <RepositoryExplorer items={result.items} />
      )}
    </Section>
  );
}
