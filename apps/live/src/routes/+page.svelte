<script lang="ts">
  import { liveService } from "@tutors/services/community";
  import Courses from "@tutors/ui/time/Courses.svelte";
  import CoursesGroup from "@tutors/ui/time/CoursesGroup.svelte";
  import Students from "@tutors/ui/time/Students.svelte";
  import { Tabs } from "@skeletonlabs/skeleton-svelte";

  liveService.startGlobalPresenceService();
</script>

<div class="bg-surface-100-800-token border-surface-200-700-token rounded-xl border-[1px] p-4">
  <h2 class="mb-4 text-xl font-semibold">Live Activity</h2>
  <Tabs defaultValue="Courses">
    <Tabs.List>
      <Tabs.Trigger value="Courses">Courses ({liveService.coursesOnline.value.length})</Tabs.Trigger>
      <Tabs.Trigger value="Students">Students ({liveService.studentsOnline.value.length})</Tabs.Trigger>
      <Tabs.Trigger value="Groups">Groups</Tabs.Trigger>
      <Tabs.Indicator />
    </Tabs.List>
    <Tabs.Content value="Courses"><Courses /></Tabs.Content>
    <Tabs.Content value="Students"><Students /></Tabs.Content>
    <Tabs.Content value="Groups"><CoursesGroup /></Tabs.Content>
  </Tabs>
</div>
