<template>
  <div class="block-slider-container">
    <button class="arrow left-arrow" @click="moveGraphic('l')"> O </button>
    <div
      class="block-slider" 
      :style="{width: wrapperWidth + 'px', height: wrapperHeight + 'px'}">
      <ul class="sliders-list" :style="{transform: 'translateX(' + distance + 'px)'}">
        <li
          class="slider-item" 
          v-for="item of slidersList"
          :style="{backgroundImage: 'url(' + item.sliderPicSrc + ')', width: sliderWidth + 'px', height: sliderHeight + 'px', margin: sliderGap + 'px'}">{{item.sliderContent}}</li></ul></div>
    <button class="arrow righ-arrow" @click="moveGraphic('r')"> O </button></div>
</template>

<script>
  export default {
    props: {
      slidersList: {
        type: Array
      },
      wrapperWidth: {
        type: Number
      },
      wrapperHeight: {
        type: Number
      },
      sliderWidth: {
        type: Number
      },
      sliderHeight: {
        type: Number
      },
      sliderGap: {
        type: Number
      }
    },
    data: function () {
      return {
        distance: 0
      }
    },
    methods: {
      moveGraphic: function (dir) {
        let sliderLen       = this.slidersList.length
        let sliderWidth     = this.sliderWidth + 2 * this.sliderGap
        let sliderListWidth = sliderLen * sliderWidth
        if (dir === 'l') {
          this.distance -= sliderWidth;
          (this.distance < this.wrapperWidth - sliderListWidth) &&
          (this.distance = this.wrapperWidth - sliderListWidth)
          return
        }
        if (dir === 'r') {
          this.distance += sliderWidth;
          (this.distance > 0) &&
          (this.distance = 0)
          return
        }
      }
    }
  }
</script>

<style lang="sass" scoped>
  .inline-block-middle {
    box-sizing: border-box;
    display: inline-block;
    vertical-align: middle;
  }
  .block-slider-container {
    &>div {
      @extend .inline-block-middle;
    }
  }
    .block-slider {
      overflow: hidden;
      border: 1px solid;
    }
      .sliders-list {
        white-space: nowrap;
      }    
        .slider-item {
          @extend .inline-block-middle
        }
</style>