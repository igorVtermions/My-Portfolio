import { profile } from "@/content/profile";
import { ActionLink } from "@/components/ui/primitives";
import { Icon } from "@/components/ui/icon";
import { CopyEmail } from "./copy-email";
import { ChannelIcon } from "./channel-icon";

export function ContactChannels() {
  return (
    <>
      <div className="contact-channel-grid">
        <article
          className="contact-channel contact-channel-email"
          aria-labelledby="email-channel-title"
        >
          <div className="channel-heading">
            <ChannelIcon name="email" />
            <h2 id="email-channel-title">Por e-mail</h2>
            <span className="channel-tag">Com mais contexto</span>
          </div>
          <a className="channel-address" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <p>Me escreva com o contexto do projeto ou da oportunidade.</p>
          <div className="channel-actions">
            <ActionLink
              href={`mailto:${profile.email}`}
              icon="mail"
              variant="primary"
            >
              Escrever um e-mail
            </ActionLink>
            <CopyEmail label="Copiar endereço" />
          </div>
        </article>
        <article
          className="contact-channel contact-channel-whatsapp"
          aria-labelledby="whatsapp-channel-title"
        >
          <div className="channel-heading">
            <ChannelIcon name="whatsapp" />
            <h2 id="whatsapp-channel-title">Pelo WhatsApp</h2>
          </div>
          <a
            className="channel-address channel-phone"
            href={profile.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            {profile.phone}
          </a>
          <p>Prefere começar por uma mensagem?</p>
          <div className="channel-actions">
            <ActionLink href={profile.whatsapp}>
              Conversar no WhatsApp
            </ActionLink>
            <ActionLink href={profile.telephone}>Ligar</ActionLink>
          </div>
        </article>
      </div>
      <nav className="contact-social-links" aria-label="Perfis de Igor Franco">
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          <ChannelIcon name="linkedin" />
          <span>
            <strong>LinkedIn</strong>
            <small>Perfil profissional</small>
          </span>
          <Icon name="external-link" />
        </a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer">
          <ChannelIcon name="github" />
          <span>
            <strong>GitHub</strong>
            <small>Projetos e código público</small>
          </span>
          <Icon name="external-link" />
        </a>
      </nav>
    </>
  );
}
