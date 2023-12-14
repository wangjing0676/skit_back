<template>
  <Sidebar/>
  <div class="main-container">
      <Main/>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar/index.vue'
import Main from './components/Main/index.vue'
export default {
    name: 'layout',
    computed: {
    },
    components: {
      Sidebar,
      Main,
    },
    data(){
      return {
      }
    },

    methods: {

    }
}
</script>

<style lang="scss" scoped>
.main-container {
  display: flex;
  flex: 1;
  box-sizing: border-box;
  flex-direction: column;
  position: relative;
  height: 100%;
  margin-left: 220px;
}
.sidebar-container {
  display: flex;
  flex-direction: column;
}
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 90;
}
</style>
