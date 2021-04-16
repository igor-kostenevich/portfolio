<template>
  <h3 class="skills__title title">{{ $i18n('app.skillsTitle') }}</h3>
  <ul class="skills__list">
    <li v-for="skill in hardSkillsList" :key="skill">{{ skill }}</li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      hardSkillsList: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'JQuery',
        'Vue.js / Vuex / Vue Router',
        'Gulp / Webpack',
        'SCSS / LESS',
        'Npm / Yarn',
        'Git',
        'Github / Bitbucket',
        'BEM / SOLID',
        'Trello, Clockify',
        'Avocode / Figma',
        'Firebase',
        'Windows / macOS / Ubuntu',
        `${this.$i18n('app.worksLabel')}: Nuxt.js, OOP, PWA`
      ]
    }
  },
}
</script>

<style lang="scss">
.skills__list {
  li {
    font-family: 'Montserrat';
    font-size: 18px;
    line-height: 22px;
    margin: 0px 0px 10px 0px;

    &:before {
      content: '';
      background: url('../assets/images/icons/mark.svg') left no-repeat;
      width: 10px;
      height: 10px;
      display: inline-block;
      padding-left: 10px;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
