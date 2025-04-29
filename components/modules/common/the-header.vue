<script setup lang="ts">
const { width } = useWindowSize()

const innerWidth = ref(width)

const isShowDrawer = computed(() => {
  return innerWidth.value <= 1050
})
const isOpenDrawer = ref(false)

const linksHeader = [
  { path: '/solutions', text: 'Решения' },
  { path: '/projects', text: 'Проекты' },
  { path: '/about-us', text: 'О нас' },
  { path: '/news', text: 'Новости' },
]
</script>

<template>
  <div class="header">
    <div class="header__content">
      <ui-app-logo />
      <client-only>
        <div v-if="!isShowDrawer" class="header__links">
          <NuxtLink v-for="link of linksHeader" :key="link.path" :to="link.path">
            {{ link.text }}
          </NuxtLink>
        </div>
        <div v-if="!isShowDrawer" class="header__info">
          <div class="header__contacts">
            <a href="mailto:info@abtsys.ru">info@abtsys.ru</a>
            <p>почта для связи</p>
          </div>
          <div class="header__chats">
            <a href="https://web.whatsapp.com/" target="_blank">
              <ui-base-icon name="whatsapp-icon" />
            </a>
            <a href="https://web.telegram.org/a/" target="_blank">
              <ui-base-icon name="telegram-icon" />
            </a>
          </div>
        </div>
        <div v-if="isShowDrawer">
          <ui-base-icon name="burger-icon" :size="{ w: '34px', h: '18px' }" @click="isOpenDrawer = true" />
          <header-drawer v-model="isOpenDrawer" :navigate-links="linksHeader" />
        </div>
      </client-only>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.header 
  margin-top: 20px
  width: 100%
  padding: 18px 50px
  background: #FAFAFA
  border-radius: 55px
.header__content
  display: flex
  align-items: center
  justify-content: space-between
  gap: 0 30px

.header__info
  display: flex
  align-items: center
  gap: 0 44px

.header__chats
  display: flex
  display: flex
  gap: 0 12px
  a
    border: 1px solid var(--primary-grey-49)
    border-radius: 50%
    padding: 12px
    transition: .3s all
    color: #000
    &:hover
      background: var(--primary-purple)
      color: #fff
      svg g path
        fill: #fff

.header__links
  display: flex
  max-width: 489px
  width: 100%
  justify-content: space-between
  a
    color: var(--primary-grey)
    font-size: 18px
    font-weight: 500
    line-height: 21px
    letter-spacing: 0
    position: relative
    transition: .3s all
    &::after
      position: absolute
      content: ''
      width: 0
      height: 1px
      background: var(--primary-grey)
      left: 0
      bottom: -5px
      transition: .3s all
    &:hover
      color: var(--primary-purple)
      &::after
        width: 100%
        background: var(--primary-purple)
    &:last-child
      margin-right: 0

.header__contacts
  display: flex
  flex-direction: column
  gap: 3px
  a
    color: var(--primary-grey)
    font-size: 16px
    font-weight: 400
    line-height: 15px
    letter-spacing: 0
    text-align: left
    position: relative
    transition: .3s all
    &::after
      position: absolute
      content: ''
      width: 0
      height: 1px
      background: var(--primary-grey)
      left: 0
      bottom: -3px
      transition: .3s all
    &:hover
      color: var(--primary-purple)
      &::after
        width: 100%
        background: var(--primary-purple)
  p
    font-size: 10px
    line-height: 110%
    font-weight: 400
    letter-spacing: 0
    text-align: left
    color: var(--grey-200)

</style>