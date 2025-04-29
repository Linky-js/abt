<script setup lang="ts">
defineProps<{
  title: string
  text: string
  badge?: string
}>()
</script>

<template>
  <div class="achievements-item__wrapper">
    <div class="achievements-item__wrapper-title">
      <h2 class="achievements-item__title">
        {{ title }}
      </h2>
      <p v-if="badge" class="achievements-item__badge">
        {{ badge }}
      </p>
    </div>
    <p class="achievements-item__text">
      {{ text }}
    </p>
  </div>
</template>

<style lang="sass" scoped>
.achievements-item__title
  font-size: 128px
  font-weight: 500
  letter-spacing: 0%
  text-align: left
  color: var(--primary-grey)
  position: relative
  &::before
    content: '>'
    position: absolute
    font-size: 128px
    left: -90px
    top: 0px

.achievements-item__text
  color: var(--primary-grey)
  font-size: 24px
  font-weight: 400
  line-height: 30px
  letter-spacing: 0%
  text-align: left
  max-width: 170px
  width: 100%

.achievements-item__badge
  font-size: 24px
  font-weight: 400
  line-height: 30px
  letter-spacing: 0%
  text-align: left
  position: absolute
  top: 0px
  right: 50px

.achievements-item__wrapper-title
  position: relative

@media (max-width: 512px)
  .achievements-item__title
    font-size: 48px

  .achievements-item__text
    line-height: 21px
    font-size: 16px
    margin-top: 0
    margin-left: 0
    max-width: 110px

  .achievements-item__badge
    font-size: 16px
    top: -20px
    right: 20px

</style>