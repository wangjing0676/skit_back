<template>
    <Sidebar/>
    <div class="main-container">
      <router-view></router-view>
    </div>
</template>
<script>
import Sidebar from './components/Sidebar/index.vue'

export default {
  name: 'app',
  components: {
    Sidebar,
  },
  computed: {
  },
  
  data(){
    return {
    }
  },

  methods: {

  }
}
</script>
<style scoped  lang="scss">
  .main-container {
    display: flex;
    flex: 1;
    box-sizing: border-box;
    flex-direction: column;
    position: relative;
    height: 100%;
    margin-left: 220px;
  }
</style>
