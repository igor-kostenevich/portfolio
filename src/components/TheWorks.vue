<template>
  <section class="content__works works" id="works">
    <div class="works__container container">
      <h3 class="works__title title">{{ $i18n('app.worksTitle') }}</h3>
      <!-- <ul class="works-filter" >
        <li
          v-for="link in filterLinks"
          :key="link"
          :class="['works-filter-item', { active: link.activeClass }]"
          @click="setActiveClass(link), currentFilteredItem = link.type"
        >
          {{ link.name }}
        </li>
      </ul> -->
      <app-filter :key="locale" @filteredItem="getFilteredItem"></app-filter>
      <app-work-box
        :currentFilterItem="currentFilteredItem"
        :workToShow="worksToShow"
        @updateLength="updateLength"
      ></app-work-box>
      <button
        class="btn works__btn"
        @click="worksToShow += 3"
        :disabled="disabledBtn"
      >
        {{ $i18n('app.btnShowMore')}}
      </button>
    </div>
  </section>
</template>

<script>
import AppFilter from './AppFilter'
import AppWorkBox from './AppWorkBox'

export default {
  data() {
    return {
      currentFilteredItem: 'all',
      worksToShow: 6,
      totalFilteredWorks: null,
    }
  },
  computed: {
    disabledBtn() {
      return this.worksToShow >= this.totalFilteredWorks
    },
    locale() {
      return this.$store.getters.changeLocale
    }
  },
  methods: {
    updateLength(data) {
      this.totalFilteredWorks = data
    },
    getFilteredItem(item){
      this.currentFilteredItem = item
    }
  },
  watch: {
    worksToShow() {
      this.$forceUpdate()
    },
  },
  components: { AppWorkBox, AppFilter },
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

    &:disabled {
      background-color: rgba(180, 180, 180, 0.788);
      cursor: not-allowed;
      box-shadow: none;
    }
  }

  @media (max-width: 480px){
    padding: 50px 0;
  }
}
</style>
