<template>
  <div id="app">
    <!-- 路由加载后内容缓存起来, 在此进入时读取缓存, 防止不停的加载 -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style></style>
