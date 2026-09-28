import { Section } from "@/components/ui/primitives";
import { Reveal } from "@/components/motion/reveal";
import { ContactForm } from "./contact-form";
import { BuildAnimation } from "./build-animation";

export function ContactSection() {
  return (
    <Section id="contatos" className="home-contacts">
      <Reveal>
        <p className="eyebrow">Contatos</p>
        <div className="contact-composition">
          <div className="contact-introduction">
            <h2 id="contatos-title">
              Me conta o que
              <br />
              você quer construir.
            </h2>
            <p>
              Uma ideia, um próximo passo ou uma oportunidade. Quero conhecer o
              que você tem em mente.
            </p>
            <BuildAnimation />
          </div>
          <ContactForm />
        </div>
      </Reveal>
    </Section>
  );
}
