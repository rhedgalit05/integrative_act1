<script setup>
import events from '../components/events.vue'
import eventHighlights from '../components/eventHighlights.vue'
</script>

<template>
  <div class="flex flex-col lg:flex-row">
    <!-- Main Feed Content -->
    <div class="flex-1 space-y-8">
      <events />
      <eventHighlights />
    </div>
  </div>
</template>
