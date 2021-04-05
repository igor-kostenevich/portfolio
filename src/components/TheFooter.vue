<template>
  <footer class="footer">
    <div class="footer__container container">
      <div class="footer-info">
        <span>Связь со мной: </span>
        <app-social-block></app-social-block>
      </div>
    </div>
  </footer>
</template>

<script>
import AppSocialBlock from './AppSocialBlock'
export default {
  components: { AppSocialBlock },
}
</script>

<style scoped lang='scss'>
.footer {
  background-color: #383838;
  padding: 45px 0px;
}

.footer-info {
  display: flex;
  justify-content: center;

  span {
    font-size: 30px;
    line-height: 34 / 30 * 100%;
    color: #fff;
    margin-right: 20px;
  }
}
</style>
