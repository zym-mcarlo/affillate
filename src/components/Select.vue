<template>
  <div class="select-container">
    <div class="value">
      {{value}}
      <i class="iconfont"></i>
    </div>
    <ul class="option-container">
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Select extends Vue {
  @Prop() value!: string | number
}
</script>

<style>
</style>