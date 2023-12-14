<template>
    <div class="app-container">
      <div class="header">
        <el-form :inline="true" :model="formInline1" >
          <el-form-item label="姓名">
            <el-input v-model="formInline1.username" placeholder="请输入姓名" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">搜索</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="footer">
        <el-table
            :data="list"
            style="width: 100%" :border="true" v-loading="loading">
          <el-table-column prop="id" width="60" label="id" align="center"/>
          <el-table-column prop="name" label="姓名" min-width="200px" align="center">
          </el-table-column>
          <el-table-column prop="age" label="年龄" align="center"/>
          <el-table-column prop="sex" label="性别" align="center">
          </el-table-column>
          <el-table-column prop="price" label="价格" align="center"/>
          <el-table-column prop="admin" label="账号" align="center"/>
          <el-table-column prop="address"
                           :show-overflow-tooltip="true"
                           label="地址" width="180" align="center"/>
          <el-table-column prop="date" label="日期" width="180" align="center"/>
          <el-table-column prop="province" label="省份" width="120" align="center"/>
          <el-table-column prop="city" label="城市" align="center"/>
          <el-table-column prop="operator" label="操作" width="180px" fixed="right" align="center">
            
          </el-table-column>
        </el-table>
        <div style="width: 100%; display: flex; justify-content: center; padding-top: 20px">
          <!-- <el-pagination
            v-model:currentPage="currentPage1"
            :page-size="10"
            background
            layout="total, sizes, prev, pager, next, jumper"
            :total="transData.length"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          /> -->
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
            date: '2016-05-02',
            name: '王五',
            price: 1,
            province: '上海',
            admin: 'admin',
            sex:1,
            checked: true,
            id: 1,
            img: 'https://img1.baidu.com/it/u=300787145,1214060415&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500',
            age: 0,
            city: '普陀区',
            address: '上海市普陀区金沙江路 222 弄',
            zip: 200333,
        }]
     }
   },
 
   methods: {
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
 
 </style>
 