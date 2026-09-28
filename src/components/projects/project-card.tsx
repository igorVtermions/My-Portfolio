import Link from "next/link";
import type { Project } from "@/content/projects";
import { ActionLink, Tags } from "@/components/ui/primitives";
import { Icon } from "@/components/ui/icon";
import { ProjectArt } from "./project-art";

export function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  if (featured)
    return (
      <article className="feature-project">
        <div className="feature-copy">
          <span className="project-number" aria-hidden="true">
            01
          </span>
          <p className="eyebrow">Produto autoral</p>
          <h3>
            {project.name}
            <em>.</em>
          </h3>
          <p>{project.summary}</p>
          <Tags items={["Web + mobile", project.status]} />
          <ActionLink href={project.href} variant="primary" icon="arrow-right">
            Conhecer o projeto
          </ActionLink>
        </div>
        <ProjectArt project={project} />
      </article>
    );
  return (
    <article className="project-card">
      <ProjectArt project={project} />
      <div className="project-caption">
        <div>
          <h2>{project.name}</h2>
          <p>{project.summary}</p>
        </div>
        <Tags items={[project.category, project.status]} />
        <ActionLink href={project.href}>Conhecer {project.name}</ActionLink>
      </div>
    </article>
  );
}

export function ProjectRow({
  project,
  number,
}: {
  project: Project;
  number: string;
}) {
  return (
    <Link href={project.href} className="project-row">
      <span>{number}</span>
      <div>
        <strong>{project.name}</strong>
        <small>{project.role}</small>
      </div>
      <Icon name="arrow-up-right" />
    </Link>
  );
}
