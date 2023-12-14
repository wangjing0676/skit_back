<template>
  <div class="app-container">
    <div style="margin: 60px 0;">
      本周充值/消费
    </div>
    <div class="footer">
      <el-table
          :data="list"
          style="width: 100%" :border="true" v-loading="loading">
        <el-table-column prop="time" label="日期" align="center"/>
        <el-table-column prop="rechargeUserNum" label="充值用户数" align="center">
        </el-table-column>
        <el-table-column prop="rechargeNum" label="充值笔数" align="center"/>
        <el-table-column prop="rechargeAmount" label="充值金额" align="center">
        </el-table-column>
        <el-table-column prop="consumptionNum" label="消费金币数" align="center"/>
      </el-table>
      <div style="width: 100%; display: flex; justify-content: center; padding-top: 20px">
        <el-pagination
          v-model:currentPage="currentPage1"
          :page-size="10"
          background
          layout="total, sizes, prev, pager, next, jumper"
          :total="list.length"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
 name: 'home',
 computed: {
 },
 
 data(){
   return {
      formInline1: {
          username: ''
      },
      list: [{
          rechargeUserNum: '5',
          rechargeNum: 1,
          consumptionNum:1,
          img: 'https://img1.baidu.com/it/u=300787145,1214060415&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500',
          shop: '王五',
          time: 20231111,
          rechargeAmount: 1

      }]
   }
 },

 methods: {
  onAdd() {
    this.addDialog = true
  },
  onSubmit(){

  },
  confirmEdit(){

  },
  cancelEdit() {

  },
  deleteAction() {

  }
 }
}
</script>
<style scoped  lang="scss">
.app-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
  .header {
    margin: 10px;
  }
  .footer {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 20px;
  }
</style>
