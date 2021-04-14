<template>
  <ul class="social-list">
    <li v-for="item in socialList" :key="item">
      <a :href="item.linkTo" target="_blank">
        <inline-svg
          @mouseenter="onMouseEnter(item)"
          @mouseleave="item.isMouseEnter = false"
          :src="item.isMouseEnter ? item.iconHover : item.iconImg"
          width="32"
          height="32"
          fill="white"
        ></inline-svg>
      </a>
    </li>
  </ul>
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
      this.socialList.forEach(link => link.isMouseEnter = false)
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
  }
}
</style>
