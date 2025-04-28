<script setup lang="ts">
const { width } = useWindowSize()

const innerWidth = ref(width)

const isShowDrawer = computed(() => {
  return innerWidth.value <= 1050
})
const isOpenDrawer = ref(false)

const linksHeader = [
  {path: '/solutions', text: 'Решения'},
  {path: '/projects', text: 'Проекты'},
  {path: '/about-us', text: 'О нас'},
  {path: '/news', text: 'Новости'},
]
</script>

<template>
  <div class="the-header__wrapper">
    <div class="container-big">
      <div class="the-header__content">
        <ui-app-logo/>
        <client-only>
          <div
            v-if="!isShowDrawer"
            class="the-header__links-wrapper">
            <NuxtLink
              v-for="link of linksHeader"
              :key="link.path"
              :to="link.path"
            >
              {{ link.text }}
            </NuxtLink>
          </div>
          <div
            v-if="!isShowDrawer"
            class="the-header__info-content">
            <div class="the-header__contacts">
              <a href="mailto:info@abtsys.ru">info@abtsys.ru</a>
              <p>почта для связи</p>
            </div>
            <div class="the-header__chats-wrapper">
              <a
                href="https://web.whatsapp.com/"
                target="_blank"
              >
                <ui-base-icon name="whatsapp-icon"/>
              </a>
              <a
                href="https://web.telegram.org/a/"
                target="_blank"
              >
                <ui-base-icon name="telegram-icon"/>
              </a>
            </div>
          </div>
          <div v-if="isShowDrawer">
            <ui-base-icon
              name="burger-icon"
              :size="{w: '34px', h: '18px'}"
              @click="isOpenDrawer = true"
            />
            <header-drawer
              v-model="isOpenDrawer"
              :navigate-links="linksHeader"
            />
          </div>
        </client-only>
      </div>
    </div>
  </div>
</template>

<style>
@import "@/assets/css/components/modules/the-header.css";
</style>