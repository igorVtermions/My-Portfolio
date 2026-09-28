import { profile } from "@/content/profile";
import { ActionLink } from "@/components/ui/primitives";

export function Footer() {
  return (
    <footer className="site-footer">
      <span>{profile.name} · Desenvolvedor Full Stack</span>
      <div>
        <ActionLink href={profile.github}>GitHub</ActionLink>
        <ActionLink href={profile.linkedin}>LinkedIn</ActionLink>
      </div>
    </footer>
  );
}
