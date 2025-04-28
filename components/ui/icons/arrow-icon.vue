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
    viewBox="0 0 74.1841 13.3219"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
    <path
      id="Arrow 7"
      d="M70.76 7.66L0 7.66L0 5.66L70.76 5.66L66.81 1.71C66.42 1.31 66.42 0.69 66.81 0.29C67.21 -0.1 67.83 -0.1 68.23 0.29L73.88 5.95C74.28 6.34 74.28 6.97 73.88 7.36L68.23 13.02C67.83 13.42 67.21 13.42 66.81 13.02C66.42 12.62 66.42 12 66.81 11.61L70.76 7.66Z"
      :fill="color"
      fill-opacity="1.000000"
      fill-rule="evenodd"/>
  </svg>
</template>

<style scoped>

</style>