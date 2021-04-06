<template>
  <div class="header__menu menu">
    <div class="menu__icon">
      <span></span>
    </div>
    <nav class="menu__body">
      <ul class="menu__list">
        <li>
          <a data-goto="#skills" href="#" class="menu__link text-decoration">Обо мне</a>
        </li>
        <li>
          <a data-goto="#works" href="#" class="menu__link text-decoration">Мои работы</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  mounted(){
    const menuLinks = document.querySelectorAll('.menu__link[data-goto]')
    if (menuLinks.length){
      menuLinks.forEach(link => {
        link.addEventListener('click', onMenuLinkScroll)
      })

      function onMenuLinkScroll(e) {
        const menuLink = e.target
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
          const gotoBlock = document.querySelector(menuLink.dataset.goto)
          const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight

          window.scrollTo({
            top: gotoBlockValue,
            behavior: 'smooth'
          })

          e.preventDefault();

          console.log(gotoBlockValue);
        }
      }
    }
  }
}
</script>

<style scoped lang='scss'>
.menu {
  margin: 0px 60px 0px 0px;

  &__list {
    display: flex;

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

@media (min-width: 767px){
  .menu__list {
    display: flex;
    align-items: center;
  }
  .menu__list > li {
    padding: 10px 0px;
  }
}
</style>
