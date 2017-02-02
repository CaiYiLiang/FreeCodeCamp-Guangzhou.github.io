<template>
  <div class="block-slider-container">
    <span class="arrow left-arrow strong white-color-bg primary-color-ft" @click="moveGraphic('l')"> < </span>
    <div
      class="block-slider" 
      :style="{width: wrapperWidth, height: wrapperHeight}">
      <ul class="sliders-list" :style="{transform: 'translateX(' + distance + ')'}">
        <li
          class="slider-item" 
          v-for="item of slidersList"
          :style="{backgroundImage: 'url(' + item.sliderPicSrc + ')', width: sliderWidth, height: sliderHeight, marginRight: sliderGap}">{{item.sliderContent}}</li></ul></div>
    <span class="arrow righ-arrow strong white-color-bg primary-color-ft" @click="moveGraphic('r')"> > </span></div>
</template>

<script>
  export default {
    props: {
      total: {
        type: Number,
        required: true
      },
      slidersList: {
        type: Array
      },
      wrapperWidth: {
        type: String
      },
      wrapperHeight: {
        type: String
      },
      sliderWidth: {
        type: String
      },
      sliderHeight: {
        type: String
      },
      sliderGap: {
        type: String
      }
    },
    data: function () {
      return {
        distance: 0
      }
    },
    methods: {
      moveGraphic: function (dir) {
        let sliderLen       = this.total
        let sliderWidth     = parseInt(this.sliderWidth) + parseInt(this.sliderGap)
        let sliderListWidth = sliderLen * sliderWidth
        let wrapperWidth    = parseInt(this.wrapperWidth)
        let distance        = parseInt(this.distance)

        if (dir === 'l') {
          distance += sliderWidth;
          (distance > 0) && (distance = 0)
          this.distance = distance + 'px'
          return
        }
        if (dir === 'r') {
          distance -= sliderWidth;
          (distance < wrapperWidth - sliderListWidth) && (distance = wrapperWidth - sliderListWidth)
          this.distance = distance + 'px'
          return
        }
      }
    }
  }
</script>

<style lang="sass" scoped>
  .strong {
    font-weight: bold;
  }
  .primary-color-bg {
    background-color: #00ac71;
  }
  .primary-color-ft {
    color: #00ac71;
  }
  .white-color-bg {
    background-color: #fff;
  }

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
      position: relative;
      max-width: 100%;
      overflow: hidden;
    }
      .sliders-list {
        white-space: nowrap;
        transition: transform .5s ease;
      }    
        .slider-item {
          @extend .inline-block-middle
        }
  .arrow {
    height: 30px;
    margin: 0 6px;
    padding: 6px 4px;
  }
  .left-arrow, .righ-arrow {
    position: absolute;
    top: 50%;
    margin-top: -15px;
  }
  .left-arrow {
    right: 100%;
  }
  .righ-arrow {
    left: 100%;
  }
</style>