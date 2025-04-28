<script setup lang="ts">
const props = withDefaults(  defineProps<{
  name: string
  color?: string
  size?: {w: string, h: string}
  rotate?: number
}>(), {
  color: '#000',
  size: () => {
    return {w: '30px', h: '30px'};
  },
  rotate: 0
})

  const dymamicComponent = computed(() => {
    return defineAsyncComponent(() => import(`./icons/${props.name}.vue`))
  })
</script>

<template>
  <div class="base-icon__wrapper">
    <component
      :is="dymamicComponent"
      :size="size"
      :rotate="rotate"
      :color="color"
    />
  </div>
</template>

<style scoped>
.base-icon__wrapper {
  display: flex;
}
</style>