<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'transparent' | 'purple'
  borderRadius?: number
}>(), {
  variant: "purple",
  borderRadius: 0,
})
</script>

<template>
  <div
    class="base-button__wrapper"
    :class="[`base-button--${variant}`]">
    <button>
      <slot/>
      <span class="base-button__after-slot">
        <slot name="after"/>
      </span>
    </button>
  </div>
</template>

<style>
.base-button__wrapper {
  cursor: pointer;
}

.base-button__wrapper button {
  cursor: pointer;
  align-items: center;
  gap: 0 5px;
  background: inherit;
  color: inherit;
  font-weight: inherit;
  line-height: inherit;
  font-size: inherit;
}

.base-button--purple {
  background: var(--primary-purple);
  font-size: 16px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0;
  text-align: left;
  color: var(--white);
}

.base-button--transparent {
  background: transparent;
  font-size: 16px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0;
  text-align: left;
  color: var(--primary-purple);
}
</style>