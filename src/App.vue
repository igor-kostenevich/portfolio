<template>
  <div class="wrapper">
    <app-loader></app-loader>
    <the-header></the-header>
    <router-view/>
    <the-footer :key="locale"></the-footer>
  </div>

</template>

<script>
import AppLoader from './components/AppLoader'
import TheFooter from './components/TheFooter'
import TheHeader from './components/TheHeader'

export default {
  data () {
    return {
    }
  },
  computed: {
    locale() {
      return this.$store.getters.changeLocale
    }
  },
  components: { TheHeader, TheFooter, AppLoader}
}
</script>

<style lang="scss">
@import '@/assets/styles/css/reset';

</style>
