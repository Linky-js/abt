
<template>
  <button
    class="btn">
    <span><slot/></span>
  </button>
</template>

<style lang="sass" scoped>
.btn 
  cursor: pointer
  background: var(--primary-grey)
  font-size: 16px
  font-weight: 600
  line-height: 18px
  letter-spacing: 0
  text-align: left
  color: var(--white)
  position: relative
  transition: .3s 
  overflow: hidden
  &::before
    position: absolute
    content: ''
    width: 100%
    height: 100%
    top: 0
    left: 0
    background: var(--primary-purple)
    transition: .3s all
  &:hover
    &::before
      left: -100%
.btn span
  position: relative
  z-index: 2
  display: flex
  align-items: center
  justify-content: center
  width: 100%
  height: 100%
  gap: 5px
</style>