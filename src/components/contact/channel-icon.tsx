import { siGithub, siWhatsapp } from "simple-icons";
import { Icon } from "@/components/ui/icon";

export function ChannelIcon({
  name,
}: {
  name: "email" | "whatsapp" | "linkedin" | "github";
}) {
  const brand =
    name === "github" ? siGithub : name === "whatsapp" ? siWhatsapp : null;
  return (
    <span className="channel-icon" aria-hidden="true">
      {name === "email" ? (
        <Icon name="mail" />
      ) : brand ? (
        <svg viewBox="0 0 24 24" fill="currentColor" focusable="false">
          <path d={brand.path} />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="currentColor" focusable="false">
          <path d="M5 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM3.5 9h3v12h-3V9ZM10 9h3v1.6c.8-1.2 1.9-1.9 3.6-1.9 3.1 0 4.4 1.9 4.4 5V21h-3v-6.6c0-1.8-.5-2.8-2-2.8-1.9 0-3 1.3-3 3.3V21h-3V9Z" />
        </svg>
      )}
    </span>
  );
}
