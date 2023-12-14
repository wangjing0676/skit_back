<template>
  <div class="app-container">
    <div style="margin: 40px 0 60px;">
      首页推荐管理
    </div>
    <div class="header">
      <el-form :inline="true" :model="formInline1" >
        <el-form-item label="id">
            <el-input v-model="formInline1.id" placeholder="请输入姓名" />
          </el-form-item>
          <el-form-item label="标题">
            <el-input v-model="formInline1.title" placeholder="请输入姓名" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">搜索</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onAdd" icon="edit">新增</el-button>
          </el-form-item>
      </el-form>
    </div>
    <div class="footer">
      <el-table
          :data="list"
          style="width: 100%" :border="true" v-loading="loading">
        <el-table-column prop="id" width="60" label="id" align="center"/>
        <el-table-column prop="title" label="标题" align="center"/>
        <el-table-column prop="sort" label="排序" align="center"/>
        <el-table-column prop="status" label="状态" align="center">
        </el-table-column>
        <el-table-column prop="data" label="创建时间" min-width="200px"  align="center">
        </el-table-column>
        <el-table-column prop="operator" label="操作" width="280px" fixed="right" align="center">
          <template #default="scope">
              <el-button size="small" @click="editHandler(scope.row)">
                上 / 下架
              </el-button>
              <el-button size="small" @click="editHandler(scope.row)">
                编辑
              </el-button>
              <el-button @click="del(scope.row)" size="small">
                章节管理
              </el-button>
            </template>
        </el-table-column>
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
          cover: '王五',
          price: 1,
          desc:1,
          sort: 99,
          status: '上架',
          img: 'https://img1.baidu.com/it/u=300787145,1214060415&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500',
          title: '王五',
          data: 0,
          id: 1
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
  }
</style>
