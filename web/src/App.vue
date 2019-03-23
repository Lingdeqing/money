<template>
  <InvestPlan />
</template>

<script>
import InvestPlan from './components/InvestPlan.vue'

export default {
  name: 'app',
  components: {
    InvestPlan
  }
}
</script>

<style>
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 1000px;
  margin: 50px auto;
  padding: 0 35px 0 50px;
}

@media (max-width: 600px) {
  body{
    margin: 20px auto;
    padding: 0 0 0 15px;
  }
}
</style>
