<template>
  <section class="clear-float">
    <div class="middle-container">
      <h2 class="title">Join Us</h2>
      <p class="prompt">You are not one of our Business Partners yet!</p>
      <p class="prompt">Apply here!</p>
      <div class="button-container">
        <button class="common-button">Connect Wallet</button>
      </div>
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
  position absolute
  top 50%
  left 50%
  transform translate(-50%, -50%)
  text-align center

  .title
    font-size 0.54rem
    color var(--strong-text-color)
    line-height 0.65rem

  .prompt
    margin-top 0.12rem
    font-size 0.18rem
    color var(--dark-color)

    &:first-of-type
      margin-top 0.43rem

  .button-container
    margin-top 0.36rem

    button
      width 2.3rem
      height 0.6rem
</style>