<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div class="app-logo__wrapper" @click="router.push('/')">
    <div class="app-logo__left-text-block">
      <p>ABT</p>
      <p>системы</p>
    </div>
    <img src="@/assets/icons/abt-logo-icon.svg" alt="logo">
    <div class="app-logo__right-text-block">
      <p>
        Команда разработчиков
        для вашего бизнеса
      </p>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.app-logo__wrapper
  display: flex
  align-items: center
  cursor: pointer

.app-logo__left-text-block
  margin-right: 14px
  p
    &:first-child
      font-family: 'Montserrat', sans-serif
      font-size: 20px
      line-height: 17px
      font-weight: 900
      color: var(--primary-grey)

    &:last-child
      font-family: 'Montserrat', sans-serif
      font-size: 9px
      line-height: 8px
      font-weight: 400
      color: var(--primary-grey)

.app-logo__right-text-block p
  max-width: 166px
  width: 100%
  font-weight: 400
  color: var(--secondary-grey)
  font-family: "Montserrat", sans-serif
  font-size: 13px
  line-height: 17px
  letter-spacing: 0
  text-align: left
  position: relative
  margin-left: 28px

  &::after
    position: absolute
    content: ""
    width: 1px
    height: 33px
    background: var(--secondary-grey)
    top: 0
    left: -14px

@media (max-width: 1150px)
  .app-logo__right-text-block p
    font-size: 10px
    line-height: 14px
    margin-left: 18px
    max-width: 128px

    &::after
      height: 28px
      left: -9px

  .app-logo__left-text-block
    margin-right: 9px

</style>