<template>
  <transition-group tag="div" class="works-box" name="list-works" >
    <div class="works-box__column" v-for="work in visibleWorks" :key="work">
      <div class="works-box__item works-item">
        <div class="works-item__image" @click="showPopup(work)">
          <div class="loader-img" v-loading="loading"><img :src="work.urlWorkImage" alt="" /></div>
        </div>
        <div class="works-item__title" @click="showPopup(work)" >
          {{ work.title }}
        </div>
      </div>
    </div>
  </transition-group>

  <teleport to="body">
    <app-modal @closeModal="closePopup" :ifModalOpen="isModalOpen">
      <template #popup-title>
        <h3 class="popup-title">{{ workItemInfo.title }}</h3>
      </template>
      <template #popup-content>
        <div class="popup-stack">
          <span>{{ $i18n('app.stack') }}:</span> {{ workItemInfo.stack }}
        </div>
        <div class="popup-image" >
          <div class="loader-img" v-loading="loading"><img :src="workItemInfo.urlWorkMockup" alt="" /></div>
        </div>
      </template>
      <template #popup-footer>
        <a
          :href="workItemInfo.urlShowProject"
          class="btn popup-link"
          target="_blank"
          >{{ $i18n('app.btnShowProject') }}</a
        >
        <a :href="workItemInfo.urlRepo" class="btn popup-link" target="_blank"
          >{{ $i18n('app.goToRepo') }}</a
        >
      </template>
    </app-modal>
  </teleport>
</template>

<script>
import AppModal from './AppModal'
import { ElLoading } from 'element-plus';

export default {
  components: { AppModal, ElLoading},
  data() {
    return {
      workItems: [
        {
          title: this.$i18n('works.provid_title'),
          urlWorkImage: require('@/assets/images/screenshots/prov.jpg'),
          stack: 'Html, Scss, JavaScript, Jquery, Gulp, Bem',
          urlWorkMockup: require('@/assets/images/mockups/providence.jpg'),
          urlRepo: 'https://github.com/igor-kostenevich/providence',
          urlShowProject: 'https://igor-kostenevich.github.io/providence/',
          type: 'site',
        },
        {
          title: this.$i18n('works.continents_title'),
          urlWorkImage: require('@/assets/images/screenshots/continent.jpg'),
          stack: 'Html, Scss, JavaScript, Jquery, Gulp, Bem',
          urlWorkMockup: require('@/assets/images/mockups/continent.jpg'),
          urlRepo: 'https://github.com/igor-kostenevich/continents',
          urlShowProject: 'https://igor-kostenevich.github.io/continents/',
          type: 'site',
        },
        {
          title: this.$i18n('works.mortgages_title'),
          urlWorkImage: require('@/assets/images/screenshots/calc.jpg'),
          stack: 'Vue.js, Options API, Javascript, SCSS, Webpack, Firebase',
          urlWorkMockup: require('@/assets/images/mockups/calc.jpg'),
          urlRepo: 'https://github.com/igor-kostenevich/mortgage_calculator',
          urlShowProject: 'https://calculate-mortgages.web.app/',
          type: 'app',
        },
        {
          title: this.$i18n('works.lux_title'),
          urlWorkImage: require('@/assets/images/screenshots/lux.jpg'),
          stack: 'Html, Scss, JavaScript, Jquery, Gulp, Bem',
          urlWorkMockup: require('@/assets/images/mockups/lux.jpg'),
          urlRepo: 'https://github.com/igor-kostenevich/luxtrader',
          urlShowProject: 'https://igor-kostenevich.github.io/luxtrader/',
          type: 'site',
        },
        {
          title: this.$i18n('works.bank_title'),
          urlWorkImage: require('@/assets/images/screenshots/bank.jpg'),
          stack:
            'Vue.js, Composition API, Javascript, SCSS, Webpack, Firebase, JWT',
          urlWorkMockup: require('@/assets/images/mockups/bank.jpg'),
          urlRepo: 'https://github.com/igor-kostenevich/bank',
          urlShowProject: 'https://vue-app-bank.web.app/',
          type: 'app',
        },
        {
          title: this.$i18n('works.logo_title'),
          urlWorkImage: require('@/assets/images/screenshots/logo.jpg'),
          stack: 'Html, Scss, JavaScript, Jquery, Gulp, Bem',
          urlWorkMockup: require('@/assets/images/mockups/logo.jpg'),
          urlRepo: 'https://github.com/igor-kostenevich/logo',
          urlShowProject: 'https://igor-kostenevich.github.io/logo/',
          type: 'site',
        },
        {
          title: this.$i18n('works.primeone_title'),
          urlWorkImage: require('@/assets/images/screenshots/primeone.jpg'),
          stack: 'Html, Scss, JavaScript, Jquery, Gulp, Bem',
          urlWorkMockup: require('@/assets/images/mockups/primeone.jpg'),
          urlRepo: 'https://github.com/igor-kostenevich/PrimeOne',
          urlShowProject: 'https://igor-kostenevich.github.io/PrimeOne/',
          type: 'site',
        },
        {
          title: this.$i18n('works.smm_title'),
          urlWorkImage: require('@/assets/images/screenshots/smm.jpg'),
          stack: 'Html, Less, Jquery, Bootstrap, Gulp',
          urlWorkMockup: require('@/assets/images/mockups/smm.jpg'),
          urlRepo: 'https://github.com/igor-kostenevich/smm',
          urlShowProject: 'https://igor-kostenevich.github.io/smm/',
          type: 'site',
        },
        {
          title: this.$i18n('works.yoga_title'),
          urlWorkImage: require('@/assets/images/screenshots/yoga.jpg'),
          stack: 'Html, Less, Jquery, Gulp',
          urlWorkMockup: require('@/assets/images/mockups/yoga.jpg'),
          urlRepo: 'https://github.com/igor-kostenevich/yoga_test',
          urlShowProject: 'https://igor-kostenevich.github.io/yoga_test/',
          type: 'site',
        },
        {
          title: this.$i18n('works.arcad_title'),
          urlWorkImage: require('@/assets/images/screenshots/travel.jpg'),
          stack: 'Html, Less, Jquery, Gulp',
          urlWorkMockup: require('@/assets/images/mockups/egypt.jpg'),
          urlRepo: 'https://github.com/igor-kostenevich/egypt_travel',
          urlShowProject: 'https://igor-kostenevich.github.io/egypt_travel/',
          type: 'site',
        },
        {
          title: this.$i18n('works.curaj_title'),
          urlWorkImage: require('@/assets/images/screenshots/kuraj.jpg'),
          stack: 'Html, Less, Jquery, Gulp, Bem',
          urlWorkMockup: require('@/assets/images/mockups/kuraj.jpg'),
          urlRepo: 'https://github.com/igor-kostenevich/tours_landing',
          urlShowProject: 'https://igor-kostenevich.github.io/tours_landing/',
          type: 'site',
        },
        {
          title: this.$i18n('works.jutan_title'),
          urlWorkImage: require('@/assets/images/screenshots/jutan.jpg'),
          stack: 'Html, Less, Jquery, Gulp',
          urlWorkMockup: require('@/assets/images/mockups/jutan.jpg'),
          urlRepo: 'https://github.com/igor-kostenevich/jutan',
          urlShowProject: 'https://igor-kostenevich.github.io/jutan/',
          type: 'site',
        },
      ],
      workItemsInfo: [],
      workItemInfo: {},
      isModalOpen: false,
      loading: true
    }
  },
  beforeMount() {
    this.workItemsInfo = this.workItems.filter(item => this.currentFilteredItem === 'all' ? item.type === 'site' || 'app' : item.type === this.currentFilteredItem)
  },
  methods: {
    showPopup(data) {
      this.workItemInfo = data
      this.isModalOpen = true
    },
    closePopup() {
      this.isModalOpen = false
      this.workItemInfo = {}
    },
  },
  watch: {
    currentFilteredItem(value) {
      if (value === 'all') {
        this.workItemsInfo = this.workItems
      } else if (value === 'site') {
        this.workItemsInfo = this.workItems.filter(item => item.type === 'site')
      } else if (value === 'app') {
        this.workItemsInfo = this.workItems.filter(item => item.type === 'app')
      }
    },
    workItemsInfo() {
      this.$emit('updateLength', this.workItemsInfo.length)
    },
  },
  computed: {
    visibleWorks() {
      return this.workItemsInfo.filter((_, idx) => idx + 1 <= this.workToShow)
    }
  },
  props: ['currentFilteredItem', 'workToShow'],
  emits: ['updateLength'],
}
</script>

<style scoped lang="scss">
.works-box {
  display: flex;
  margin: 0 -15px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    margin: 0 -7px;
  }

  &__column {
    flex: 0 1 33.333%;
    padding: 0px 15px;
    margin: 0px 0px 60px 0px;
    transition: all 1s ease;

    @media (max-width: 768px) {
      flex: 0 1 50%;
      padding: 0px 7px;
    }

    @media (max-width: 480px) {
      flex: 0 1 100%;
    }
  }
}

.works-item {
  &__title {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    transition: all 0.3s ease;

    &:hover {
      color: $decor-color;
      cursor: pointer;
    }
  }

  &__image {
    margin: 0px 0px 25px 0px;
    padding-bottom: 58%;
    position: relative;
    overflow: hidden;
    border-radius: 10px;

    img {
      width: 100%;
      height: 100%;
      object-fit: fill;
      object-position: top;
      position: absolute;
      top: 0;
      left: 0;
      transition: all 0.3s ease;
      z-index: 5;

      &:hover {
        cursor: pointer;
        transform: scale(1.05);
      }
    }

    &:hover + .works-item__title {
      color: $decor-color;
    }
  }
}

.popup-title {
  font-weight: 600;
  font-size: 20px;
  line-height: 24 / 20 * 100%;
  margin: 0px 0px 30px 0px;
}

.popup-descr {
  font-size: 16px;
  line-height: 20 / 16 * 100%;
  margin: 0px 0px 25px 0px;
}
.popup-stack {
  font-size: 18px;
  line-height: 22 / 18 * 100%;
  margin: 0px 0px 40px 0px;

  span {
    font-size: 20;
    font-weight: 700;
  }
}
.popup-image {
  padding-bottom: 50%;
  position: relative;
  overflow: hidden;
  margin: 0px 0px 70px 0px;

  .loader-img {
   bottom: 0;
    top: 0;
    position: absolute;
    left: 0;
    right: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
  }
}
.popup-link {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 20px 0px;

  &:last-child {
    margin-bottom: 0;
  }
}

.list-works-enter-from,
.list-works-leave-to {
  opacity: 0;
  transform: scale(0.1);
}

.list-works-enter-to,
.list-works-leave-from {
  opacity: 0;
  transform: scale(1);
}

.list-works-enter-active,
.list-works-leave-active {
  transition: all 0.5s ease;
}


</style>
