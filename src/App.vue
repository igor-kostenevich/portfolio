<template>
  <div class="wrapper" v-cloak>
    <the-header></the-header>

    <router-view />
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheFooter from './components/TheFooter'
import TheHeader from './components/TheHeader'

export default {
  data () {
    return {}
  },
  components: { TheHeader, TheFooter, }
}
</script>

<style lang="scss">
@import '@/assets/styles/css/reset';

</style>
