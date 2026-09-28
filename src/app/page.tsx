import { Hero } from "@/components/home/hero";
import { AboutSection } from "@/components/home/about-section";
import { StackSection } from "@/components/home/stack-section";
import { SelectedProjects } from "@/components/home/selected-projects";
import { RepositoryIndex } from "@/components/home/repository-index";
import { ContactSection } from "@/components/contact/contact-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <StackSection />
      <SelectedProjects />
      <RepositoryIndex />
      <ContactSection />
    </>
  );
}
