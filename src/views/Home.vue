<template>
  <div class="content">
    <div class="content__fullscreen">
      <div class="main-screen container">
        <div class="main-screen__column">
          <div class="main-screen__image">
            <img src="@/assets/images/main-foto2.jpg" alt="photo" />
          </div>
        </div>
        <div class="main-screen__column">
          <div class="main-screen__info">
            <div class="main-screen__title">Игорь Костеневич</div>
            <div class="main-screen__subtitle">Front-end разработчик</div>
            <ul class="main-screen__social-list">
              <li><a href="https://t.me/I_kostenevich" target="_blank"></a></li>
              <li><a href="https://wa.me/380678684657" target="_blank"></a></li>
              <li><a href="https://join.skype.com/invite/gpJbSHSIqKb1" target="_blank"></a></li>
              <li><a href="mailto:kostenevich9696@gmail.com"></a></li>
              <li><a href="https://www.linkedin.com/in/igor-kostenevich/" target="_blank"></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="csdqwe">lorem1000</div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {}
}
</script>

<style scoped lang="scss">
$decor-color: #14cec3;

.content {
  min-height: 100%;
}

.content__fullscreen {
  display: flex;
  background: url('../assets/images/main-bg.jpg') center / cover no-repeat;
  min-height: calc(100vh - 92px);
  position: relative;
  z-index: 2;
  padding: 20px 0px;

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.6);
  }
}

.main-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 5;

  &__column {
    flex: 0 1 50%;
    display: flex;
    justify-content: center;

    &:first-child:after {
      content: '';
      border-right: 2px solid #ffffff;
      right: -10%;
      position: relative;
    }
  }

  &__image {
    border-radius: 50%;
    border: 2px solid $decor-color;
    overflow: hidden;
  }

  &__info {
  }

  &__title {
    color: #ffffff;
    font-family: 'Gabriela';
    font-size: 55px;
    margin: 0px 0px 25px 0px;
  }

  &__subtitle {
    color: #ffffff;
    font-family: 'Alice';
    font-size: 24px;
    margin: 0px 0px 25px 0px;
  }

  &__social-list {
    display: flex;

    li {
      height: 32px;
      width: 32px;
      margin: 0px 20px 0px 0px;
      cursor: pointer;
      transition: all .1s ease;
      overflow: hidden;

      a {
        display: inline-block;
        width: inherit;
        height: inherit;
      }

      &:nth-child(1) {
        background: url('../assets/images/icons/social/telegram.svg') center / cover no-repeat;
        border-radius: 50%;
        border: 2px solid #fff;

        &:hover {
          background: url('../assets/images/icons/social/telegram_hover.svg') center / cover no-repeat;
          border: 0;
        }
      }
      &:nth-child(2) {
        background: url('../assets/images/icons/social/whatsapp.svg') center / cover no-repeat;

        &:hover {
          background: url('../assets/images/icons/social/whatsapp_hover.svg') center / cover no-repeat;
        }
      }
      &:nth-child(3) {
        background: url('../assets/images/icons/social/skype.svg') center / cover no-repeat;

        &:hover {
          background: url('../assets/images/icons/social/skype_hover.svg') center / cover no-repeat;
        }
      }
      &:nth-child(4) {
        background: url('../assets/images/icons/social/gmail.svg') center / cover no-repeat;
        width: 40px;

        &:hover {
          background: url('../assets/images/icons/social/gmail_hover.svg') center / cover no-repeat;
        }
      }
      &:nth-child(5) {
        background: url('../assets/images/icons/social/linkedin.svg') center / cover no-repeat;

        &:hover {
          background: url('../assets/images/icons/social/linkedin_hover.svg') center / cover no-repeat;
        }
      }
    }
  }
}
</style>
