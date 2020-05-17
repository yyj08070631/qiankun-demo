<template>
  <a-config-provider :csp="{ nonce: 'YourNonceCode' }">
    <div id="app1">
      <router-view />
    </div>
  </a-config-provider>
</template>
<script>
export default {
  name: 'App',
  data: () => ({
  })
}
</script>
<style>
</style>
