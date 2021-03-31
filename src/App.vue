<template>
  <div class="wrapper" v-cloak>
    <the-header></the-header>

    <router-view />
  </div>
</template>

<script>
import TheHeader from './components/TheHeader'

export default {
  data () {
    return {}
  },
  components: { TheHeader }
}
</script>

<style lang="scss">
@import '@/assets/styles/css/reset';

</style>
