"use client";

import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  const query = matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

// O servidor e a primeira renderização do cliente compartilham o mesmo estado.
export function useMotionPreference() {
  return useSyncExternalStore(
    subscribe,
    () => matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => true,
  );
}
