import { profile } from "@/content/profile";
import { ActionLink } from "@/components/ui/primitives";
import { TechnologyMarquee } from "./technology-marquee";
import { Portrait } from "@/components/ui/portrait";

export function Hero() {
  return (
    <>
      <section className="identity" aria-labelledby="hero-title">
        <div className="identity-copy">
          <p className="eyebrow">
            <span className="small-cross" aria-hidden="true">
              +
            </span>{" "}
            Desenvolvedor de software
          </p>
          <h1 id="hero-title">
            IGOR
            <br />
            <span>
              FRANCO<b>.</b>
            </span>
          </h1>
          <div className="identity-note">
            <p>
              Meu foco é mobile.
              <br />
              Meu trabalho conecta <strong>o produto inteiro.</strong>
            </p>
          </div>
          <p className="identity-body">{profile.introduction}</p>
          <div className="actions">
            <ActionLink href="/projetos" variant="primary" icon="arrow-right">
              Explorar projetos
            </ActionLink>
            <ActionLink href="/sobre">Quem está por trás</ActionLink>
          </div>
        </div>
        <Portrait priority />
      </section>
      <TechnologyMarquee />
    </>
  );
}
