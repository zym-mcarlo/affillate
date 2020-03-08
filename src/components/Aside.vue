<template>
  <aside>
    <div class="logo-container">
      <img src alt />
    </div>
    <nav class="menu-container">
      <router-link
        v-for="item in menu"
        :key="item.name"
        :to="item.href"
        :class="{'selected': item.href === $route.path }"
      >
        <i class="iconfont"></i>
        <span>{{item.name}}</span>
        <i class="mark"></i>
      </router-link>
    </nav>
  </aside>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

interface Menu {
  name: string;
  icon: string;
  href: string;
}

@Component
export default class Aside extends Vue {
  private menu: Array<Menu> = [
    {
      name: 'Campaigns',
      icon: 'icon-campaigns',
      href: '/content/homeCampaign'
    },
    {
      name: 'Report',
      icon: 'icon-report',
      href: '/content/report'
    },
    {
      name: 'Transaction Record',
      icon: 'icon-transaction-record',
      href: '/content/transactionRecord'
    }
  ];
}
</script>

<style lang="stylus" scoped>
aside
  flex 0 0 3rem
  height 100%
  position relative

  .logo-container
    text-align center
    height 0.8rem
    vertical-align middle

    img
      width 80%

  .menu-container
    margin-top 1.15rem
    display flex
    flex-direction column

    a
      display flex
      align-items center
      width 100%
      height 0.8rem
      color var(--xxx-color)
      font-size 0.18rem
      font-weight bold

      &:hover
        background rgba(24, 30, 52, 0.35)

      &.selected
        color var(--dark-color)

        .mark
          height 0.3rem

      .iconfont
        margin-left 0.44rem

      span
        margin-left 0.12rem

      .mark
        margin-left auto
        width 0.04rem
        height 0
        transition height 0.3s ease
        background var(--dark-color)
</style>