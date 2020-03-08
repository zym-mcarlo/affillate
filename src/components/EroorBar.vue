<template>
  <div>{{message}}</div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'

@Component
export default class ErrorBar extends Vue {
  @Prop({ default: 'No Error' }) private message!: string
}
</script>

<style lang="stylus" scoped>
div
  height 0.7rem
  background var(--light-background)
  box-shadow var(--light-box-shadow)
  position relative
  text-align center
  font-size 0.18rem
  color var(--error-color)
  line-height @height
</style>