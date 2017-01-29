<template>
  <div
    class="graphic-container" 
    :class="{'horizontal-display': horizontalStyle}">
    <div
      class="graphic-child graphic-child-pic"
      :style="{backgroundImage: 'url(' + graphicList.picSrc + ')', width: picWidth, height: picAutoHeight}"></div>
    <div
      class="graphic-child graphic-child-intro"
      v-if="graphicList.introContent"
      :style="{width: introWidth, height: introHeight}">{{ graphicList.introContent }}</div></div>
</template>

<script>
  export default {
    props: {
      picWidth: {
        type: String,
        required: true
      },
      picHeight: {
        type: String,
        required: true
      },
      introWidth: {
        type: String
      },
      introHeight: {
        type: String
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
    },
    data: function () {
      return {
        picAutoHeight: this.picHeight,
        initClientWid: window.outerWidth
      }
    },
    mounted () {
      let that  = this
      let timer = null
      window.addEventListener("resize", _throttle, false)
      function _throttle () {
        (!timer) && (timer = setTimeout(todo, 80))
      }
      function todo () {
        timer = null
        that.picAutoHeight = parseInt(that.picHeight) * (document.body.clientWidth / that.initClientWid) + 'px'
      }
    }
  }
</script>

<style lang="sass" scoped>
  .graphic-container {
    display: inline-block;
    vertical-align: top;
    width: 100%;
    text-align: center;
    color: #000;
  }
    .graphic-child-pic {
      display: inline-block;
      vertical-align: middle;
      max-width: 100%;
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
    }

  .horizontal-display {
    .graphic-child {
      display: inline-block;
      vertical-align: middle;
    }
  }
</style>