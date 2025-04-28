<script setup lang="ts">
defineProps<{
  color?: string
  size: {w: string, h: string}
  rotate?: number
}>()
</script>

<template>
  <svg
    :style="`transform: rotate(${rotate}deg)`"
    :width="size.w"
    :height="size.h"
    viewBox="0 0 20 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
    <path
      id="Vector 11"
      d="M0.5 0L0.5 15L15.5 15"
      :stroke="color"
      stroke-opacity="1.000000"
      stroke-width="1.000000"/>
    <circle
      id="Ellipse 261"
      cx="16.000000"
      cy="15.000000"
      r="4.000000"
      :fill="color"
      fill-opacity="1.000000"/>
  </svg>
</template>

<style scoped>

</style>