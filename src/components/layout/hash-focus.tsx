"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function focusDestination(href: string) {
  const hash = href.split("#")[1];
  const target = hash
    ? document.getElementById(hash)
    : document.getElementById("main");
  target?.focus({ preventScroll: true });
}

export function HashFocus() {
  const pathname = usePathname();
  useEffect(() => {
    const focusHash = () => {
      if (window.location.hash) focusDestination(window.location.hash);
    };
    focusHash();
    window.addEventListener("hashchange", focusHash);
    return () => window.removeEventListener("hashchange", focusHash);
  }, [pathname]);
  return null;
}
