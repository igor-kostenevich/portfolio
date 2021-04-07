<template>
  <ul class="social-list">
    <li><a href="https://t.me/I_kostenevich" target="_blank"></a></li>
    <li><a href="https://wa.me/380678684657" target="_blank"></a></li>
    <li>
      <a href="https://join.skype.com/invite/gpJbSHSIqKb1" target="_blank"></a>
    </li>
    <li><a href="mailto:kostenevich9696@gmail.com"></a></li>
    <li>
      <a href="https://www.linkedin.com/in/igor-kostenevich/" target="_blank"></a>
    </li>
    <li>
      <a href="https://github.com/igor-kostenevich" target="_blank"></a>
    </li>
  </ul>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.social-list {
  display: flex;

  @media (max-width: 768px){
    justify-content: center;
  }

  li {
    height: 32px;
    width: 32px;
    margin: 0px 20px 0px 0px;
    cursor: pointer;
    transition: all 0.1s ease;
    overflow: hidden;

    &:last-child {
      margin-right: 0;
    }

    a {
      display: inline-block;
      width: inherit;
      height: inherit;
    }

    &:nth-child(1) {
      background: url('../assets/images/icons/social/telegram.svg') center /
        cover no-repeat;
      border-radius: 50%;
      border: 2px solid #fff;

      &:hover {
        background: url('../assets/images/icons/social/telegram_hover.svg')
          center / cover no-repeat;
        border: 0;
        transform: scale(0.88);
      }
    }
    &:nth-child(2) {
      background: url('../assets/images/icons/social/whatsapp.svg') center /
        cover no-repeat;

      &:hover {
        background: url('../assets/images/icons/social/whatsapp_hover.svg')
          center / cover no-repeat;
      }
    }
    &:nth-child(3) {
      background: url('../assets/images/icons/social/skype.svg') center / cover
        no-repeat;

      &:hover {
        background: url('../assets/images/icons/social/skype_hover.svg') center /
          cover no-repeat;
      }
    }
    &:nth-child(4) {
      background: url('../assets/images/icons/social/gmail.svg') center / cover
        no-repeat;
      width: 40px;

      &:hover {
        background: url('../assets/images/icons/social/gmail_hover.svg') center /
          cover no-repeat;
      }
    }
    &:nth-child(5) {
      background: url('../assets/images/icons/social/linkedin.svg') center /
        cover no-repeat;

      &:hover {
        background: url('../assets/images/icons/social/linkedin_hover.svg')
          center / cover no-repeat;
      }
    }
    &:nth-child(6) {
      background: url('../assets/images/icons/social/github.svg') center /
        cover no-repeat;

      &:hover {
        background: url('../assets/images/icons/social/github_hover.svg')
          center / cover no-repeat;
          transition: .2s;
      }
    }

    @media (max-width: 480px){
      width: 22px;
      height: 22px;

      &:nth-child(4){
        width: 28px;
      }
    }
  }
}
</style>
