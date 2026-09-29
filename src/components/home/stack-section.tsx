import { stackApplications, stackAreas } from "@/content/stack-applied";
import { Section, SectionHeading } from "@/components/ui/primitives";
import { StackExplorer } from "@/components/stack/stack-explorer";

export function StackSection() {
  return (
    <Section id="stack" className="stack-section">
      <SectionHeading
        id="stack-title"
        eyebrow="Minha stack"
        title="Tecnologias que viram produto."
      />
      <StackExplorer areas={stackAreas} applications={stackApplications} />
    </Section>
  );
}
