<template>
  <div class="skills__title title">Навыки</div>
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
        'Базовые знания: Nuxt.js, OOP'
      ]
    }
  }
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
  }
}
</style>
