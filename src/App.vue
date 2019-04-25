<template>
  <div id="app">
    <!-- 当前路由地址所显示的内容 -->
    <!-- keep-alive路由加载一次后，放入内存 -->
    <keep-alive>
         <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
