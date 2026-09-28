import Link from "next/link";
import { DesktopNavigation } from "./desktop-navigation";
import { MobileNavigation } from "./mobile-navigation";

export function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Igor Franco, início">
        igor franco<span> /</span>
      </Link>
      <DesktopNavigation />
      <MobileNavigation />
    </header>
  );
}
