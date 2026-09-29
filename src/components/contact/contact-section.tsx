import { Section } from "@/components/ui/primitives";
import { Reveal } from "@/components/motion/reveal";
import { ContactExperience } from "./contact-experience";

export function ContactSection() {
  return (
    <Section id="contatos" className="home-contacts">
      <Reveal>
        <p className="eyebrow">Contatos</p>
        <div className="contact-heading">
          <h2 id="contatos-title">
            Sua próxima ideia começa com uma conversa.
          </h2>
          <a className="contact-skip" href="#contact-form">
            Ir para o formulário ↗
          </a>
        </div>
        <ContactExperience />
      </Reveal>
    </Section>
  );
}
