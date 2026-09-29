import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { experiences, experiencePeriod } from "@/content/experiences";
import { ExperienceCase } from "@/components/experience/experience-case";

const experience = experiences.find((item) => item.slug === "thux-mathux");

export const metadata: Metadata = {
  title: "Experiência na Thux / Mathux",
  description: experience
    ? `Atuação de Igor Franco na Thux / Mathux: ${experiencePeriod(experience)}. ${experience.summary}`
    : "Experiência na Thux / Mathux.",
};
export default function ExperiencePage() {
  if (!experience) notFound();
  return <ExperienceCase experience={experience} />;
}
