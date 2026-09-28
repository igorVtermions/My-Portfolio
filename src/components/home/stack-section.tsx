import { TechnologyIcon } from "@/components/ui/technology-icon";
import { stack, type StackCategory } from "@/content/stack";
import { Section, SectionHeading } from "@/components/ui/primitives";
import { StaggerGroup } from "@/components/motion/stagger-group";

function StackGroup({ group }: { group: StackCategory }) {
  return (
    <article className="stack-group">
      <div className="stack-title">
        <h3>{group.title}</h3>
      </div>
      <p>{group.description}</p>
      <ul className="technology-list">
        {group.items.map((item) => (
          <li key={item}>
            <TechnologyIcon name={item} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function StackSection() {
  return (
    <Section id="stack" className="stack-section">
      <SectionHeading
        id="stack-title"
        eyebrow="Minha stack"
        title={
          <>
            As ferramentas
            <br />
            por trás das entregas.
          </>
        }
      />
      <StaggerGroup className="stack-grid">
        {stack.map((group) => (
          <StackGroup key={group.title} group={group} />
        ))}
      </StaggerGroup>
    </Section>
  );
}
