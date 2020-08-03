<script>
export default {
  name: 'Navigation',
  setup() {},
};
</script>

<template>
  <nav class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </nav>
</template>

<style lang="scss" scoped>
a {
  background: black;
  color: white;
  padding: 20px;
  &.router-link-exact-active {
    background-color: red;
    color: black;
  }
}
</style>
