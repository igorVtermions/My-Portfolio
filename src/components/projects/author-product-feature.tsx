import { escoply } from "@/content/projects";
import { ActionLink } from "@/components/ui/primitives";
import { Reveal } from "@/components/motion/reveal";
import { TechnologyIcon } from "@/components/ui/technology-icon";

export function AuthorProductFeature() {
  return (
    <Reveal className="author-product">
      <div className="author-product-copy">
        <p className="eyebrow">Produto autoral / Escoply</p>
        <h2>
          Um produto que
          <br />
          estou construindo.
        </h2>
        <p>{escoply.summary}</p>
        <p className="author-product-role">
          Desenvolvo o produto e sua arquitetura web e mobile.
        </p>
        <span className="author-product-status">
          Em construção e testes com usuários convidados
        </span>
        <ul
          className="experience-technologies"
          aria-label="Tecnologias do Escoply"
        >
          {["Next.js", "React Native", "TypeScript", "Supabase"].map((name) => (
            <li key={name}>
              <TechnologyIcon name={name} />
              <span>{name}</span>
            </li>
          ))}
        </ul>
        <ActionLink href={escoply.href} variant="primary" icon="arrow-right">
          Explorar o Escoply
        </ActionLink>
      </div>
      <div
        className="author-product-visual"
        aria-label="Composição conceitual do Escoply"
      >
        <span className="author-product-wordmark">
          escoply<span>.</span>
        </span>
        <p>
          Mais clareza para
          <br />
          <strong>o seu próximo projeto.</strong>
        </p>
        <div className="author-product-flow">
          <span>Cliente</span>
          <span aria-hidden="true">↘</span>
          <span>Escopo</span>
          <span aria-hidden="true">↘</span>
          <span>Entrega</span>
        </div>
        <small>Composição conceitual, não representa a interface atual.</small>
      </div>
    </Reveal>
  );
}
