import { timeline } from "@/content/timeline";
import { TimelineEntry } from "./timeline-entry";

export function ExperienceTimeline() {
  return (
    <section className="section" aria-label="Trajetória">
      <ol className="timeline">
        {timeline.map((item) => (
          <li key={item.title}>
            <TimelineEntry>
              <span className="eyebrow">{item.period}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </TimelineEntry>
          </li>
        ))}
      </ol>
    </section>
  );
}
