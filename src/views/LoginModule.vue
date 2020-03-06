<template>
  <div class="container">
    <Header />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from '../components/Header.vue'

@Component({
  components: {
    Header
  }
})
export default class App extends Vue {}
</script>

<style lang="stylus" scoped>
.container
  width 100%
  height 100%

main
  height calc(100% - 0.8rem)
  overflow-x hidden
  overflow-y auto
</style>