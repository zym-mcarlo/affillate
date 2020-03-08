<template>
  <div id="app" class="dex-theme-dark">
    <div class="nav" style="position: fixed; left: 0; top: 10px; z-index: 9;">
      <router-link to="/index/signIn">
        <button class="common-button">Sign In</button>
      </router-link>
      <router-link to="/index/joinUs">
        <button class="common-button">Join Us</button>
      </router-link>
      <router-link to="/index/login">
        <button class="common-button">Login</button>
      </router-link>
      <router-link to="/index/submitSuccess">
        <button class="common-button">SubmitSuccess</button>
      </router-link>
      <router-link to="/content/homeCampaign">
        <button class="common-button">homeCampaign</button>
      </router-link>
      <router-link to="/content/report">
        <button class="common-button">report</button>
      </router-link>
      <router-link to="/content/transactionRecord">
        <button class="common-button">transactionRecord</button>
      </router-link>
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

  .nav a
    margin 0 0.1rem
</style>
