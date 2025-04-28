<script setup lang="ts">
withDefaults(defineProps<{
  nameIcon?: string
  textItem?: string
  sizeIcon?: {w: string, h: string}
  indentText: number
}>(), {
  textItem: '',
  nameIcon: 'mark-icon',
  sizeIcon: () => {
    return {w: '10px', h: '10px'}
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
      <a-avatar
        class="icon-text-item__avatar"
        shape="square"
        :size="sizeAvatar">
        <ui-base-icon
          :name="nameIcon"
          :size="sizeIcon"
          color="var(--primary-grey)"
        />
      </a-avatar>
      <p
        class="icon-text-item__paragraph"
        :style="`margin-left: ${isSmallInnerSize ? 12 : indentText}px;`"
        v-html="textItem"
      />
    </a-badge>
  </div>
</template>

<style>
.icon-text-item__avatar {
  display: flex;
  align-items: center;
  background: var(--white-100);
  flex-shrink: 0;
  width: inherit;
}
.icon-text-item__badge {
  display: flex;
  align-items: start;
}
.icon-text-item__paragraph {
  font-size: 16px;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: -3%;
  text-align: left;
}

@media (max-width: 512px) {
  .icon-text-item__paragraph {
    font-size: 12px;
  }
}
</style>