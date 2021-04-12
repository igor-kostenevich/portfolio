<template>
  <ul class="works-filter">
    <li
      v-for="link in filterLinks"
      :key="link"
      :class="['works-filter-item', { active: link.activeClass }]"
      @click="setActiveClass(link), $emit('filteredItem', link.type)"
    >
      {{ link.name }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      filterLinks: [
        { name: this.$i18n('links.allWorks'), activeClass: true, type: 'all' },
        { name: this.$i18n('links.site'), activeClass: false, type: 'site' },
        { name: this.$i18n('links.app'), activeClass: false, type: 'app' },
      ],
    }
  },

  methods: {
    setActiveClass(link) {
      this.filterLinks.forEach((item) => {
        item.activeClass = false
      })
      link.activeClass = true
    },
  },
}
</script>

<style scoped lang='scss'>

.works-filter {
  display: flex;
  margin: 0px 0px 60px 0px;

  .works-filter-item {
    margin: 0px 25px 0px 0px;
    transition: all 0.5s;

    &:hover {
      cursor: pointer;
      color: $decor-color;

    }

    &.active {
      color: $decor-color;
      border-bottom: 1px solid $decor-color;
    }

    &:last-child {
      margin-right: 0;
    }

    @media (max-width: 425px){
      margin: 0px 15px 0px 0px;
      font-size: 14px;
    }
  }
}
</style>
