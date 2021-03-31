<template>
  <div class="works-box">
    <div
      class="works-box__column"
      v-for="work in workItemsInfo"
      :key="work.title"
    >
      <div class="works-box__item works-item">
        <div class="works-item__image" @click="showPopup(work)">
          <img :src="work.urlWorkImage" alt="" />
        </div>
        <div class="works-item__title" @click="showPopup(work)">
          {{ work.title }}
        </div>
      </div>
    </div>
    <teleport to="body">
      <app-modal @closeModal="closePopup" :ifModalOpen="isModalOpen">
        <template #popup-title>
          <h3 class="popup-title">{{ workItemInfo.title }}</h3>
        </template>
        <template #popup-content>
          <div class="popup-descr">{{ workItemInfo.description }}</div>
          <div class="popup-stack"><span>Стек:</span> {{ workItemInfo.stack }}</div>
          <div class="popup-image">
            <img :src="workItemInfo.urlWorkMockup" alt="" />
          </div>
        </template>
        <template #popup-footer>
          <a :href="workItemInfo.urlShowProject" class="btn popup-link" target="_blank">Посмотреть проект</a>
          <a :href="workItemInfo.urlRepo" class="btn popup-link" target="_blank">Перейти в репозиторий</a>
        </template>
      </app-modal>
    </teleport>
  </div>
</template>

<script>
import AppModal from './AppModal'
export default {
  components: { AppModal },
  data () {
    return {
      workItemsInfo: [
        {
          title: 'Сайт детского лагеря “Семь континентов”',
          urlWorkImage: require('@/assets/images/screenshots/continent.jpg'),
          stack: 'хтмл ссс жаваскрипт гитхаб жейквери сас лес галп вью джеес',
          description: 'Это описание моей работы',
          urlWorkMockup: require('@/assets/images/mockups/bank.jpg'),
          urlRepo:
            'https://1.buffilm-hd.net/735-dobro-pozhalovat-v-zombilend-2-2019.html',
          urlShowProject: 'https://pw.mail.ru/forums/showthread.php?t=213517',
          type: 'site'
        },
        {
          title: 'Сайт детского лагеря “1111 континентов”',
          urlWorkImage: require('@/assets/images/screenshots/continent.jpg'),
          stack: 'хтмл ссс жаваскрипт гитхаб жейквери сас лес галп вью джеес',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisc ing elit. Elementum, penatibus volutpat etiam vestibulum nunc congue. Cursus blandit tempor mi ipsum odio rhoncus.',
          urlWorkMockup: require('@/assets/images/mockups/continent.jpg'),
          urlRepo:
            'https://1.buffilm-hd.net/735-dobro-pozhalovat-v-zombilend-2-2019.html',
          urlShowProject: 'https://pw.mail.ru/forums/showthread.php?t=213517',
          type: 'site'
        },
        {
          title: 'СSqweqweqweqweqweqwe qweqw eqwe qwe qwe qwe qwe qwe ',
          urlWorkImage: require('@/assets/images/screenshots/continent.jpg'),
          stack: 'хтмл ссс жаваскрипт гитхаб жейквери сас лес галп вью джеес',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisc ing elit. Elementum, penatibus volutpat etiam vestibulum nunc congue. Cursus blandit tempor mi ipsum odio rhoncus.',
          urlWorkMockup: require('@/assets/images/mockups/continent.jpg'),
          urlRepo: 'https://google.com',
          urlShowProject: 'https://pw.mail.ru/forums/showthread.php?t=213517',
          type: 'site'
        }
      ],
      workItemInfo: {},
      isModalOpen: false
    }
  },
  methods: {
    showPopup (data1) {
      this.workItemInfo = data1
      this.isModalOpen = true
    },
    closePopup () {
      this.isModalOpen = false
      this.workItemInfo = {}
    }
  }
}
</script>

<style scoped lang="scss">
.works-box {
  display: flex;
  margin: 0 -15px;
  flex-wrap: wrap;

  &__column {
    flex: 0 1 33.333%;
    padding: 0px 15px;
    margin: 0px 0px 60px 0px;
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

    img {
      width: 100%;
      height: 100%;
      object-fit: fill;
      object-position: top;
      position: absolute;
      top: 0;
      left: 0;
      transition: all 0.3s ease;

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

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
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
</style>
