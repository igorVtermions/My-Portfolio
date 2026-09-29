import { ScrollSurface } from "@/components/motion/scroll-surface";
import type { Project } from "@/content/projects";

export function ProjectArt({ project }: { project: Project }) {
  return (
    <div className="project-art art-escoply">
      <div className="art-top">
        <span>{project.name}</span>
        <span>PRODUTO AUTORAL / EM CONSTRUÇÃO</span>
      </div>
      <ScrollSurface className="paper-motion">
        <div className="paper">
          <div className="paper-head">
            <b>Seu trabalho, em ordem.</b>
            <span>Visão do projeto</span>
          </div>
          {[
            ["Definir o escopo", "Concluído"],
            ["Aprovar a proposta", "Em revisão"],
            ["Fazer acontecer", "Próxima etapa"],
          ].map(([label, state]) => (
            <div className="paper-row" key={label}>
              <span>{label}</span>
              <span>{state}</span>
            </div>
          ))}
        </div>
      </ScrollSurface>
      <div className="art-bottom">
        <span>Do primeiro escopo à próxima entrega.</span>
        <span>WEB + MOBILE</span>
      </div>
      <small>Composição conceitual · não representa a interface atual</small>
    </div>
  );
}
