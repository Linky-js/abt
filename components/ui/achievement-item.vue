<script setup lang="ts">
  defineProps<{
    title: string
    text: string
    badge?: string
  }>()
</script>

<template>
  <div
    class="achievements-item__wrapper"
  >
    <div class="achievements-item__wrapper-title">
      <h2 class="achievements-item__title">
        {{ title }}
      </h2>
      <p
        v-if="badge"
        class="achievements-item__badge">
        {{ badge }}
      </p>
    </div>
    <p class="achievements-item__text">
      {{ text }}
    </p>
  </div>
</template>

<style scoped>
@import "@/assets/css/components/ui/achievement-item.css";
</style>