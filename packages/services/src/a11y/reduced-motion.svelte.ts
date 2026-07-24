import { browser } from "$app/environment";
import { rune } from "../runes.svelte.ts";

function getReducedMotion(): boolean {
  if (!browser) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export const prefersReducedMotion = rune(getReducedMotion());

if (browser) {
  const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
  mql.addEventListener("change", (e) => {
    prefersReducedMotion.value = e.matches;
  });
}
