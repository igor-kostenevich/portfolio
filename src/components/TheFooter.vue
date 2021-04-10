<template>
  <footer class="footer">
    <div class="footer__container container">
      <div class="footer-info">
        <span> {{ $i18n('app.footerText') }} </span>
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

@media (max-width: 768px){
  .footer {
    padding: 30px 0px;
  }
  .footer-info {
    flex-direction: column;
    align-items: center;

    span {
      margin-bottom: 20px;
    }
  }
}

@media (max-width: 480px){
  .footer  {
    padding: 20px 0px;
  }

  .footer-info span {
    font-size: 24px;
  }
}
</style>
