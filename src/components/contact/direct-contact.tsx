import { profile } from "@/content/profile";
import { ActionLink } from "@/components/ui/primitives";

export function DirectContact() {
  return (
    <div className="direct-contact">
      <div>
        <p className="eyebrow">Contato direto</p>
        <h3>
          Prefere conversar
          <br />
          pelo WhatsApp?
        </h3>
        <p>Você também pode me ligar.</p>
      </div>
      <div>
        <a className="phone" href={profile.telephone}>
          {profile.phone}
        </a>
        <div className="actions">
          <ActionLink href={profile.whatsapp} variant="primary">
            Conversar no WhatsApp
          </ActionLink>
          <ActionLink href={profile.telephone}>Ligar para Igor</ActionLink>
        </div>
      </div>
    </div>
  );
}
