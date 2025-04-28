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
    viewBox="0 0 70 63.1711"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs/>
    <rect
      id="Rectangle 289"
      y="27.355469"
      width="20.000000"
      height="35.815674"
      :fill="color"
      fill-opacity="1.000000"/>
    <rect
      id="Rectangle 290"
      x="25.000000"
      y="16.636841"
      width="20.000000"
      height="46.534302"
      :fill="color"
      fill-opacity="1.000000"/>
    <rect
      id="Rectangle 291"
      x="50.000000"
      width="20.000000"
      height="63.171143"
      :fill="color"
      fill-opacity="1.000000"/>
  </svg>

</template>

<style scoped>

</style>