import { timeline } from "@/content/timeline";
import { Reveal } from "@/components/motion/reveal";

export function ExperienceTimeline() {
  return (
    <section className="section" aria-label="Trajetória">
      <ol className="timeline">
        {timeline.map((item) => (
          <li key={item.title}>
            <Reveal className="timeline-item">
              <span className="eyebrow">{item.period}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
