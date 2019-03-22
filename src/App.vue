<template>
  <div id="app">
    <!--
    keep-alive: 在加载路由之后缓存内容，
    并且缓存在加载时被读取，以防止连续加载。
    -->
    <!-- name = Detail component 不进行缓存处理 -->
    <keep-alive exclude="Detail">
      <!-- router-view: 显示子路由地址对应的内容 -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
