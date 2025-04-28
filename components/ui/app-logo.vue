<script setup lang="ts">
  const router = useRouter()
</script>

<template>
  <div
    class="app-logo__wrapper"
    @click="router.push('/')"
  >
    <div class="app-logo__left-text-block">
      <p>ABT</p>
      <p>системы</p>
    </div>
    <img
      src="@/assets/icons/abt-logo-icon.svg"
      alt="logo"
    >
    <div class="app-logo__right-text-block">
      <p>
        Команда разработчиков
        для вашего бизнеса
      </p>
    </div>
  </div>
</template>

<style>
@import "assets/css/components/ui/app-logo.css";
</style>