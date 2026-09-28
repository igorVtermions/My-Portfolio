"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/content/profile";

export function DesktopNavigation() {
  const pathname = usePathname();
  return (
    <nav className="desktop-nav" aria-label="Navegação principal">
      {navigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          aria-current={pathname === item.href ? "page" : undefined}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
