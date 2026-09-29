import type { Metadata } from "next";
import { ExperienceSection } from "@/components/experience/experience-section";
import { RepositoryIndex } from "@/components/home/repository-index";

export const metadata: Metadata = {
  title: "Trabalhos e produtos",
  description:
    "Projetos autorais e profissionais de Igor Franco: Escoply, Mágicos da Limpeza e experiência na Thux/Mathux.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="page-title">
        <p className="eyebrow">Trabalhos e produtos</p>
        <h1>
          Experiências que levo.
          <br />
          <em>Produtos que construo.</em>
        </h1>
        <p>O que construo, como participo e onde cada trabalho está hoje.</p>
      </section>
      <ExperienceSection />
      <RepositoryIndex />
    </>
  );
}
