import { animationDelay } from "@tutors/services/runes";
import { prefersReducedMotion } from "@tutors/services/a11y";
import { cubicOut } from "svelte/easing";

function duration() {
  return prefersReducedMotion.value ? 0 : animationDelay.value;
}

export const scaleTransition = {
  get duration() { return duration(); },
  get start() { return prefersReducedMotion.value ? 1 : 0.4; },
  easing: cubicOut
};

export const slideFromRight = {
  get in() { return { x: prefersReducedMotion.value ? 0 : 200, duration: duration(), delay: duration() }; },
  get out() { return { x: prefersReducedMotion.value ? 0 : 200, duration: duration() }; }
};
