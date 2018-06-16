<template>
  <div id="app">
    <!--
      keep-alive: The content is cached after the route is loaded,
      and the cache is read when loaded to prevent continuous loading.
    -->
    <!-- name = Detail component Do not do cache processing. -->
    <keep-alive exclude="Detail">
      <!-- 显示当前路由地址对应的内容 -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
	name: 'App'
}
</script>
