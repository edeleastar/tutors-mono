<script lang="ts">
  import { currentCourse } from "@tutors/services/runes";
  import { catalogueService } from "@tutors/services/community";
  import CourseShell from "$lib/TutorsShell.svelte";
  import { onMount, type Snippet } from "svelte";
  type Props = { children: Snippet };
  let { children }: Props = $props();

  currentCourse.value = null;
  let totalModules = $state(0);
  let totalStudents = $state(0);
  onMount(async () => {
    totalModules = await catalogueService.getCatalogueCount();
    totalStudents = await catalogueService.getStudentCount();
  });
</script>

<svelte:head>
  <title>Tutors</title>
</svelte:head>

<CourseShell>
  <div class="bg-surface-100-800-token border-surface-200-700-token mx-2 mb-2 min-w-0 max-w-full overflow-hidden rounded-xl border-[1px] p-0 sm:mx-3">
    {@render children()}
  </div>
</CourseShell>
