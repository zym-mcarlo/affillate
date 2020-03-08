<template>
  <section class="container">
    <Aside></Aside>
    <main>
      <ContentHeader></ContentHeader>
      <div class="content-container scroll">
        <EroorBar message="You will receive your commission everyday if it’s above $10;" />
        <router-view></router-view>
      </div>
    </main>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Aside from '../components/Aside.vue'
import ContentHeader from '../components/ContentHeader.vue'
import EroorBar from '../components/EroorBar.vue'

@Component({
  components: {
    Aside,
    ContentHeader,
    EroorBar
  }
})
export default class ContentModule extends Vue {}
</script>

<style lang="stylus" scoped>
.container
  display flex
  height 100%

  main
    flex auto
    background var(--dark-background)
    height 100%

    .content-container
      height calc(100% - 0.8rem)
      overflow-x hidden
      overflow-y auto
</style>