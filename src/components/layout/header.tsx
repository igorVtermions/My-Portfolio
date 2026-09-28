import Link from "next/link";
import { navigation } from "@/content/profile";
import { MobileNavigation } from "./mobile-navigation";

export function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Igor Franco, início">
        igor franco<span> /</span>
      </Link>
      <nav className="desktop-nav" aria-label="Navegação principal">
        {navigation.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <MobileNavigation />
    </header>
  );
}
