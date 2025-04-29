<script setup lang="ts">
defineProps<{
  size: { w: string, h: string }
  rotate?: number
}>()
</script>

<template>
  <svg :style="`transform: rotate(${rotate}deg)`" :width="size.w" :height="size.h" viewBox="0 0 9.19397 12.6919"
    fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path id="Vector"
      d="M4.59 0C3.37 0 2.21 0.48 1.34 1.34C0.48 2.2 0 3.37 0 4.59C0 7.74 4.11 12.35 4.28 12.55C4.32 12.59 4.37 12.63 4.42 12.65C4.48 12.67 4.53 12.69 4.59 12.69C4.65 12.69 4.71 12.67 4.76 12.65C4.81 12.63 4.86 12.59 4.9 12.55C5.07 12.35 9.19 7.74 9.19 4.59C9.19 3.37 8.7 2.2 7.84 1.34C6.98 0.48 5.81 0 4.59 0ZM4.59 6.9C3.98 6.9 3.39 6.66 2.96 6.23C2.52 5.79 2.28 5.2 2.28 4.59C2.28 3.98 2.52 3.39 2.96 2.96C3.39 2.52 3.98 2.28 4.59 2.28C5.21 2.28 5.79 2.52 6.23 2.96C6.66 3.39 6.9 3.98 6.91 4.59C6.9 5.2 6.66 5.79 6.23 6.23C5.79 6.66 5.21 6.9 4.59 6.9Z"
      fill="currentColor" fill-opacity="1.000000" fill-rule="evenodd" />
  </svg>
</template>

<style scoped></style>