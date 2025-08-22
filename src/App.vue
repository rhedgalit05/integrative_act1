<script setup>
import topNav from './components/topNav.vue'
import sideBar from './components/sideBar.vue'
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
      <router-view />
    </main>
  </div>
</template>

<style scoped></style>
