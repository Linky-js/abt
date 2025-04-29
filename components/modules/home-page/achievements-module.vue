<script setup lang="ts">
const achievementsItemContent = [
  { title: '100', text: 'Завершенных проектов', badge: '' },
  { title: '20', text: 'Членов команды', badge: '' },
  { title: '4', text: 'На рынке разработки', badge: 'лет' }
]
</script>

<template>
  <div class="achievements">
    <div class="achievements__content">
      <ui-achievement-item v-for="(item, index) of achievementsItemContent" :key="index" :title="item.title"
        :text="item.text" :badge="item.badge" />
    </div>
  </div>
</template>

<style lang="sass" scoped>
.achievements
  margin-top: 110px

.achievements__content
  display: flex
  justify-content: space-between
  align-items: start
  flex-wrap: wrap
  padding: 0 22px
  max-width: 1000px
  margin: 0 auto

@media (max-width: 885px)
  .achievements__content
    justify-content: center
    gap: 60px 80px

@media (max-width: 512px)
  .achievements__content
    gap: 30px 30px

</style>