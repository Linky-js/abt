<script setup lang="ts">
const { width } = useWindowSize()

const innerWidth = ref(width)

const isShowRightBlock = computed(() => {
  return innerWidth.value > 800
})

const serviceCompanyItems = [
  [
    { text: 'Системы управления бизнесом: </br> ERP, CRM, WMS, SRM и пр.', icon: 'crm-icon', sizeIcon: { w: '18px', h: '18px' } },
    { text: 'Многостраничные </br> сайты компании', icon: 'inclined-arrow-icon', sizeIcon: { w: '14px', h: '14px' } },
  ],
  [
    { text: 'Аудит </br> готовых систем', icon: 'empty-rounds-icon', sizeIcon: { w: '18px', h: '18px' } },
    { text: 'Разработка </br> кастомных скриптов', icon: 'code-icon', sizeIcon: { w: '21px', h: '20px' } },
  ]
]
</script>

<template>
  <div class="promo">
    <client-only>
      <div class="promo__content">
        <div class="promo__content-left">
          <h1>Комплексная разработка для бизнеса под ключ</h1>
          <ui-base-button class="promo-button">
            Заказать бесплатную консультацию
          </ui-base-button>
          <div v-if="!isShowRightBlock" class="promo__img-left">
            <img src="@/assets/image/promo-1.png" alt="" class="promo-img-1">
            <img src="@/assets/image/promo-2.png" alt="" class="promo-img-2">
            <img src="@/assets/image/promo-3.png" alt="" class="promo-img-3">
          </div>
          <div class="promo__services">
            <div class="promo__service">
              <ui-icon-text-item v-for="item of serviceCompanyItems[0]" :key="item.text" :text-item="item.text"
                :name-icon="item.icon" :indent-text="28" :size-icon="item.sizeIcon" />
            </div>
            <div class="promo__service">
              <ui-icon-text-item v-for="item of serviceCompanyItems[1]" :key="item.text" :text-item="item.text"
                :name-icon="item.icon" :size-icon="item.sizeIcon" :indent-text="13" />
            </div>
          </div>
        </div>
        <div v-if="isShowRightBlock" class="promo__content-right">
          <img src="@/assets/image/promo-1.png" alt="" class="promo-img-1">
          <img src="@/assets/image/promo-2.png" alt="" class="promo-img-2">
          <img src="@/assets/image/promo-3.png" alt="" class="promo-img-3">
        </div>
      </div>
    </client-only>
  </div>
</template>

<style lang="sass" scoped>
.promo
  margin-top: 25px
  width: 100%
  padding: 55px
  padding-bottom: 122px
  background: #FAFAFA
  border-radius: 40px

.promo__content
  display: flex
  justify-content: space-between
  gap: 0 10px

.promo-button
  padding: 26px 45px 24px 44px
  max-width: 380px
  width: 100%

.promo__services
  display: flex
  margin-top: 60px
  justify-content: space-between
  gap: 0 10px
  max-width: 556px

  > div:last-child
    margin-top: 11px

.promo__service > div:last-child
  margin-top: 34px

.promo-button > div
  padding: 10px

.promo__img-left
  margin-top: 28px

.promo__content-left h1
  color: var(--primary-grey)
  font-size: 62px
  font-weight: 600
  line-height: 110%
  letter-spacing: -2%
  text-align: left
  max-width: 592px
  margin-bottom: 32px
  width: 100%
.promo__content-left
  width: 100%
.promo__content-right
  position: relative
  max-width: 588px
  width: 100%
  height: max-content
.promo-img-1
  width: 588px
  height: auto
.promo-img-2
  width: 358px
  height: auto
  position: absolute
  left: -45px
  bottom: -104px
.promo-img-3
  width: 269px
  height: auto
  position: absolute
  right: -12px
  bottom: -196px
@media (max-width: 1050px)
  .promo__content-left h1
    font-size: 32px

@media (max-width: 512px)
  .promo__services
    margin-top: 45px

  .promo-button
    max-width: 334px
    padding: 17px 32px
    font-size: 14px

</style>