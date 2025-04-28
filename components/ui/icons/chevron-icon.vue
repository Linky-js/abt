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
    viewBox="0 0 6 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
    <g clip-path="url(#clip2_23)">
      <g clip-path="url(#clip2_24)">
        <path
          id="Vector"
          d="M1.08 3.5L5.76 8L1.08 12.5L-0.24 11.22L3.1 8L-0.24 4.77L1.08 3.5Z"
          :fill="color"
          fill-opacity="1.000000"
          fill-rule="nonzero"/>
      </g>
    </g>
  </svg>
</template>

<style scoped>

</style>