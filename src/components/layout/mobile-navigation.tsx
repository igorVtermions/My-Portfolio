"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { mobileNavigation, profile } from "@/content/profile";
import { Icon } from "@/components/ui/icon";
import { ActionLink } from "@/components/ui/primitives";
import { focusDestination } from "./hash-focus";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [navigating, setNavigating] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const destination = useRef<string | null>(null);

  useEffect(() => {
    const query = matchMedia("(min-width: 701px)");
    const closeOnDesktop = () => {
      if (query.matches) setOpen(false);
    };
    query.addEventListener("change", closeOnDesktop);
    return () => query.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(value) => {
        if (value) setNavigating(false);
        setOpen(value);
      }}
    >
      <Dialog.Trigger className="menu-toggle" aria-label="Abrir menu">
        Menu <Icon name="menu" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="menu-overlay" />
        <Dialog.Content
          className="menu-panel"
          inert={!open}
          data-navigating={navigating || undefined}
          aria-describedby={undefined}
          onOpenAutoFocus={(event) => {
            event.preventDefault();
            closeRef.current?.focus();
          }}
          onCloseAutoFocus={(event) => {
            if (destination.current) {
              event.preventDefault();
              focusDestination(destination.current);
              destination.current = null;
            }
          }}
        >
          <div className="menu-top">
            <Dialog.Title className="eyebrow">Explorar</Dialog.Title>
            <Dialog.Close
              className="menu-close"
              ref={closeRef}
              aria-label="Fechar menu"
            >
              Fechar <Icon name="close" />
            </Dialog.Close>
          </div>
          <nav className="panel-nav" aria-label="Navegação mobile">
            {mobileNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="panel-item"
                aria-current={pathname === item.href ? "page" : undefined}
                onClick={() => {
                  destination.current = item.href;
                  setNavigating(true);
                  setOpen(false);
                }}
              >
                {item.label}
                <Icon name="arrow-up-right" />
              </Link>
            ))}
          </nav>
          <div className="menu-contact">
            <span className="eyebrow">Vamos conversar</span>
            <ActionLink href={profile.whatsapp}>WhatsApp</ActionLink>
            <a href={profile.telephone}>{profile.phone}</a>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
