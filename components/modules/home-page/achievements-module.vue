<script setup lang="ts">
const achievementsItemContent = [
  {title: '> 100', text: 'Завершенных проектов', badge: ''},
  {title: '> 20', text: 'Членов команды', badge: ''},
  {title: '> 4', text: 'На рынке разработки', badge: 'лет'}
]
</script>

<template>
  <div class="achievements-module__wrapper">
    <div class="achievements-container">
      <div class="achievements-module__content">
        <ui-achievement-item
          v-for="(item, index) of achievementsItemContent"
          :key="index"
          :title="item.title"
          :text="item.text"
          :badge="item.badge"
        />
      </div>
    </div>
  </div>
</template>

<style>
@import "@/assets/css/components/modules/achievement-module.css";
</style>