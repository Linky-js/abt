<script setup lang="ts">

defineProps<{
  navigateLinks: {path: string, text: string}[]
}>()

const model = defineModel<boolean>()

const changeRouteCloseDrawer = () => {
  model.value = false
}
</script>

<template>
  <a-drawer
    v-model:open="model"
    width="310"
  >
    <div class="header-drawer__links">
      <NuxtLink
        v-for="link of navigateLinks"
        :key="link.path"
        :to="link.path"
        @click="changeRouteCloseDrawer"
      >
        {{ link.text }}
      </NuxtLink>
    </div>
    <div>
      <div class="header-drawer__contacts the-header__contacts">
        <p>info@abtsys.ru</p>
        <p>почта для связи</p>
      </div>
      <div class="header-drawer__chats-wrapper">
        <span>
          <ui-base-icon name="whatsapp-icon"/>
        </span>
        <span>
          <ui-base-icon name="telegram-icon"/>
        </span>
      </div>
    </div>
  </a-drawer>
</template>

<style scoped>
  .header-drawer__links {
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;
  }

  .header-drawer__links a {
    color: var(--primary-grey);
    font-weight: 500;
    font-size: 15px;
    margin-bottom: 8px;
  }

  .header-drawer__chats-wrapper {
    margin-top: 15px;
    display: flex;
    gap: 0 10px;
  }
</style>