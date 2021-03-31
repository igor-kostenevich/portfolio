<template>
  <transition name="popup" mode="out-in" @enter="showContent = true">
    <div class="v-popup" v-if="ifModalOpen" @click="hideContent">
      <div class="v-popup__body" >
        <div class="v-popup__overlay" ></div>
        <transition name="popup-content" @leave="closeModal">
          <div class="v-popup__content" v-if="showContent" @click.stop>
            <span class="v-popup__close" @click="hideContent">&times;</span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
            incidunt provident laudantium saepe ducimus, placeat fugit itaque
            atque quia autem iusto iure odio ut libero similique eligendi
            assumenda, ex quos.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
            incidunt provident laudantium saepe ducimus, placeat fugit itaque
            atque quia autem iusto iure odio ut libero similique eligendi
            assumenda, ex quos.

            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
            incidunt provident laudantium saepe ducimus, placeat fugit itaque
            atque quia autem iusto iure odio ut libero similique eligendi
            assumenda, ex quos.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
            incidunt provident laudantium saepe ducimus, placeat fugit itaque
            atque quia autem iusto iure odio ut libero similique eligendi
            assumenda, ex quos.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
            incidunt provident laudantium saepe ducimus, placeat fugit itaque
            atque quia autem iusto iure odio ut libero similique eligendi
            assumenda, ex quos.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
            incidunt provident laudantium saepe ducimus, placeat fugit itaque
            atque quia autem iusto iure odio ut libero similique eligendi
            assumenda, ex quos.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
            incidunt provident laudantium saepe ducimus, placeat fugit itaque
            atque quia autem iusto iure odio ut libero similique eligendi
            assumenda, ex quos.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
            incidunt provident laudantium saepe ducimus, placeat fugit itaque
            atque quia autem iusto iure odio ut libero similique eligendi
            assumenda, ex quos.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
            incidunt provident laudantium saepe ducimus, placeat fugit itaque
            atque quia autem iusto iure odio ut libero similique eligendi
            assumenda, ex quos.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
            incidunt provident laudantium saepe ducimus, placeat fugit itaque
            atque quia autem iusto iure odio ut libero similique eligendi
            assumenda, ex quos.
            <slot></slot>
          </div>
        </transition>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      showContent: false
    }
  },
  props: {
    popupName: {
      type: String,
      required: true,
      default: 'abra'
    },
    ifModalOpen: {
      type: Boolean
    }
  },
  updated () {
    const body = document.querySelector('body')
    if (this.ifModalOpen) {
      body.style = 'overflow: hidden'
    } else {
      body.style = 'overflow: auto'
    }
  },
  emits: ['closeModal'],
  methods: {
    closeModal () {
      this.$emit('closeModal')
    },
    hideContent () {
      this.showContent = false
    }
  }
}
</script>

<style scoped lang='scss'>
.v-popup {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  overflow-x: hidden;
  overflow-y: auto;
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;

  &__body {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 25px 10px;
  }

  &__content {
    background-color: #fff;
    max-width: 800px;
    padding: 20px;
    position: relative;
    // z-index: 101;
    cursor: default;

    &_enter-animation {
      transform: perspective(600px) translate(0px, -100%) rotateX(45deg);
    }

    &_leave-animation {
      transform: perspective(600px) translate(0px, 0%) rotateX(0deg);
    }
  }

  &__close {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 30px;
    cursor: pointer;
  }
}

// Modal animation
.popup-enter-from,
.popup-leave-to {
  opacity: 0;
}

.popup-enter-to,
.popup-leave-from {
  opacity: 1;
}

.popup-content-enter-from,
.popup-content-leave-to {
  transform: perspective(600px) translate(0px, -100%) rotateX(45deg);
}

.popup-content-enter-to,
.popup-content-leave-from {
  transform: perspective(600px) translate(0px, 0%) rotateX(0deg);
}

.popup-enter-active,
.popup-leave-active,
.popup-content-enter-active,
.popup-content-leave-active {
  transition: all 0.8s ease 0s;
}
</style>
