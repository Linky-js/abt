<script setup lang="ts">

</script>

<template>
  <ui-base-card
    class="directions-module__card"
    bg-color="transparent"
    border-color="#726F9F"
    :is-show-avatar="false"
  >
    <template #title-card>
      <h2 class="directions-module__card-title">Решения для государственного сектора</h2>
    </template>
    <template #text-content>
      <div class="directions-module__card-bottom">
        <p>
          Высокотехнологичные ИТ-продукты для совершенствования бизнес-процессов предприятий
        </p>
        <NuxtLink to="/solutions">
          <p>Каталог решений</p>
          <ui-base-icon
            style="margin-top: 4px;"
            :size="{w: '10px', h: '13px'}"
            name="chevron-icon"
            color="var(--primary-purple)"
          />
        </NuxtLink>
        <div class="directions-module__card-img">
          <img
            src="@/assets/image/direction-img.png"
            alt="img"
          >
        </div>
      </div>
    </template>
  </ui-base-card>
</template>

<style scoped>

</style>