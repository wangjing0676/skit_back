<template>
  <div class="sidebar-container">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <div>
        <p v-for="(item,index) in routeList" :key="index" @click="toPath(item.route)">{{item.name}}</p>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
    name: 'layout',
    computed: {
    },
    components: {
    },
    data(){
      return {
        routeList:[{
          name: '短剧管理',
          route: '/skit'
        },{
          name: '首页管理',
          route: '/'
        },{
          name: '充值管理',
          route: '/recharge'
        }]
      }
    },

    methods: {
      toPath(path){
        this.$router.push(path)
      }
    }
}
</script>

<style lang="scss">
  .sidebar-container {
    padding-top: 20px;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    width: 210px;
    border-right: 1px solid #ccc;
    div {
      p{
        text-align: center;
        padding: 10px 0;
      }
    }
  }
</style>
