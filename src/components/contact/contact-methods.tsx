import { profile } from "@/content/profile";
import { ActionLink } from "@/components/ui/primitives";

export function ContactMethods() {
  return (
    <div className="contact-methods">
      <ActionLink href={profile.github}>GitHub</ActionLink>
      <ActionLink href={profile.linkedin}>LinkedIn</ActionLink>
    </div>
  );
}
