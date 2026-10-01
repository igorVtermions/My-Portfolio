import type { Metadata } from "next";
import { profile } from "@/content/profile";
import { Portrait } from "@/components/ui/portrait";
import { ExperienceTimeline } from "@/components/about/experience-timeline";
import { StackSection } from "@/components/home/stack-section";
import { ContactSection } from "@/components/contact/contact-section";

export const metadata: Metadata = {
  title: "Minha história",
  description:
    "Conheça a trajetória de Igor Franco: formação em ADS, freelance desde 2023, desenvolvimento Full Stack em web e mobile e construção do Escoply.",
};
export default function AboutPage() {
  return (
    <>
      <section className="section about-lead" aria-labelledby="about-title">
        <div className="about-introduction">
          <div className="page-title">
            <p className="eyebrow">Quem está por trás</p>
            <h1 id="about-title">
              Prazer,
              <br />
              <em>Igor Franco.</em>
            </h1>
          </div>
          <p>{profile.introduction}</p>
        </div>
        <Portrait priority />
      </section>
      <section className="section story">
        <h2>
          Do freelance aos produtos Full Stack.
          <br />
          <em>E ao meu próprio produto.</em>
        </h2>
        <div>
          {profile.biography.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>
      <ExperienceTimeline />
      <section className="section complementary">
        <p className="eyebrow">Formação complementar</p>
        <h2>Aprender faz parte da construção.</h2>
        <p>
          StarSe Executive Education, Vai Na Web e Alura complementam minha
          formação e meus estudos em desenvolvimento.
        </p>
      </section>
      <StackSection />
      <ContactSection />
    </>
  );
}
