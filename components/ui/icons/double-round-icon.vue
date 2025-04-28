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
    viewBox="0 0 74 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs/>
    <circle
      id="Ellipse 264"
      cx="30.000000"
      cy="30.000000"
      r="29.500000"
      :stroke="color"
      stroke-opacity="1.000000"
      stroke-width="1.000000"/>
    <circle
      id="Ellipse 265"
      cx="60.000000"
      cy="34.819336"
      r="14.000000"
      :fill="color"
      fill-opacity="1.000000"/>
  </svg>
</template>

<style scoped>

</style>