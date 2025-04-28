<script setup lang="ts">
  const { width } = useWindowSize()
  const innerWidth = ref(width)

  const isShowSlider = computed(() => {
    return innerWidth.value <= 620
  })

 const cardsStageWorkContent = [
     'Базовое предпроектное исследование',
     'Анализ и ТЗ',
     'Проектирование',
     'Разработка',
     'Тестирование',
     'Разработка',
     'Поддержка и доработки',
 ]
</script>

<template>
  <div class="stage-work-module__wrapper">
    <div class="container">
      <h2 class="stage-work-module__title">Этапы работ</h2>
      <client-only>
        <div
          v-if="!isShowSlider"
          class="stage-work-module__cards">
          <ui-base-card
            v-for="(text, index) of cardsStageWorkContent"
            :key="index"
            class="stage-work-module__card"
            :hover-effect="true"
            :title="'0' + `${index + 1}`"
            :text="text"
          />
        </div>
        <div
          v-else
          class="stage-swiper-cards"
        >
          <swiper-container
            :space-between="13"
            :slides-per-view="1.1"
            :centered-slides="true"
          >
            <swiper-slide
              v-for="(text, index) of cardsStageWorkContent"
              :key="index"
              style="height: 100%"
            >
              <ui-base-card
                bg-color="#726F9F"
                class="stage-work-module__card"
                :hover-effect="true"
                :title="'0' + `${index + 1}`"
                :text="text"
              />
            </swiper-slide>
          </swiper-container>
        </div>
      </client-only>
    </div>
  </div>
</template>

<style>
@import "@/assets/css/components/modules/stages-work-module.css";
</style>