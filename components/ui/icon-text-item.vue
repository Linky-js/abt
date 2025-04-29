<script setup lang="ts">
withDefaults(defineProps<{
  nameIcon?: string
  textItem?: string
  sizeIcon?: { w: string, h: string }
  indentText: number
}>(), {
  textItem: '',
  nameIcon: 'mark-icon',
  sizeIcon: () => {
    return { w: '10px', h: '10px' }
  },
})

const { width } = useWindowSize()

const innerWidth = ref(width)

const isSmallInnerSize = computed(() => {
  return innerWidth.value <= 512
})

const sizeAvatar = computed(() => {
  return isSmallInnerSize.value ? 30 : 36
})

</script>

<template>
  <div class="icon-text-item__wrapper">
    <a-badge class="icon-text-item__badge">
      <a-avatar class="icon-text-item__avatar" shape="square" :size="sizeAvatar">
        <ui-base-icon :name="nameIcon" :size="sizeIcon"/>
      </a-avatar>
      <p class="icon-text-item__paragraph" :style="`margin-left: ${isSmallInnerSize ? 12 : indentText}px;`"
        v-html="textItem" />
    </a-badge>
  </div>
</template>

<style lang="sass" scoped>
.icon-text-item__avatar
  display: flex
  align-items: center
  background: var(--white-100)
  flex-shrink: 0
  width: inherit
  color: var(--primary-grey)
  transition: .3s all

.icon-text-item__badge
  display: flex
  align-items: center
  &:hover
    .icon-text-item__avatar
      background: var(--primary-purple)
      color: var(--white)


.icon-text-item__paragraph
  font-size: 16px
  font-weight: 400
  line-height: 130%
  letter-spacing: -3%
  text-align: left

@media (max-width: 512px)
  .icon-text-item__paragraph
    font-size: 12px

</style>