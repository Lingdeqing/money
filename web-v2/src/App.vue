<template>
  <router-view />
</template>

<script>

export default {
  name: 'app',
  methods: {
    handleClick: function() {
      this.$toast('Hello world!')
    }
  }
}
</script>

<style>
body {
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC","Helvetica Neue",STHeiti,"Microsoft Yahei",Tahoma,Simsun,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100% !important;
  text-size-adjust: 100% !important;
  -moz-text-size-adjust: 100% !important;
  margin: 0;
  padding: 0;
}
</style>
