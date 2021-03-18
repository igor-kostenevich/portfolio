<template>
  <header class="header">
    <div class="header-container container">
      <div class="header__column">
        <a href="#" class="header-logo">
          <img src="@/assets/images/logo.png" alt="Igor Kostenevich logotype" />
        </a>
      </div>
      <div class="header__column">
        <div class="header-box">
          <nav class="header-box-menu">
            <ul class="header-box-menu-list">
              <li class="header-box-menu-link"><a href="#" class="text-decoration">Обо мне</a></li>
              <li class="header-box-menu-link"><a href="#" class="text-decoration">Мои работы</a></li>
            </ul>
          </nav>
          <a href="tel:+380678684657" class="header-box-phone-number">+38 (067) 868-46-57</a>
          <div class="header-box-lang">
            <span class="active">EN</span>
            <span>RU</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/scss/main';

.header {
  height: 92px;
  background: rgba(6, 6, 6, 0.8);

  &-container {
    display: flex;
    height: 100%;
    align-items: center;
  }

  &__column {
    &:first-child {
      flex: 0 1 130px;
    }

    &:last-child {
      flex: 0 1 100%;
    }
  }

  &-logo {
  }

  &-box {
    display: flex;
    justify-content: flex-end;
    padding: 0 10px;

    &-menu {
      margin: 0px 60px 0px 0px;

      &-list {
        display: flex;
      }

      &-link {
        margin: 0px 25px 0px 0px;
        font-family: 'Alice';
        position: relative;

        &:last-child {
          margin: 0px 0px 0px 0px;
        }

        a {
          color: #fff;

          &:hover {
            color: $decor-color;
          }
        }
      }
    }

    &-phone-number {
      background: url("../assets/images/icons/phone.svg") left no-repeat;
      font-family: 'Alice';
      color: #fff;
      padding: 0 15px 0 30px;
      margin: 0px 30px 0px 0px;
      transition: color .2s ease;

      &:hover {
        color: $decor-color;
      }
    }

    &-lang {
      span {
        cursor: pointer;
        color: #fff;
        margin: 0px 10px 0px 0px;

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
