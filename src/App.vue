<script setup>
import topNav from './components/topNav.vue'
import sideBar from './components/sideBar.vue'
import postBox from './components/postBox.vue'
import samplePost from './components/samplePost.vue'
import assignment from './components/assignment.vue'
import events from './components/events.vue'
import rightSidebar from './components/rightSidebar.vue'
import chatDrawer from './components/chatDrawer.vue'
</script>

<template>
  <!-- Top Navigation Bar -->
  <topNav> </topNav>

  <!-- Layout wrapper -->
  <div class="pt-16 max-w-7xl mx-auto flex flex-col lg:flex-row">
    <!-- Left Sidebar -->
    <sideBar> </sideBar>

    <!-- Main Content Area -->
    <main class="flex-1 px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      <!-- Create Post Box -->
      <postBox> </postBox>

      <!-- Sample Post (reused) -->
      <samplePost> </samplePost>

      <!-- Assignments -->
      <assignment> </assignment>

      <!-- Events -->
      <events> </events>
    </main>

    <!-- Right Sidebar -->
    <rightSidebar> </rightSidebar>
  </div>
  <!-- Mobile chat drawer -->
  <chatDrawer> </chatDrawer>
</template>

<style scoped></style>
