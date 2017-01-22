<template>
  <div
    class="graphic-container" 
    :class="{'horizontal-display': horizontalStyle}">
    <div
      class="graphic-child graphic-child-pic"
      :style="{backgroundImage: 'url(' + graphicList.picSrc + ')', width: picWidth + 'px', height: picHeight + 'px'}"></div>
    <div
      class="graphic-child graphic-child-intro"
      v-if="graphicList.introContent"
      :style="{width: introWidth + 'px', height: introHeight + 'px'}">{{ graphicList.introContent }}</div></div>
</template>

<script>
  export default {
    props: {
      picWidth: {
        type: Number,
        required: true
      },
      picHeight: {
        type: Number,
        required: true
      },
      introWidth: {
        type: Number
      },
      introHeight: {
        type: Number
      },
      horizontalStyle: {
        type: Boolean,
        default: false
      },
      lineSum: {
        type: Number,
        default: 1
      },
      graphicList: {
        type: Object
      }
    }
  }
</script>

<style lang="sass" scoped>
  .graphic-container {
    display: inline-block;
    vertical-align: top;
    color: #000;
  }
  .horizontal-display {
    .graphic-child {
      display: inline-block;
      vertical-align: middle;
    }
  }
</style>