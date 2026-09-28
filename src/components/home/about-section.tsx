import { profile } from "@/content/profile";
import { ActionLink, Section } from "@/components/ui/primitives";
import { Reveal } from "@/components/motion/reveal";

export function AboutSection() {
  return (
    <Section id="sobre" className="home-about">
      <Reveal>
        <p className="eyebrow">Sobre mim</p>
        <h2 id="sobre-title">
          Sou Igor.
          <br />
          Gosto de entender
          <br />
          <em>o projeto por inteiro.</em>
        </h2>
        <span className="about-signature">Igor Franco / Full Stack</span>
      </Reveal>
      <Reveal className="about-story" delay={0.06}>
        {profile.biography.map((paragraph, index) => (
          <p className={index === 0 ? "lead" : undefined} key={paragraph}>
            {paragraph}
          </p>
        ))}
        <ActionLink href="/sobre" icon="arrow-right">
          Minha trajetória completa
        </ActionLink>
      </Reveal>
    </Section>
  );
}
