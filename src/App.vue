<template>
  <div id="app" class="dex-theme-dark">
    <div class="nav" style="position: fixed; left: 20px; top: 100px; z-index: 9;">
      <div class="common-button">
        <router-link to="/index/signIn">Sign In</router-link>
      </div>
      <div class="common-button">
        <router-link to="/index/joinUs">Join Us</router-link>
      </div>
      <div class="common-button">
        <router-link to="/index/login">Login</router-link>
      </div>
      <div class="common-button">
        <router-link to="/index/submitSuccess">SubmitSuccess</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class App extends Vue {}
</script>

<style lang="stylus">
#app
  width 100%
  height 100%
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  background var(--root-background)
</style>
