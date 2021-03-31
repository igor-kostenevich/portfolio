<template>
  <section class="content__works works">
    <div class="works__container container">
      <h3 class="works__title title">Мои работы</h3>
      <div class="works-filter">
        <div class="works-filter-item active">Все работы</div>
        <div class="works-filter-item">Сайты</div>
        <div class="works-filter-item">Приложения</div>
      </div>
      <app-work-box></app-work-box>
      <button class="works__btn">Показать еще</button>
    </div>
  </section>
</template>

<script>
import AppWorkBox from './AppWorkBox'
export default {
  components: { AppWorkBox }
}
</script>

<style scoped lang="scss">
.works {
  background: url('../assets/images/bg-light.jpg') center / cover no-repeat;
  padding: 50px 0 80px;
  text-align: center;

  &__container {
  }
  &__title {
    margin: 0px 0px 40px 0px;
  }
  &__btn {
    background: $decor-color;
    font-size: 20px;
    color: #fbfbfb;
    height: 40px;
    border-radius: 10px;
    padding: 0 40px;
    transition: box-shadow .15s;

    &:hover {
      box-shadow: 1px 1px 5px 3px rgba(18, 118, 118, 0.25);
    }
  }
}

.works-filter {
  display: flex;
  margin: 0px 0px 60px 0px;

  .works-filter-item {
    margin: 0px 25px 0px 0px;
    transition: 0.2s;

    &:hover {
      cursor: pointer;
      color: $decor-color;
      text-decoration: underline;
    }

    &.active {
      font-size: 18px;
      color: $decor-color;
    }

    &:last-child {
      margin-right: 0;
    }
  }
}

</style>
