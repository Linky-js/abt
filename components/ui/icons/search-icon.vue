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
    viewBox="0 0 71.7813 63.1711"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
    <line
      id="Line 33"
      x1="39.297363"
      y1="37.745300"
      x2="70.568909"
      y2="61.580505"
      :stroke="color"
      stroke-opacity="1.000000"
      stroke-width="4.000000"/>
    <ellipse
      id="Ellipse 266"
      cx="23.683594"
      cy="24.167969"
      rx="21.183594"
      ry="21.667969"
      :stroke="color"
      stroke-opacity="1.000000"
      stroke-width="5.000000"/>
  </svg>
</template>

<style scoped>

</style>