<template>
    <div>
      <h1>家居管理系统</h1>
      <router-link to="/furniture">家具管理</router-link>
      <!-- 其他导航链接... -->
      
      <TabBar></TabBar>
      
    </div>
</template>
  
<script setup>
import TabBar from "@/components/TabBar/TabBar.vue"
import SideBar from "@/components/SideBar/SideBar.vue"
</script>
<style lang="scss" scoped>
</style>