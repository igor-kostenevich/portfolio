<template>
  <transition name="popup" mode="out-in" @enter="showContent = true">
    <div class="v-popup" v-if="ifModalOpen" @click="hideContent">
      <div class="v-popup__body">
        <transition name="popup-content" @leave="closeModal">
          <div
            class="v-popup__content content-popup"
            v-if="showContent"
            @click.stop
          >
            <div class="content-popup__header">
              <slot name="popup-title"></slot>
              <span class="v-popup__close" @click="hideContent">&times;</span>
            </div>
            <div class="content-popup__body">
              <slot name="popup-content"></slot>
            </div>
            <div class="content-popup__footer">
              <div class="content-popup__footer-content">
                <slot name="popup-footer"></slot>
              </div>
              <button class="btn content-popup__close-btn" @click="hideContent">
                <slot name="popup-close-button">Закрыть</slot>
              </button>
            </div>
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
    ifModalOpen: {
      type: Boolean
    }
  },
  mounted () {
    document.addEventListener('keyup', this.escPress)
  },
  unmounted () {
    document.removeEventListener('keyup', this.escPress)
  },
  updated () {
    const body = document.querySelector('body')
    const scrollWidth = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px'

    if (this.ifModalOpen) {
      body.style = `overflow: hidden; padding-right: ${scrollWidth}`
      this.isOpenedModal = true
    } else if (!this.ifModalOpen) {
      setTimeout(function () {
        body.style = 'overflow: auto;  padding-right: 0px;'
      }, 800)
    }
  },
  emits: ['closeModal'],
  methods: {
    closeModal () {
      this.$emit('closeModal')
    },
    hideContent () {
      this.showContent = false
    },
    escPress (e) {
      if (e.which === 27 && this.ifModalOpen) {
        this.hideContent()
        console.log('ww')
      }
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
    min-width: 40%;
    padding: 20px;
    position: relative;
    cursor: default;
  }

  &__close {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 30px;
    cursor: pointer;
  }
}

.content-popup {
  &__header {
    padding-right: 50px;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
  }

  &__footer-content {
    display: flex;
    flex-direction: column;
    margin-right: 20px;
  }

  &__close-btn {
    width: 127px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
    margin-top: 20px;
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
