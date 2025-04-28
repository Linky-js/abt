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
    viewBox="0 0 19.6682 7.59766"
    fill="red"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
    <g opacity="1.000000">
      <path
        id="Arrow 1"
        d="M1.94 4.36L19.66 4.36L19.66 3.22L1.94 3.22L4.2 0.97C4.42 0.75 4.42 0.39 4.2 0.16C3.97 -0.06 3.62 -0.06 3.39 0.16L0.16 3.39C-0.06 3.62 -0.06 3.97 0.16 4.2L3.39 7.42C3.62 7.65 3.97 7.65 4.2 7.42C4.42 7.2 4.42 6.84 4.2 6.62L1.94 4.36Z"
        :fill="color"
        fill-opacity="1.000000"
        fill-rule="evenodd"
      />
    </g>
  </svg>
</template>

<style scoped>

</style>