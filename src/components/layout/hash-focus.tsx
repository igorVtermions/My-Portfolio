"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { animate } from "motion";

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
    let stopScroll: (() => void) | undefined;
    let frame = 0;
    const cancelScroll = () => {
      cancelAnimationFrame(frame);
      stopScroll?.();
    };
    const onAnchorClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        event.altKey
      )
        return;
      const link =
        event.target instanceof Element
          ? event.target.closest<HTMLAnchorElement>("a[href]")
          : null;
      if (!link || link.target === "_blank" || link.hasAttribute("download"))
        return;
      const url = new URL(link.href, window.location.href);
      if (
        url.origin !== location.origin ||
        url.pathname !== location.pathname ||
        url.search !== location.search ||
        !url.hash ||
        url.hash === "#main"
      )
        return;
      let id: string;
      try {
        id = decodeURIComponent(url.hash.slice(1));
      } catch {
        return;
      }
      const target = document.getElementById(id);
      if (!target) return;
      event.preventDefault();
      cancelScroll();
      // Let the mobile menu close before measuring and starting the scroll.
      frame = requestAnimationFrame(() => {
        const margin =
          parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
        const top = Math.max(
          0,
          Math.min(
            window.scrollY + target.getBoundingClientRect().top - margin,
            document.documentElement.scrollHeight - innerHeight,
          ),
        );
        if (location.hash !== url.hash) history.pushState(null, "", url.hash);
        target.focus({ preventScroll: true });
        const animation = animate(window.scrollY, top, {
          duration: Math.min(
            1.2,
            Math.max(0.65, Math.abs(top - window.scrollY) / 2200),
          ),
          ease: [0.22, 1, 0.36, 1],
          onUpdate: (value) =>
            window.scrollTo({ top: value, behavior: "instant" }),
        });
        stopScroll = () => animation.stop();
      });
    };
    const focusHash = () => {
      if (window.location.hash) focusDestination(window.location.hash);
    };
    focusHash();
    window.addEventListener("hashchange", focusHash);
    document.addEventListener("click", onAnchorClick, true);
    window.addEventListener("wheel", cancelScroll, { passive: true });
    window.addEventListener("touchstart", cancelScroll, { passive: true });
    window.addEventListener("keydown", cancelScroll);
    return () => {
      cancelScroll();
      window.removeEventListener("hashchange", focusHash);
      document.removeEventListener("click", onAnchorClick, true);
      window.removeEventListener("wheel", cancelScroll);
      window.removeEventListener("touchstart", cancelScroll);
      window.removeEventListener("keydown", cancelScroll);
    };
  }, [pathname]);
  return null;
}
