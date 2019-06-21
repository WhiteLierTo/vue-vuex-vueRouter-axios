<template>
  <div id="main">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "main",
  mounted() {}
};
</script>

<style scoped>
#main {
  z-index: -999;
  width: 100%;
}

* {
  font-family: 微软雅黑;
}
</style>
