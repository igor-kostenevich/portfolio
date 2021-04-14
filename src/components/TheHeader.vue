<template>
  <header class="header">
    <div class="header__container container">
      <router-link to="/home" class="header-logo">
        <img src="@/assets/images/logo.png" alt="Igor Kostenevich logotype" />
      </router-link>
      <div class="header-box">
        <app-navbar class="header__menu" :key="locale"></app-navbar>
        <a href="tel:+380678684657" class="header-box-phone-number">
          <inline-svg
          :src="require('../assets/images/icons/phone.svg')"
          height="25"
          width="25"
          class="icon-phone"
        ></inline-svg>
        <span>+38 (067) 868-46-57</span></a>
        <div class="header-box-lang">
          <span
            v-for="(lang, idx) in langItems"
            :key="lang.locale"
            :class="{ active: idx === activeLangIndex }"
            @click="setActiveLang(lang, idx), changeLang()"
          >{{ lang.name }}</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import AppNavbar from './AppNavbar'
import InlineSvg from 'vue-inline-svg'

export default {
  components: { AppNavbar, InlineSvg },
  data() {
    return {
      langItems: [
        { name: 'EN', locale: 'en' },
        { name: 'РУС', locale: 'ru' }
      ],
      activeLangIndex: 0,
    }
  },

  methods: {
    setActiveLang(lang, idx) {
      this.activeLangIndex = idx
      this.$store.commit('changeLocale', lang.locale)
    },
    changeLang() {
      this.changeI18N(this.$store.getters.currentLocale)
    },
  },

  computed: {
    locale() {
      return this.$store.getters.changeLocale
    }
  },

  inject: ['changeI18N'],
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/scss/main';

.header {
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;
  background: rgba(6, 6, 6, 0.9);

  &__container {
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    min-height: 92px;

    @media (max-width: 480px){
      min-height: 62px;
    }
  }

  &__menu {
    margin-right: 60px;
  }

  &-logo {
    position: relative;
    z-index: 2;

    @media (max-width: 480px){
      height: 40px;
      width: 40px;

      img {
        width: inherit;
        height: inherit;
      }
    }
  }

  &-box {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 10px;

    &-phone-number {
      display: flex;
      align-items: center;
      font-family: 'Alice';
      color: #fff;
      margin: 0px 30px 0px 0px;
      transition: color 0.2s ease;
      font-size: 18px;
      position: relative;
      z-index: 2;

      .icon-phone {
        margin-right: 10px;
      }

      &:hover {
        color: $decor-color;
      }
    }

    &-lang {
      position: relative;
      z-index: 2;

      @media (max-width: 480px){
        padding-top: 4px;
      }

      span {
        cursor: pointer;
        color: #fff;
        padding: 0px 5px;
        font-size: 14px;
        transition: color 0.3s ease;

        &:last-child {
          margin: 0px 0px 0px 0px;
        }

        &.active {
          color: $decor-color;
        }

         @media (max-width: 480px){
          font-size: 16px;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .header__menu {
    order: 3;
    margin-right: 0px;
    margin-left: 30px;
  }
}

@media (max-width: 480px) {
  .header-box-phone-number {
    margin: 0px 15px 0px 0px;

    span {
      display: none;
    }
  }
}

</style>
