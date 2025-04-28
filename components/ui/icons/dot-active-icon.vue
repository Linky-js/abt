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
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
    <circle
      id="Ellipse 251"
      cx="12.500000"
      cy="12.500000"
      r="7.500000"
      :fill="color"
      fill-opacity="1.000000"/>
    <circle
      id="Ellipse 252"
      cx="12.500000"
      cy="12.500000"
      r="12.000000"
      :stroke="color"
      stroke-opacity="1.000000"
      stroke-width="1.000000"/>
  </svg>

</template>

<style scoped>

</style>