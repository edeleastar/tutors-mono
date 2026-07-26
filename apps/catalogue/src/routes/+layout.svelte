<script lang="ts">
  import "../app.css";
  import TutorsShell from "@tutors/ui/TutorsShell.svelte";
  import { currentCourse } from "@tutors/services/runes";
  import { themeService } from "@tutors/services/themes";
  import { browser } from "$app/environment";
  import { onMount } from "svelte";
  import type { Snippet } from "svelte";

  type Props = { children: Snippet };
  let { children }: Props = $props();

  currentCourse.value = null;

  if (browser) {
    themeService.initDisplay();
  }

  onMount(() => {
    // Ensure theme is applied on mount
    themeService.initDisplay();
  });
</script>

<svelte:head>
  <title>Tutors Catalogue</title>
</svelte:head>

<TutorsShell>
  {@render children()}
</TutorsShell>
