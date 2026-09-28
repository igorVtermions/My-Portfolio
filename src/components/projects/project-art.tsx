import type { Project } from "@/content/projects";
import { Icon } from "@/components/ui/icon";

export function ProjectArt({ project }: { project: Project }) {
  const isEscoply = project.slug === "escoply";
  const isMagicos = project.slug === "magicos-da-limpeza";
  return (
    <div className={`project-art art-${project.slug}`}>
      <div className="art-top">
        <span>{isEscoply ? "escoply" : project.name}</span>
        <span>
          {isEscoply ? "PRODUTO AUTORAL / EM CONSTRUÇÃO" : "WEB + MOBILE"}
        </span>
      </div>
      {isEscoply ? (
        <div className="paper">
          <div className="paper-head">
            <b>Seu trabalho, em ordem.</b>
            <span>Visão do projeto</span>
          </div>
          {[
            ["01 / Definir o escopo", "Concluído"],
            ["02 / Aprovar a proposta", "Em revisão"],
            ["03 / Fazer acontecer", "Próxima etapa"],
          ].map(([label, state]) => (
            <div className="paper-row" key={label}>
              <span>{label}</span>
              <span>{state}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="service-art">
          <span>
            {isMagicos ? (
              <>
                Uma operação.
                <br />
                Várias conexões.
              </>
            ) : (
              <>
                Da interface
                <br />à publicação.
              </>
            )}
          </span>
          <div>
            {isMagicos ? (
              <>
                Web <Icon name="arrow-right" /> Mobile{" "}
                <Icon name="arrow-right" /> Serviços
              </>
            ) : (
              "Desenvolver / Testar / Lançar"
            )}
          </div>
        </div>
      )}
      {isEscoply && (
        <div className="art-bottom">
          <span>Do primeiro escopo à próxima entrega.</span>
          <span>WEB + MOBILE</span>
        </div>
      )}
      <small>Composição conceitual · não representa a interface atual</small>
    </div>
  );
}
