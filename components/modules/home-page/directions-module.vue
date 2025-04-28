<script setup lang="ts">
const { width } = useWindowSize()
const innerWidth = ref(width)

const isShowSlider = computed(() => {
  return innerWidth.value <= 512
})

const directionSliderRef = ref(null)
const swiper = useSwiper(directionSliderRef)

</script>

<template>
  <div class="directions-module__wrapper">
    <div class="directions-module__container">
      <h2>Направления</h2>
      <div>
        <client-only>
          <div
            v-if="!isShowSlider"
            class="directions-module__cards"
          >
            <ui-direction-card
              v-for="item in 6"
              :key="item"
            />
          </div>
          <div
            v-else
            class="direction-slider-cards">
            <client-only>
              <swiper-container
                ref="directionSliderRef"
                :centered-slides="true"
                :space-between="10"
                :slides-per-view="1.4"
                :breakpoints="{
                  400: {
                    slidesPerView: 1.4,
                    spaceBetween: 10
                  },
                  300: {
                    slidesPerView: 1.1,
                    spaceBetween: 10
                  }
                }"
              >
                <swiper-slide
                  v-for="item in 6"
                  :key="item"
                  style=""
                >
                  <ui-direction-card/>
                </swiper-slide>
              </swiper-container>
              <div class="direction-slider-arrows">
                <ui-base-icon
                  name="arrow-icon"
                  :size="{w: '73px', h: '20px'}"
                  :rotate="180"
                  color="#726F9F"
                  @click="swiper.prev()"
                />
                <ui-base-icon
                  name="arrow-icon"
                  :size="{w: '73px', h: '20px'}"
                  color="#726F9F"
                  @click="swiper.next()"
                />
              </div>
            </client-only>
          </div>
        </client-only>
      </div>
    </div>
  </div>
</template>

<style>
@import "@/assets/css/components/modules/directions-module.css";
</style>