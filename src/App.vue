<template>
  <div class="wrapper">
    <app-loader></app-loader>
    <the-header></the-header>
    <router-view />
    <the-footer></the-footer>
  </div>

</template>

<script>
import AppLoader from './components/AppLoader'
import TheFooter from './components/TheFooter'
import TheHeader from './components/TheHeader'

export default {
  components: { TheHeader, TheFooter, AppLoader, }
}
</script>

<style lang="scss">
@import '@/assets/styles/css/reset';

</style>
