<template>
  <section>
    <div class="piece">
      <h3 class="caption">Assets</h3>
      <div class="table-container">
        <div class="table-title">
          <table cellspacing="0" cellpadding="0" border="0">
            <colgroup>
              <col width="300" />
              <col width="300" />
              <col width="300" />
              <col width="300" />
            </colgroup>
            <thead>
              <tr>
                <th>Event name</th>
                <th>Date</th>
                <th>Link</th>
                <th>Materials</th>
              </tr>
            </thead>
          </table>
        </div>
        <div class="table-body">
          <table cellspacing="0" cellpadding="0" border="0">
            <colgroup>
              <col width="300" />
              <col width="300" />
              <col width="300" />
              <col width="300" />
            </colgroup>
            <tbody>
              <tr>
                <td>Business Partner Campaigns</td>
                <td>March 3, 2010</td>
                <td>
                  <a href="https://mcdex.io">https://mcdex.io</a>
                </td>
                <td>
                  <i class="iconfont"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="piece">
      <h3 class="caption">
        Commission Report
        <div class="action-bar">
          <div class="select-container">
            <div class="value">
              <span>Campaigns</span>
              <i class="iconfont"></i>
            </div>
            <ul class="option-container">
              <li></li>
            </ul>
          </div>
          <div class="date-container">
            <div class="value">
              <span>03 March 2020</span>
              <i class="iconfont"></i>
            </div>
          </div>
        </div>
      </h3>
      <div class="table-container">
        <div class="table-title">
          <table cellspacing="0" cellpadding="0" border="0">
            <colgroup>
              <col width="300" />
              <col width="300" />
              <col width="300" />
              <col width="300" />
            </colgroup>
            <thead>
              <tr>
                <th>Event name</th>
                <th>Date</th>
                <th>Link</th>
                <th>Materials</th>
              </tr>
            </thead>
          </table>
        </div>
        <div class="table-body">
          <table cellspacing="0" cellpadding="0" border="0">
            <colgroup>
              <col width="300" />
              <col width="300" />
              <col width="300" />
              <col width="300" />
            </colgroup>
            <tbody>
              <tr>
                <td>Business Partner Campaigns</td>
                <td>March 3, 2010</td>
                <td>
                  <a href="https://mcdex.io">https://mcdex.io</a>
                </td>
                <td>
                  <i class="iconfont"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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
  padding 0.4rem

  .piece
    &:not(:first-of-type)
      margin-top 0.6rem

    .caption
      display flex
      align-items center
      color var(--strong-text-color)

      .action-bar
        margin-left auto
        display flex
        align-items center

        .select-container
          width 2.7rem
          height 0.4rem

        .date-container
          width 2.7rem
          height 0.4rem
          margin-left 0.4rem
          background rgba(20, 26, 48, 0.5)
          border-radius 4px
          border 1px solid rgba(147, 182, 242, 0.5)
          position relative
          cursor pointer

          .value
            width 100%
            height 100%
            display flex
            align-items center
            padding 0 0.2rem
            padding-right 0.34rem
            position relative
            color var(--hint-color)

            .iconfont
              position absolute
              right 0.19rem
              top 50%
              transform translateY(-50%)
              font-size 0.12rem

  .table-container
    margin-top 0.2rem
</style>