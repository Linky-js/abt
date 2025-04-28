<script setup lang="ts">
  const { width } = useWindowSize()

  const innerWidth = ref(width)

  const isShowRightBlock = computed(() => {
    return innerWidth.value > 800
  })

  const serviceCompanyItems = [
    [
      {text: 'Системы управления бизнесом: </br> ERP, CRM, WMS, SRM и пр.', icon: 'mark-icon', sizeIcon: {w: '18px', h: '18px'}},
      {text: 'Многостраничные </br> сайты компании', icon: 'inclined-arrow-icon', sizeIcon: {w: '14px', h: '14px'}},
    ],
    [
      {text: 'Аудит </br> готовых систем', icon: 'empty-rounds-icon', sizeIcon: {w: '18px', h: '18px'}},
      {text: 'Разработка </br> кастомных скриптов', icon: 'code-icon', sizeIcon: {w: '21px', h: '20px'}},
    ]
  ]
</script>

<template>
  <div class="promo-header-module__wrapper">
    <div class="container-big">
      <client-only>
        <div class="promo-header-module__content">
          <div class="promo-header-module__content-left">
            <h1>Комплексная разработка для бизнеса под ключ</h1>
            <ui-base-button class="promo-header-module__button">
              Заказать бесплатную консультацию
            </ui-base-button>
            <img
              v-if="!isShowRightBlock"
              class="promo-header-module__img-left"
              src="@/assets/image/home-promo-img.png"
              alt="img"
            >
            <div class="promo-header-module__services-wrapper">
              <div class="promo-header-module__service">
                <ui-icon-text-item
                  v-for="item of serviceCompanyItems[0]"
                  :key="item.text"
                  :text-item="item.text"
                  :name-icon="item.icon"
                  :indent-text="28"
                  :size-icon="item.sizeIcon"
                />
              </div>
              <div class="promo-header-module__service">
                <ui-icon-text-item
                  v-for="item of serviceCompanyItems[1]"
                  :key="item.text"
                  :text-item="item.text"
                  :name-icon="item.icon"
                  :size-icon="item.sizeIcon"
                  :indent-text="13"
                />
              </div>
            </div>
          </div>
          <div
            v-if="isShowRightBlock"
            class="promo-header-module__content-right"
          >
            <img
              src="@/assets/image/home-promo-img.png"
              alt="img"
            >
          </div>
        </div>
      </client-only>
    </div>
  </div>
</template>

<style>
@import "@/assets/css/components/modules/home-promo-module.css";
</style>