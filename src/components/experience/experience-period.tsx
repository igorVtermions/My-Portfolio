import { formatExperienceDate, type Experience } from "@/content/experiences";

export function ExperiencePeriod({ experience }: { experience: Experience }) {
  return (
    <span className="experience-period">
      <time dateTime={experience.startDate}>
        {formatExperienceDate(experience.startDate)}
      </time>
      <span>até</span>
      {experience.endDate ? (
        <time dateTime={experience.endDate}>
          {formatExperienceDate(experience.endDate)}
        </time>
      ) : (
        <span>o presente</span>
      )}
    </span>
  );
}
