<script setup lang="ts">
defineProps<{
  size: { w: string, h: string }
  rotate?: number
}>()
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
    :style="`transform: rotate(${rotate}deg); enable-background: new 0 0 512 512`" :width="size.w" :height="size.h"
    x="0" y="0" viewBox="0 0 32 32" xml:space="preserve" class="hovered-paths">
    <g>
      <path
        d="M9.228 28.247A13.945 13.945 0 0 0 16.007 30C23.737 30 30 23.723 30 15.993 30 8.263 23.737 2 16.007 2S2 8.263 2 15.993c0 2.486.652 4.796 1.78 6.82L2 30zm.774-18.435a1.378 1.378 0 0 1 1.236-.34l.449.095c.448.095.815.394.991.802l.883 1.956a1.335 1.335 0 0 1-.217 1.44l-.543.639a.679.679 0 0 0-.082.76c1.603 2.88 3.709 3.818 4.646 4.103a.633.633 0 0 0 .734-.271l.394-.612c.38-.584 1.128-.788 1.956-.38l1.63.815c.626.299.91 1.032.68 1.685-.829 2.404-2.948 2.105-2.948 2.105-4.7-.122-8.383-4.456-9.972-6.684-.734-1.046-1.182-2.31-1.046-3.6.136-1.277.733-2.079 1.209-2.513z"
        fill="currentColor" opacity="1" data-original="#000000" class="hovered-path"></path>
    </g>
  </svg>
</template>

<style scoped></style>