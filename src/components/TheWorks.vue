<template>
  <section class="content__works works">
    <div class="works__container container">
      <h3 class="works__title title">Мои работы</h3>
      <ul class="works-filter">
        <li
          v-for="link in filterLinks"
          :key="link.name"
          :class="['works-filter-item', {'active': link.activeClass}]"
          @click="setActiveClass(link), currentFilteredItem = link.type"
        >{{ link.name }}</li>
      </ul>
      <app-work-box :currentFilterItem="currentFilteredItem"></app-work-box>
      <button class="btn works__btn">Показать еще</button>
    </div>
  </section>
</template>

<script>
import AppWorkBox from './AppWorkBox'
export default {
  data () {
    return {
      filterLinks: [
        { name: 'Все работы', activeClass: true, type: 'all' },
        { name: 'Сайты', activeClass: false, type: 'site' },
        { name: 'Приложения', activeClass: false, type: 'app' }
      ],
      currentFilteredItem: 'all'
    }
  },
  methods: {
    setActiveClass (link) {
      this.filterLinks.map(item => item.activeClass = false)
      link.activeClass = true
    }
  },
  components: { AppWorkBox }
}
</script>

<style scoped lang="scss">
.works {
  background: url('../assets/images/bg-light.jpg') center / cover no-repeat;
  padding: 50px 0 80px;
  text-align: center;

  &__title {
    margin: 0px 0px 40px 0px;
  }
  &__btn {
    font-size: 20px;
    height: 46px;
  }
}

.works-filter {
  display: flex;
  margin: 0px 0px 60px 0px;

  .works-filter-item {
    margin: 0px 25px 0px 0px;
    transition: all 0.5s;

    &:hover {
      cursor: pointer;
      color: $decor-color;
      text-decoration: underline;
    }

    &.active {
      color: $decor-color;
    }

    &:last-child {
      margin-right: 0;
    }
  }
}

</style>
