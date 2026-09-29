import { Hero } from "@/components/home/hero";
import { AboutSection } from "@/components/home/about-section";
import { StackSection } from "@/components/home/stack-section";
import { ExperienceSection } from "@/components/experience/experience-section";
import { RepositoryIndex } from "@/components/home/repository-index";
import { ContactSection } from "@/components/contact/contact-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <StackSection />
      <ExperienceSection />
      <RepositoryIndex />
      <ContactSection />
    </>
  );
}
