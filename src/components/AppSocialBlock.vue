<template>
  <ul class="social-list">
    <li v-for="item in socialList" :key="item">
      <a :href="item.linkTo" @mouseenter="item.isMouseEnter = true" @mouseleave="item.isMouseEnter = false">
        <inline-svg
          :src="item.isMouseEnter ? item.iconHover : item.iconImg"
          width="32"
          height="32"
          fill="white"
        ></inline-svg>
      </a>
    </li>
  </ul>
  <!-- <ul class="social-list">
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
    <li>
      <a href="https://github.com/igor-kostenevich" target="_blank">
        <inline-svg
          :src="require('../assets/images/icons/social/skype.svg')"
          width="32"
          height="32"
          fill="white"
        ></inline-svg>
      </a>
    </li>
  </ul> -->
</template>

<script>
import InlineSvg from 'vue-inline-svg'

export default {
  data() {
    return {
      socialList: [
        {
          linkTo: 'https://t.me/I_kostenevich',
          iconImg: require('../assets/images/icons/social/telegram.svg'),
          iconHover: require('../assets/images/icons/social/telegram_hover.svg'),
          isMouseEnter: false,
        },
        {
          linkTo: 'https://wa.me/380678684657',
          iconImg: require('../assets/images/icons/social/whatsapp.svg'),
          iconHover: require('../assets/images/icons/social/whatsapp_hover.svg'),
          isMouseEnter: false,
        },
        {
          linkTo: 'https://join.skype.com/invite/gpJbSHSIqKb1',
          iconImg: require('../assets/images/icons/social/skype.svg'),
          iconHover: require('../assets/images/icons/social/skype_hover.svg'),
          isMouseEnter: false,
        },
        {
          linkTo: 'mailto:kostenevich9696@gmail.com',
          iconImg: require('../assets/images/icons/social/gmail.svg'),
          iconHover: require('../assets/images/icons/social/gmail_hover.svg'),
          isMouseEnter: false,
        },
        {
          linkTo: 'https://www.linkedin.com/in/igor-kostenevich/',
          iconImg: require('../assets/images/icons/social/linkedin.svg'),
          iconHover: require('../assets/images/icons/social/linkedin_hover.svg'),
          isMouseEnter: false,
        },
        {
          linkTo: 'https://github.com/igor-kostenevich',
          iconImg: require('../assets/images/icons/social/github.svg'),
          iconHover: require('../assets/images/icons/social/github_hover.svg'),
          isMouseEnter: false,

        },
      ],
    }
  },
  methods: {
    onMouseEnter(item) {
      item.isMouseEnter = true
    },
  },
  components: { InlineSvg },
}
</script>

<style scoped lang="scss">
.social-list {
  display: flex;

  @media (max-width: 768px) {
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

    // &:nth-child(1) {
    //   background: url('../assets/images/icons/social/telegram.svg') center /
    //     cover no-repeat;
    //   border-radius: 50%;
    //   border: 2px solid #fff;

    //   &:hover {
    //     background: url('../assets/images/icons/social/telegram_hover.svg')
    //       center / cover no-repeat;
    //     border: 0;
    //     transform: scale(0.88);
    //   }
    // }
    // &:nth-child(2) {
    //   background: url('../assets/images/icons/social/whatsapp.svg') center /
    //     cover no-repeat;

    //   &:hover {
    //     background: url('../assets/images/icons/social/whatsapp_hover.svg')
    //       center / cover no-repeat;
    //   }
    // }
    // &:nth-child(3) {
    //   background: url('../assets/images/icons/social/skype.svg') center / cover
    //     no-repeat;

    //   &:hover {
    //     background: url('../assets/images/icons/social/skype_hover.svg') center /
    //       cover no-repeat;
    //   }
    // }
    // &:nth-child(4) {
    //   background: url('../assets/images/icons/social/gmail.svg') center / cover
    //     no-repeat;
    //   width: 40px;

    //   &:hover {
    //     background: url('../assets/images/icons/social/gmail_hover.svg') center /
    //       cover no-repeat;
    //   }
    // }
    // &:nth-child(5) {
    //   background: url('../assets/images/icons/social/linkedin.svg') center /
    //     cover no-repeat;

    //   &:hover {
    //     background: url('../assets/images/icons/social/linkedin_hover.svg')
    //       center / cover no-repeat;
    //   }
    // }
    // &:nth-child(6) {
    //   background: url('../assets/images/icons/social/github.svg') center /
    //     cover no-repeat;

    //   &:hover {
    //     background: url('../assets/images/icons/social/github_hover.svg')
    //       center / cover no-repeat;
    //       transition: .2s;
    //   }
    // }
  }
}
</style>
