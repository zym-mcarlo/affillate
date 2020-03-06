<template>
  <section class="clear-float">
    <div class="welcome">
      <h3 class="title">
        <i class="iconfont"></i>
        <span>Application</span>
      </h3>
      <p class="prompt">Apply to be a MCDEX Business Partner!</p>
      <div class="hint">
        <b>Fill in an application</b>
      </div>
    </div>
    <div class="login-container">
      <div class="input-container">
        <div class="input-group">
          <label for="#name">NAME</label>
          <input type="text" id="name" :class="{'error': true}" />
          <p class="error-hint">An email address must contain a single @</p>
        </div>
        <div class="input-group">
          <label for="#email">EMAIL</label>
          <input type="text" id="email" />
          <p class="error-hint">An email address must contain a single @</p>
        </div>
        <div class="input-group">
          <label for="#country">COUNTRY / REGION</label>
          <select name id="country" value="CHINA">
            <option value="USA">USA</option>
            <option value="CHINA">CHINA</option>
            <option value="JANPAN">JANPAN</option>
          </select>
        </div>
      </div>
      <div class="button-container">
        <button class="common-button" :class="{'disabled': true}">Submit</button>
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

.welcome
  position absolute
  top 1.04rem
  left 1.5rem

  .title
    color var(--strong-text-color)
    font-size 0.36rem
    line-height 0.43rem

  .prompt
    font-size 0.24rem
    color var(--strong-text-color)
    line-height 0.29rem

  .hint
    font-size 0.24rem
    color var(--strong-text-color)
    line-height 0.29rem
    margin-top 0.44rem

.login-container
  position absolute
  top 0.65rem
  right 1.22rem
  width 5.2rem
  height 5rem
  padding 0.4rem 0.3rem
  background var(--light-background)
  box-shadow var(--light-box-shadow)

  .input-container
    .input-group
      display flex
      flex-direction column
      margin-top 0.22rem
      position relative

      label
        font-size 0.14rem
        font-weight bold
        color var(--text-color)
        line-height 0.17rem
        margin-left 0.3rem
        opacity 0.35

      input, select
        flex auto
        text-indent 0.3rem
        padding 0.14rem 0
        color var(--text-color)
        font-weight bold
        border-bottom 1px solid rgba(87, 92, 178, 0.35)

        &:hover
          border-bottom 1px solid var(--text-color)

        &.error
          border 1px solid var(--error-color)
          border-radius 4px

      .error-hint
        color var(--error-color)
        font-size 0.14rem
        line-height 0.2rem
        position absolute
        top 100%
        left 0.3rem

  .button-container
    margin-top 0.6rem
    text-align center

    button
      width 4.6rem
      height 0.9rem
</style>