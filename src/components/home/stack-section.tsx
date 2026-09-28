import { stack, type StackCategory } from "@/content/stack";
import { Section, SectionHeading, Tags } from "@/components/ui/primitives";
import { Reveal } from "@/components/motion/reveal";
import { motionTokens } from "@/lib/motion-tokens";

function StackGroup({ group, index }: { group: StackCategory; index: number }) {
  return (
    <Reveal className="stack-group" delay={(index % 2) * motionTokens.stagger}>
      <article>
        <div className="stack-title">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <h3>{group.title}</h3>
        </div>
        <p>{group.description}</p>
        <Tags items={group.items} />
        {group.note && <small>{group.note}</small>}
      </article>
    </Reveal>
  );
}

export function StackSection() {
  return (
    <Section id="stack" className="stack-section">
      <SectionHeading
        id="stack-title"
        eyebrow="03 / Minha stack"
        title={
          <>
            As ferramentas
            <br />
            por trás das entregas.
          </>
        }
        description={
          <>
            Do aplicativo à infraestrutura.
            <br />
            Minha base de trabalho e estudo.
          </>
        }
      />
      <div className="stack-grid">
        {stack.map((group, index) => (
          <StackGroup key={group.title} group={group} index={index} />
        ))}
      </div>
      <p className="note">
        Tecnologias e práticas do currículo, incluindo formação complementar. A
        lista não representa o mesmo nível de experiência em todos os itens.
      </p>
    </Section>
  );
}
