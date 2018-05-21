<template>
  <div id="app">
    <!--
      keep-alive: The content is cached after the route is loaded,
      and the cache is read when loaded to prevent continuous loading.
    -->
    <!-- name = Detail component Do not do cache processing. -->
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
