<template>
  <main class="content">
    <section class="content__fullscreen" id="main-section">
      <div class="main-screen container">
        <div class="main-screen__column">
          <div class="main-screen__image">
            <img src="@/assets/images/main-foto2.jpg" alt="photo" />
          </div>
        </div>
        <div class="main-screen__column">
          <div class="main-screen__info">
            <h1 class="main-screen__title">Игорь Костеневич</h1>
            <h3 class="main-screen__subtitle">Front-end разработчик</h3>
            <app-social-block></app-social-block>
          </div>
        </div>
      </div>
    </section>
    <section class="content__skills skills" id="skills">
      <div class="skills__column">
        <div class="skills__box">
          <h3 class="skills__title title">Обо мне</h3>
          <p class="skills__text">
            Занимаюсь разработкой адаптивных и кроссбраузерных веб-сайтов и
            приложений.
          </p>
          <p class="skills__text">
            Развиваюсь в направлении frontend-разработки. Изучаю новые
            технологии и способы их применения на практике. На данный момент
            совершенствую знания нативного JavaScript и фреймворка Vue.js.
          </p>
          <p class="skills__text">
            Обладаю хорошими навыками коммуникации, веду активный образ жизни,
            умею соблюдать сроки и стоически относиться к трудностям.
          </p>
          <a
            href="ikostenevich_cv.pdf"
            download="ikostenevich_cv_ru.pdf"
            target="_blank"
            class="download__cv text-decoration"
            >Скачать резюме</a
          >
        </div>
      </div>
      <div class="skills__column">
        <app-hard-skills-block></app-hard-skills-block>
      </div>
    </section>
    <the-works></the-works>
  </main>
</template>

<script>
import TheWorks from '../components/TheWorks'
import AppHardSkillsBlock from '../components/AppHardSkillsBlock'
import AppSocialBlock from '../components/AppSocialBlock'

export default {
  name: 'Home',
  components: { AppSocialBlock, AppHardSkillsBlock, TheWorks}
}
</script>

<style lang="scss">

.content {
  min-height: 100%;
}

.content__fullscreen {
  display: flex;
  background: url('../assets/images/main-bg.jpg') center / cover no-repeat;
  min-height: 100vh;
  position: relative;
  z-index: 2;
  padding: 30px 0px;

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

  &:before {
    content: '';
    background: url('../assets/images/icons/arrow-down.svg') no-repeat;
    width: 16px;
    height: 31px;
    display: block;
    position: absolute;
    bottom: 50px;
    left: 50%;
    z-index: 7;
    animation: animArrowDown 2s infinite linear;
  }
}

.main-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 5;
  padding: 100px 0;

  &__column {
    flex: 0 1 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 50px;

    &:first-child {
      border-right: 2px solid #ffffff;
      justify-content: flex-end;
      padding-top: 40px;
      padding-bottom: 40px;
    }
  }

  &__image {
    border-radius: 50%;
    border: 2px solid $decor-color;
    overflow: hidden;
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
}

// ==================================================================================

.skills {
  display: flex;

  &__column {
    flex: 0 1 50%;
    padding: 55px 50px 80px 50px;

    &:first-child {
      background: url('../assets/images/bg-dark.jpg') center / cover no-repeat;
      color: #fff;
    }

    &:last-child {
      background: url('../assets/images/bg-light.jpg') center / cover
        no-repeat;
    }
  }

  .skills__box {
    text-align: right;
    max-width: 450px;
    margin-left: auto;

    .skills__text {
      margin: 0px 0px 25px 0px;
      font-size: 18px;
      line-height: 24 / 18 * 100%;

      &:nth-child(4) {
        margin: 0px 0px 40px 0px;
      }
    }

    .download__cv {
      position: relative;
      font-size: 18px;
      font-family: 'Montserrat';
      background: transparent;
      border: 0;
      padding: 0;
      color: $decor-color;
    }
  }

  &__title {
    margin: 0px 0px 25px 0px;
  }
}
</style>
