<template>
  <div class="md-field">
    <div
      class="md-field-title"
      v-if="title !== ''">{{title}}</div>
    <div class="md-field-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>export default {
  name: 'md-field',

  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="stylus">
.md-field
  background-color field-item-bg-color
  .md-field-title
    display flex
    font-size field-title-font-size
    font-weight field-title-font-weight
    color field-title-color
    line-height 45px
    padding field-padding-v field-padding-h field-title-margin field-padding-h
  .md-field-content
    display flex
    flex-direction column
    .md-field-item,
    .md-input-item,
    .md-input-item.is-title-latent .md-input-item-msg,
    .md-radio
      padding-left field-padding-h
      padding-right field-padding-h
      box-sizing border-box
    .md-field-item .md-field-item-inner, .md-input-item-container
      hairline(bottom, field-item-border-color)
    .md-field-item:last-of-type
      .md-field-item-inner::before
        display none
    // .md-input-item:last-of-type .md-input-item-container::before
    //   display none
    .md-input-item.error .md-input-item-container
      hairline(bottom, input-item-color-error)
  .md-radio .md-radio-item
    padding-left 0 !important
    padding-right 0 !important

</style>
