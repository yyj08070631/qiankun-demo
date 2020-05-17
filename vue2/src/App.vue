<template>
  <a-config-provider :csp="{ nonce: 'YourNonceCode' }">
    <div class="vue2">
      <router-view />
    </div>
  </a-config-provider>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style>
.vue2 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
