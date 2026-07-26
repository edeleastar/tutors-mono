<script lang="ts">
  import "../app.css";
  import { browser } from "$app/environment";
  import type { Snippet } from "svelte";

  type Props = { children: Snippet };
  let { children }: Props = $props();
</script>

<svelte:head>
  <title>Tutors Live</title>
</svelte:head>

<div class="min-h-screen bg-surface-50 dark:bg-surface-950">
  <header class="bg-surface-100 dark:bg-surface-900 border-b border-surface-200 dark:border-surface-800 p-4">
    <div class="container mx-auto flex items-center justify-between">
      <div>
        <a href="/" class="text-2xl font-bold hover:text-primary-500">Tutors Live</a>
        <p class="text-sm text-surface-600 dark:text-surface-400">Real-time student activity tracking</p>
      </div>
      <nav class="flex gap-4">
        <a href="/" class="hover:text-primary-500">Live</a>
        <a href="/catalogue" class="hover:text-primary-500">Catalogue</a>
      </nav>
    </div>
  </header>

  <main class="container mx-auto p-4">
    {@render children()}
  </main>
</div>
