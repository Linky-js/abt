<script setup lang="ts">
const isOpenDrawwer = ref(false)
</script>

<template>
  <div>
    <h1>Style guide</h1>
    <div class="icons-example">
      <ui-base-icon name="money-icon"/>
      <ui-base-icon name="searc-succes-icon"/>
      <ui-base-icon name="code-icon"/>
      <ui-base-icon
        name="arrow-icon"
        :size="{w: '50px', h: '50px'}"
        :rotate="180"
      />
      <ui-base-icon
        name="inclined-arrow-icon"
        color="green"
      />
      <ui-base-icon name="burger-lines-icon"/>
      <ui-base-icon name="dot-active-icon"/>
      <ui-base-icon name="micron-icon"/>
      <ui-base-icon
        name="recoil-icon"
        color="red"
      />
      <ui-base-icon name="chat-icon"/>
      <ui-base-icon name="cash-icon"/>
      <ui-base-icon name="user-icon"/>
      <ui-base-icon
        name="graph-icon"
        :size="{w: '40px', h: '40px'}"
      />
      <ui-base-icon
        name="1c-icon"
        color="purple"
      />
      <ui-base-icon name="support-chat-icon"/>
      <ui-base-icon name="loupe-icon"/>
      <ui-base-icon name="graph-line-icon"/>
      <ui-base-icon name="line-cubic-icon"/>
      <ui-base-icon name="double-round-icon"/>
      <ui-base-icon name="search-icon"/>
      <ui-base-icon name="gear-icon"/>
      <ui-base-icon name="chevron-icon"/>
      <ui-base-icon
        name="telegram-icon"
        color="blue"
      />
      <ui-base-icon name="whatsapp-icon"/>
      <ui-base-icon name="star-icon"/>
      <ui-base-icon name="mark-icon"/>
      <ui-base-icon name="empty-rounds-icon"/>
      <ui-base-icon name="line-circle-icon"/>
      <ui-base-icon name="square-circle-icon"/>
      <ui-base-icon
        name="small-arrow-icon"
        color="red"/>
    </div>

    <div>
      <h1>
        Logo
      </h1>
      <ui-app-logo/>
    </div>

    <div style="margin-top: 20px; text-align: center">
      <h1>drawer</h1>
      <div>
        <a-button @click="isOpenDrawwer = true">open drawer</a-button>
        <a-drawer
          v-model:open="isOpenDrawwer"
          placement="right"
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </a-drawer>
      </div>
    </div>

    <ui-base-card title="hello"/>
  </div>
</template>

<style scoped>
  h1 {
    margin-top: 20px;
    text-align: center;
  }

  .icons-example {
    display: flex;
    gap: 0 10px;
    margin-top: 10px;
    padding: 10px;
  }
</style>