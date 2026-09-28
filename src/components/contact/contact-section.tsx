import { ActionLink, Section } from "@/components/ui/primitives";
import { Reveal } from "@/components/motion/reveal";
import { DirectContact } from "./direct-contact";

export function ContactSection() {
  return (
    <Section id="contatos" className="home-contacts">
      <Reveal>
        <p className="eyebrow">05 / Contatos</p>
        <div className="contact-strip">
          <h2 id="contatos-title">
            Me conta o que
            <br />
            você quer construir.
          </h2>
          <ActionLink href="/contato" variant="primary">
            Vamos conversar
          </ActionLink>
        </div>
        <DirectContact />
      </Reveal>
    </Section>
  );
}
