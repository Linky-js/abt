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
    viewBox="0 0 34.022 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
    <line
      id="Line 41"
      x1="0.000000"
      y1="0.500000"
      x2="34.014648"
      y2="0.500000"
      :stroke="color"
      stroke-opacity="1.000000"
      stroke-width="1.000000"/>
    <line
      id="Line 43"
      x1="0.007324"
      y1="18.500000"
      x2="34.021973"
      y2="18.500000"
      :stroke="color"
      stroke-opacity="1.000000"
      stroke-width="1.000000"/>
    <line
      id="Line 42"
      x1="11.007324"
      y1="9.00000"
      x2="34.021973"
      y2="9.00000"
      :stroke="color"
      stroke-opacity="1.000000"
      stroke-width="1.000000"/>
  </svg>
</template>

<style scoped>

</style>