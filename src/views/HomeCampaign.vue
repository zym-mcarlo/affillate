<template>
  <section>
    <div class="piece">
      <h3 class="caption">Available Campaigns</h3>
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
.piece
  padding 0.4rem

  .caption
    color var(--strong-text-color)

  .table-container
    margin-top 0.2rem
</style>