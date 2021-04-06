<template>
  <header class="header">
    <div class="header__container container">
      <router-link to="/home" class="header-logo">
        <img src="@/assets/images/logo.png" alt="Igor Kostenevich logotype" />
      </router-link>
      <div class="header-box">
        <app-navbar class="header__menu"></app-navbar>
        <a href="tel:+380678684657" class="header-box-phone-number"><span>+38 (067) 868-46-57</span></a>
        <div class="header-box-lang">
          <span
            v-for="(lang, idx) in langItems"
            :key="lang.locale"
            :class="{ active: idx === activeLangIndex }"
            @click="setActiveLang(lang, idx)"
          >{{ lang.name }}</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import AppNavbar from './AppNavbar'
export default {
  components: { AppNavbar },
  data() {
    return {
      langItems: [
        { name: 'РУС', locale: 'ru-RU' },
        { name: 'EN', locale: 'en-US' },
      ],
      activeLangIndex: 0,
      currentLocale: 'ru-RU',
    }
  },
  methods: {
    setActiveLang(lang, idx) {
      this.activeLangIndex = idx
      this.currentLocale = lang.locale
    },
  },
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
  }

  &__menu {
    margin-right: 60px;
  }

  &-logo {
    position: relative;
    z-index: 2;
  }

  &-box {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 10px;

    &-phone-number {
      background: url('../assets/images/icons/phone.svg') left no-repeat;
      font-family: 'Alice';
      color: #fff;
      padding: 0 0 0 30px;
      margin: 0px 30px 0px 0px;
      transition: color 0.2s ease;
      font-size: 18px;
      position: relative;
      z-index: 2;

      &:hover {
        color: $decor-color;
      }
    }

    &-lang {
      position: relative;
      z-index: 2;

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
    height: 20px;
    width: 20px;
    margin: 0px 15px 0px 0px;

    span {
      display: none;
    }
  }
}
</style>
