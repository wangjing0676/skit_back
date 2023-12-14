<template>
  <div class="app-main">
    <router-view></router-view>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
  .app-main {
    flex: 1;
    display: flex;
    overflow-x: hidden;
    width: 100%;
    box-sizing: border-box;
    .app-main-inner {
      flex: 1;
      display: flex;
      overflow-x: hidden;
      width: 100%;
      box-sizing: border-box;
    }
  }
</style>
