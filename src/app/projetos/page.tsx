import type { Metadata } from "next";
import { ProjectFilter } from "@/components/projects/project-filter";
import { RepositoryIndex } from "@/components/home/repository-index";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Projetos autorais e profissionais de Igor Franco: Escoply, Mágicos da Limpeza e experiência na Thux/Mathux.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="page-title">
        <p className="eyebrow">Seleção de trabalhos</p>
        <h1>
          Projetos com
          <br />
          <em>nome e contexto.</em>
        </h1>
        <p>O que construo, como participo e onde cada trabalho está hoje.</p>
      </section>
      <ProjectFilter />
      <RepositoryIndex />
    </>
  );
}
