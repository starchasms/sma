<!-- src/views/FurnitureManage.vue -->

<template>
    <div class="furniture-manage">
      <TabBar></TabBar>
      <h2>家具管理</h2>
      <button @click="addFurniture">添加新家具</button>
      <table>
        <thead>
          <tr>
            <th>名称</th>
            <th>类型</th>
            <th>数量</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="furniture in furnitureList" :key="furniture.id">
            <td>{{ furniture.name }}</td>
            <td>{{ furniture.type }}</td>
            <td>{{ furniture.quantity }}</td>
            <td>
              <button @click="editFurniture(furniture)">编辑</button>
              <button @click="deleteFurniture(furniture.id)">删除</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        furnitureList: [
          // 假设数据从后端获取
          { id: 1, name: '沙发', type: '客厅家具', quantity: 2 },
          // 更多家具...
        ]
      };
    },
    methods: {
      addFurniture() {
        // 跳转到添加家具的表单页面或模态框
      },
      editFurniture(furniture) {
        // 跳转到编辑家具的表单页面或打开编辑模态框
      },
      deleteFurniture(id) {
        // 发送请求到后端删除家具并更新列表
      }
    }
  };
  </script>
  <script setup>
    import TabBar from "@/components/TabBar/TabBar.vue"
  </script>
  <style scoped>
  .furniture-manage table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .furniture-manage th,
  .furniture-manage td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  
  .furniture-manage th {
    background-color: #f2f2f2;
  }
  </style>