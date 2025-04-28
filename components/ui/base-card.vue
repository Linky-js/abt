<script setup lang="ts">
const props = withDefaults(defineProps<{
  title?: string
  text?: string
  hoverEffect?: boolean
  bgColor?: string
  borderColor?: string
  isShowAvatar?: boolean
}>(),{
  title: '',
  text: '',
  hoverEffect: false,
  bgColor: '',
  borderColor: '',
  isShowAvatar: true,
})

const styleBaseCard = computed(() => {
  return {
    background: props.bgColor ? props.bgColor : '',
    border: props.borderColor ? `1px solid ${props.borderColor}` : '',
  }
})
</script>

<template>
  <div
    class="base-card__wrapper"
    :style="styleBaseCard"
    :class="[hoverEffect ? 'hover-effect' : '']"
  >
    <a-card class="base-card__item">
      <template #title>
        <slot name="title-card"/>
      </template>
      <slot name="avatar">
        <a-avatar
          v-if="isShowAvatar"
          class="base-card__avatar"
          shape="square"
        >
          {{ title }}
        </a-avatar>
      </slot>
      <slot name="text-content">
        <p class="base-card__text">{{ text }}</p>
      </slot>
    </a-card>
  </div>
</template>

<style>
@import "@/assets/css/components/ui/base-card.css";
</style>