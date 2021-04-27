<template>
  <div id="nav">
    <router-link v-if="$route.path === '/'" :to="{ name: 'demo' }">
      go to Demo
    </router-link>
  </div>
  <router-view />
</template>

<script lang="ts">
export default {
  name: "app",
};
</script>

<style lang="scss">
@import "assets/css/normalize";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
