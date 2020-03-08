<template>
  <header>
    <div class="action-bar">
      <lang></lang>
      <ConnectWallet></ConnectWallet>
    </div>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Lang from './Lang.vue';
import ConnectWallet from './ConnectWallet.vue';

@Component({
  components: {
    Lang,
    ConnectWallet
  }
})
export default class ConnectHeader extends Vue {}
</script>

<style lang="stylus" scoped>
header
  height 0.8rem
  padding 0 0.4rem
  display flex
  align-items center
  background var(--dark-background)
  border-bottom 1px solid var(--root-background)

  .action-bar
    margin-left auto
    display flex
    align-items center
</style>