import type { Metadata } from "next";
import { profile } from "@/content/profile";
import { ContactChannels } from "@/components/contact/contact-channels";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Converse com Igor Franco sobre projetos e oportunidades. Contato direto por e-mail, WhatsApp, telefone e LinkedIn.",
};
export default function ContactPage() {
  return (
    <section
      className="section contact-page contact-directory"
      aria-labelledby="contact-page-title"
    >
      <Reveal className="contact-directory-intro">
        <div>
          <p className="eyebrow">Contato / Igor Franco</p>
          <h1 id="contact-page-title">
            Pode me
            <br />
            <em>chamar.</em>
          </h1>
          <p>
            Para falar de um projeto, uma vaga ou trocar uma ideia sobre
            desenvolvimento.
          </p>
        </div>
        <div className="contact-signature">
          <span className="contact-monogram" aria-hidden="true">
            IF.
          </span>
          <div>
            <span className="contact-signature-name">
              {profile.name}
              <b aria-hidden="true"> /</b>
            </span>
            <p>{profile.role}</p>
            <span className="contact-signature-scope">
              Web · Mobile · Front-end · Back-end
            </span>
          </div>
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <ContactChannels />
      </Reveal>
    </section>
  );
}
