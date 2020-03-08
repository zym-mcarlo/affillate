<template>
  <section>
    <div class="piece">
      <h3 class="caption">Notice</h3>
      <div class="prompt-container">
        <p>You will receive your commission everyday if it’s above $10;</p>
        <p>if not, you will receive when your accumulative commission amount is above $10.</p>
      </div>
    </div>
    <div class="piece">
      <h3 class="caption">Record</h3>
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
      color var(--strong-text-color)

  .table-container
    margin-top 0.2rem

  .prompt-container
    margin-top 0.2rem
    padding-left 0.4rem

    p
      color var(--strong-text-color)

      &:not(:first-of-type)
        margin-top 0.1rem
</style>