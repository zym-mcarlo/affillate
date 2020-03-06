<template>
  <section class="clear-float">
    <div class="content">
      <h3 class="title">
        <i class="iconfont"></i>
        Your application has been successfully received!
      </h3>
      <p class="prompt">We will review your application as soon as possible.</p>
      <p
        class="tip"
      >Your Email (******@.com) will receive an Email within 36 hours from your personal business partner manager.</p>
      <div class="email">
        <i class="iconfont"></i>
        BP@mcdex.io
      </div>
      <div class="hint">Stay tuned with us</div>
      <div class="community">
        <a href>1</a>
        <a href>2</a>
        <a href>3</a>
        <a href>4</a>
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

.content
  margin-top 1.04rem
  margin-left 1.5rem

  .title
    font-size 0.36rem
    color var(--strong-text-color)
    line-height 0.43rem

  .prompt
    margin-top 0.1rem
    font-size 0.24rem
    color var(--strong-text-color)
    line-height 0.29rem

  .tip
    width 5rem
    font-size 0.18rem
    color var(--hint-color)
    line-height 0.24rem
    margin-top 0.61rem

  .email
    margin-top 0.45rem
    vertical-align middle
    font-size 0.24rem
    color var(--strong-text-color)
    line-height 0.29rem

  .hint
    font-size 0.24rem
    margin-top 0.63rem
    color var(--strong-text-color)
    line-height 0.29rem

  .community
    display flex
    align-items center
    margin-top 0.4rem

    a
      width 0.4rem
      height @width
      cursor pointer
      border 1px solid

      &:not(:first-of-type)
        margin-left 0.4rem
</style>