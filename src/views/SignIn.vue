<template>
  <section class="clear-float">
    <div class="middle-container">
      <h2 class="title">MCDEX Affiliate</h2>
      <p class="prompt">Please connect your wallet to log in.</p>
      <div class="button-container">
        <button class="common-button">Connect Wallet</button>
      </div>
      <img class="illustratin" src alt />
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
section
  width 100%
  min-height 100%
  position relative

.middle-container
  width 6rem
  height 3.8rem
  padding-left 0.4rem
  padding-top 0.6rem
  border-radius 4px
  position relative
  background var(--light-background)
  box-shadow var(--light-box-shadow)
  margin auto
  margin-top 1.2rem

  .illustrating
    width 226rem
    position absolute
    right -0.82rem
    bottom -0.35rem

  .title
    font-size 0.54rem
    color var(--text-color)
    line-height 0.65rem

  .prompt
    margin-top 0.2rem
    font-size 0.24rem
    font-weight bold
    color var(--text-color)

  .button-container
    margin-top 0.85rem

    button
      width 2.3rem
      height 0.6rem
</style>