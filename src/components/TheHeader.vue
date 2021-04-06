<template>
  <header class="header">
    <div class="header__container container">
        <router-link to="/home" class="header-logo">
          <img src="@/assets/images/logo.png" alt="Igor Kostenevich logotype" />
        </router-link>
        <div class="header-box">
          <app-navbar></app-navbar>
          <!-- <nav class="header-box-menu">
            <ul class="header-box-menu-list">
              <li class="header-box-menu-link"><a href="#" class="text-decoration">Обо мне</a></li>
              <li class="header-box-menu-link"><a href="#" class="text-decoration">Мои работы</a></li>
            </ul>
          </nav> -->
          <a href="tel:+380678684657" class="header-box-phone-number">+38 (067) 868-46-57</a>
          <div class="header-box-lang">
            <span
              v-for="(lang, idx) in langItems"
              :key="lang.locale"
              :class="{'active': idx === activeLangIndex}"
              @click="setActiveLang(lang, idx)"
            >{{lang.name}}</span>
          </div>
        </div>
    </div>
  </header>
</template>

<script>
import AppNavbar from './AppNavbar'
export default {
  components: { AppNavbar, },
  data(){
    return {
      langItems: [{name: 'РУС', locale: 'ru-RU'}, {name: 'EN', locale: 'en-US'}],
      activeLangIndex: 0,
      currentLocale: 'ru-RU'
    }
  },
  methods: {
    setActiveLang(lang, idx){
      this.activeLangIndex = idx
      this.currentLocale = lang.locale
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/scss/main';

.header {
  // height: 92px;
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

  &-logo {
  }

  &-box {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 10px;

    // &-menu {
    //   margin: 0px 60px 0px 0px;

    //   &-list {
    //     display: flex;
    //   }

    //   &-link {
    //     margin: 0px 25px 0px 0px;
    //     font-family: 'Alice';
    //     position: relative;

    //     &:last-child {
    //       margin: 0px 0px 0px 0px;
    //     }

    //     a {
    //       color: #fff;
    //       font-size: 20px;

    //       &:hover {
    //         color: $decor-color;
    //       }
    //     }
    //   }
    // }

    &-phone-number {
      background: url("../assets/images/icons/phone.svg") left no-repeat;
      font-family: 'Alice';
      color: #fff;
      padding: 0 15px 0 30px;
      margin: 0px 30px 0px 0px;
      transition: color .2s ease;
      font-size: 18px;

      &:hover {
        color: $decor-color;
      }
    }

    &-lang {
      span {
        cursor: pointer;
        color: #fff;
        padding: 0px 5px;
        font-size: 14px;
        transition: color .3s ease;

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
</style>
