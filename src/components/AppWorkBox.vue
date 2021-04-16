<template>
  <transition-group tag="div" class="works-box" name="list-works">
    <div
      class="works-box__column"
      v-for="work in visibleWorks"
      :key="work"
    >
      <div class="works-box__item works-item">
        <div class="works-item__image" @click="showPopup(work)">
          <div class="loader-img" v-loading="loading"><img :src="work.urlWorkImage" alt="" /></div>
        </div>
        <div class="works-item__title" @click="showPopup(work)">
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
          <span>Стек:</span> {{ workItemInfo.stack }}
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
        >Посмотреть проект</a>
        <a
          :href="workItemInfo.urlRepo"
          class="btn popup-link"
          target="_blank"
        >Перейти в репозиторий</a>
      </template>
    </app-modal>
  </teleport>
</template>

<script>
import AppModal from './AppModal'
import { workItems } from '@/data/workItems'
import { ElLoading } from 'element-plus';

export default {
  components: { AppModal, ElLoading},
  data() {
    return {
      workItemsInfo: workItems,
      workItemInfo: {},
      isModalOpen: false,
      loading: true
    }
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
    currentFilterItem(value) {
      if (value === 'all') {
        this.workItemsInfo = workItems
      } else if (value === 'site') {
        this.workItemsInfo = workItems.filter(item => item.type === 'site')
      } else if (value === 'app') {
        this.workItemsInfo = workItems.filter(item => item.type === 'app')
      }
    },
    workItemsInfo() {
      this.$emit('updateLength', this.workItemsInfo.length)
    },
  },
  computed: {
    visibleWorks() {
      return this.workItemsInfo.filter((_, idx) => idx + 1 <= this.workToShow)
    },
  },
  props: ['currentFilterItem', 'workToShow'],
  emits: ['updateLength'],
}
</script>

<style scoped lang="scss">
.works-box {
  display: flex;
  margin: 0 -15px;
  flex-wrap: wrap;

  @media (max-width: 768px){
    margin: 0 -7px;
  }

  &__column {
    flex: 0 1 33.333%;
    padding: 0px 15px;
    margin: 0px 0px 60px 0px;
    transition: all 1s ease;

    @media (max-width: 768px){
      flex: 0 1 50%;
      padding: 0px 7px;
    }

    @media (max-width: 480px){
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
