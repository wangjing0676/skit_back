<template>
  <div class="sidebar-container">
    <el-scrollbar wrap-class="scrollbar-wrapper">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <template  v-for="(item,index) in routeList" :key="index" >
            <el-menu-item v-if="!item.child" :index="index" @click="toPath(item.route)">
              <span>{{ item.name }}</span>
            </el-menu-item>
            <el-sub-menu :index="idx" v-else>
              <template #title>
                <span>{{ item.name }}</span>
              </template>
              <el-menu-item  @click="toPath(item.route)" :index="index+'-'+idx" v-for="(item,index) in item.child" :key="index">{{ item.name }}</el-menu-item>
            </el-sub-menu>
          </template>
        </el-menu>
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
          route: '/recharge',
          child: [{
            name: '充值统计',
            route: '/recharge',
          },{
            name: '当周充值统计',
            route: '/rechargeWeekList',
          },{
            name: '当月充值统计',
            route: '/rechargeMonthList',
          }]
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
