<script setup lang="ts">
defineProps<{
  size: { w: string, h: string }
  rotate?: number
}>()
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
  :style="`transform: rotate(${rotate}deg); enable-background: new 0 0 512 512`" :width="size.w" :height="size.h" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve" class="">
    <g>
      <path
        d="M12 24c6.629 0 12-5.371 12-12S18.629 0 12 0 0 5.371 0 12s5.371 12 12 12zM5.491 11.74l11.57-4.461c.537-.194 1.006.131.832.943l.001-.001-1.97 9.281c-.146.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953z"
        fill="currentColor" opacity="1" data-original="#000000" class=""></path>
    </g>
  </svg>
</template>

<style scoped></style>