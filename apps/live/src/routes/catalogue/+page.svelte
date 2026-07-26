<script lang="ts">
  import { catalogueService } from "@tutors/services/community";
  import Catalogue from "@tutors/ui/time/Catalogue.svelte";
  import { onMount } from "svelte";
  import type { PageData } from "./$types";

  interface Props {
    data: PageData;
  }
  let { data }: Props = $props();
  let totalModules = $state(0);
  let totalStudents = $state(0);
  onMount(async () => {
    totalModules = await data.courseRecords.length;
    totalStudents = await catalogueService.getStudentCount();
  });
</script>

<div class="bg-surface-100-800-token border-surface-200-700-token rounded-xl border-[1px] p-4">
  <div class="mb-4 flex items-center justify-between">
    <h2 class="text-xl font-semibold">Course Catalogue</h2>
    <div class="bg-gray-100 p-2 text-xs dark:bg-gray-800 rounded">
      Totals: modules-{totalModules} : students-{totalStudents}
    </div>
  </div>
  <Catalogue courseRecords={data.courseRecords} />
</div>
