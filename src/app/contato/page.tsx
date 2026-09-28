import type { Metadata } from "next";
import { profile } from "@/content/profile";
import { ActionLink } from "@/components/ui/primitives";
import { DirectContact } from "@/components/contact/direct-contact";
import { CopyEmail } from "@/components/contact/copy-email";
import { ContactMethods } from "@/components/contact/contact-methods";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Converse com Igor Franco sobre projetos e oportunidades. Contato direto por e-mail, WhatsApp, telefone e LinkedIn.",
};
export default function ContactPage() {
  return (
    <section className="section contact-page">
      <div className="page-title">
        <p className="eyebrow">Vamos conversar</p>
        <h1>
          Me conta
          <br />
          <em>a sua ideia.</em>
        </h1>
        <p>
          Um projeto, uma oportunidade ou uma troca sobre desenvolvimento. Pode
          me chamar.
        </p>
      </div>
      <a className="email" href={`mailto:${profile.email}`}>
        {profile.email}
      </a>
      <div className="actions">
        <ActionLink
          href={`mailto:${profile.email}`}
          icon="mail"
          variant="primary"
        >
          Escrever um e-mail
        </ActionLink>
        <CopyEmail />
      </div>
      <DirectContact />
      <ContactMethods />
    </section>
  );
}
