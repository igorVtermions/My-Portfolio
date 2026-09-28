"use client";

import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  const query = matchMedia("(max-width: 700px)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}
const getSnapshot = () => matchMedia("(max-width: 700px)").matches;
const getServerSnapshot = () => false;

export function useCompactViewport() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
