<template>
  <main class="content"  >
    <section class="content__fullscreen" id="main-section" :key="locale">
      <div class="main-screen container">
        <div class="main-screen__column">
          <div class="main-screen__image">
            <img src="@/assets/images/main-foto2.jpg" alt="photo" />
          </div>
        </div>
        <div class="main-screen__column">
          <div class="main-screen__info">
            <h1 class="main-screen__title"> {{$i18n('app.name') }}</h1>
            <h3 class="main-screen__subtitle">{{$i18n('app.mainDescr') }}</h3>
            <app-social-block></app-social-block>
          </div>
        </div>
      </div>
    </section>
    <section class="content__skills skills" id="skills" :key="locale">
      <div class="skills__column">
        <div class="skills__box">
          <h3 class="skills__title title"> {{ $i18n('app.withMeTitle') }} </h3>
          <p class="skills__text"> {{ $i18n('text.aboutText_1') }} </p>
          <p class="skills__text"> {{ $i18n('text.aboutText_2') }} </p>
          <!-- <p class="skills__text">{{ $i18n('text.aboutText_3') }} </p> -->
           <!-- :href="$store.getters.currentLocale === 'ru' ? 'ikostenevich_cv_ru.pdf' : 'ikostenevich_cv_en.pdf'" -->
          <a
            href="Igor_Kostenevich_CV.pdf"
            download
            target="_blank"
            class="download__cv text-decoration"
            > {{ $i18n('links.downloadCV')}} </a
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
  created() {
    document.title = 'Igor Kostenevich'
  },

  computed: {
    locale() {
      return this.$store.getters.changeLocale
    }
  },

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

  @media (max-width: 768px){
    flex-wrap: wrap;
    align-self: flex-start;
  }

  @media (max-width: 480px){
    padding: 60px 0 100px;
  }

  &__column {
    flex: 0 1 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 50px;

    &:first-child {
      border-right: 2px solid #ffffff;
      justify-content: flex-end;
      padding: 40px 50px 40px 0px;
    }

    @media (max-width: 768px){
      flex: 0 1 100%;
      text-align: center;
      padding: 0 15px;

      &:first-child {
        justify-content: center;
        border-right: 0;
        padding: 40px 0;
      }
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

    @media (max-width: 480px){
      font-size: 44px;
    }
  }

  &__subtitle {
    color: #ffffff;
    font-family: 'Alice';
    font-size: 24px;
    margin: 0px 0px 25px 0px;

    @media (max-width: 480px){
      font-size: 22px;
    }
  }
}

// ==================================================================================

.skills {
  display: flex;
  flex-wrap: wrap-reverse;

  &__column {
    flex: 0 1 50%;
    padding: 55px 50px 80px 50px;

    &:first-child {
      background: url('../assets/images/bg-dark.jpg') center / cover no-repeat;
      color: #fff;
    }

    &:last-child {
      background: url('../assets/images/bg-light.jpg') center / cover no-repeat;
    }

    @media (max-width: 768px){
      flex: 0 1 100%;
      padding: 40px 20px 50px 20px;
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

      @media (max-width: 425px){
        font-size: 16px;
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

    @media (max-width: 768px){
      max-width: 100%;
      text-align: left;
    }
  }

  &__title {
    margin: 0px 0px 25px 0px;
  }
}
</style>
