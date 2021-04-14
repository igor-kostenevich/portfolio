<template>
  <div class="menu">
    <div
      class="menu__icon"
      @click.stop="toggleClass"
      :class="{ active: activeClass }"
    >
      <span></span>
    </div>
    <nav class="menu__body" :class="{ active: activeClass }">
      <ul class="menu__list">
        <li><a data-goto="#skills" href="#" class="menu__link text-decoration">Обо мне</a></li>
        <li><a data-goto="#works" href="#" class="menu__link text-decoration">Мои работы</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeClass: false,
    }
  },
  methods: {
    toggleClass() {
      const body = document.querySelector('body')

      this.activeClass = !this.activeClass
      body.classList.toggle('lock')
    },

    onMenuLinkScroll(e) {
      const menuLink = e.target

      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
        const gotoBlock = document.querySelector(menuLink.dataset.goto)
        const heightHeader = document.querySelector('header').offsetHeight
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - heightHeader

        window.scrollTo({
          top: gotoBlockValue,
          behavior: 'smooth',
        })

        this.activeClass = false
        document.querySelector('body').classList.remove('lock')

        e.preventDefault()
      }
    },
  },
  mounted() {
    // smоoth scrolling
    const menuLinksScrolling = document.querySelectorAll('[data-goto]')
    if (menuLinksScrolling.length) {
      menuLinksScrolling.forEach(link => link.addEventListener('click', this.onMenuLinkScroll))
    }
  },
}
</script>

<style scoped lang='scss'>
.menu {
  &__icon {
    display: none;
  }

  &__list {
    & > li {
      position: relative;
      margin-right: 25px;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  &__link {
    font-family: 'Alice';
    position: relative;
    color: #fff;
    font-size: 20px;

    &:hover {
      color: $decor-color;
    }
  }
}

@media (min-width: 768px) {
  .menu__list {
    display: flex;
    align-items: center;
  }
  .menu__list > li {
    padding: 10px 0px;
  }
}

@media (max-width: 768px) {
  .menu__icon {
    z-index: 5;
    display: block;
    position: relative;
    width: 30px;
    height: 18px;
    cursor: pointer;

    &:before,
    &:after,
    & span {
      position: absolute;
      left: 0;
      height: 10%;
      width: 100%;
      transition: all 0.3s ease;
      background-color: #fff;
    }

    span {
      top: 50%;
      transform: scale(1) translate(0px, -50%);
    }

    &:before,
    &:after {
      content: '';
    }

    &:before {
      top: 0;
    }

    &:after {
      bottom: 0;
    }

    &.active span {
      transform: scale(0) translate(0px, -50%);
    }

    &.active:before {
      top: 50%;
      transform: rotate(-45deg) translate(0px, -50%);
    }

    &.active:after {
      bottom: 50%;
      transform: rotate(45deg) translate(0px, 50%);
    }
  }

  .menu__body {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    padding: 130px 30px 30px 30px;
    left: -150%;
    transition: left 0.3s ease;
    overflow: auto;

    &.active {
      left: 0;
    }

    &:before {
      content: '';
      position: fixed;
      width: 100%;
      top: 0;
      left: 0;
      height: 92px; // header height
      background: rgba(6, 6, 6, 1);
      z-index: 2;

      @media (max-width: 480px){
        height: 62px;
      }
    }
  }

  .menu__list {
    display: flex;
    flex-direction: column;
    align-items: center;

    & > li {
      margin-bottom: 30px;
    }

    &:last-child {
      margin-bottom: 0px;
    }
  }

  .menu__link {
    font-size: 24px;
  }
}
</style>
