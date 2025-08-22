<script setup>
import postBox from '../components/postBox.vue'
import samplePost from '../components/samplePost.vue'
import rightSidebar from '../components/rightSidebar.vue'
import chatDrawer from '../components/chatDrawer.vue'
import trendingTopics from '../components/trendingTopics.vue'
import suggestedConnections from '../components/suggestedConnections.vue'
</script>

<template>
  <div class="flex flex-col lg:flex-row">
    <!-- Main Feed Content -->
    <div class="flex-1 space-y-8">
      <postBox />
      <samplePost />
      <trendingTopics />
      <suggestedConnections />
    </div>

    <!-- Right Sidebar (desktop only) -->
    <rightSidebar class="hidden lg:block" />
  </div>

  <!-- Mobile chat drawer (only on feed page) -->
  <chatDrawer />
</template>
