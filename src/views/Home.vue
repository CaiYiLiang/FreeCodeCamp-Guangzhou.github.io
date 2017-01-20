<template>
  <div id="app">
    <!-- 技能 -->
    <el-row class="row-bg text-center">
      <el-col :span="24/item.lineSum" v-for="item of graphicHomeskill">
        <graphic-box
          class="grid-content"
          :picWidth="item.picWidth"
          :picHeight="item.picHeight"
          :graphicList="item.graphicList"></graphic-box></el-col></el-row>
    <!-- 愿景 -->
    <el-row class="row-bg text-center">
      <el-col :span="24/item.lineSum" v-for="item of graphicVision">
        <graphic-box
          class="grid-content"
          :picWidth="item.picWidth"
          :picHeight="item.picHeight"
          :graphicList="item.graphicList"></graphic-box></el-col></el-row>
    <!-- 照片墙 -->
    <el-row class="row-bg text-center">
      <block-slider
        :wrapperWidth="slidersActivity.wrapperWidth"
        :wrapperHeight="slidersActivity.wrapperHeight"
        :sliderWidth="slidersActivity.sliderWidth"
        :sliderHeight="slidersActivity.sliderHeight"
        :sliderGap="slidersActivity.sliderGap"
        :slidersList="slidersActivity.slidersList"></block-slider></el-row>
    <!-- 贡献者 -->
    <el-row class="row-bg text-center">
      <el-col :span="24/item.lineSum" v-for="item of graphicContributor">
        <graphic-box
          class="grid-content"
          :picWidth="item.picWidth"
          :picHeight="item.picHeight"
          :graphicList="item.graphicList"
          :horizontalStyle="item.horizontalStyle"></graphic-box></el-col></el-row></div>
</template>

<script>
  import GraphicBox from '../components/GraphicBox'
  import BlockSlider from '../components/BlockSlider'

  export default {
    created: function () {
      // Fill graphic's data
      Object.keys(this.graphicData).map((o_key) => {
        let _thisModule = this.graphicData[o_key]
        let _catalog    = _thisModule['catalog']
        let _index      = _thisModule['picIndex']
        let _contentArr = _thisModule['graphicList']
        let _newModule  = {}
        this[o_key]     = []

        Object.keys(_thisModule).map((key) => 
          (key !== 'graphicList') && (_newModule[key] = _thisModule[key]))
        _contentArr.map((item) => {
          item['picSrc'] = require(`assets-images/${_catalog}ico-${_index++}.jpg`)
          this[o_key].push(Object.assign({graphicList: item}, _newModule))
        })
      })

      // Fill slider's data
      Object.keys(this.slidersData).map((o_key) => {
        let _thisModule = this.slidersData[o_key] 
        let _length     = _thisModule['total']
        let _catalog    = _thisModule['catalog']
        let _index      = _thisModule['picIndex']
        let _dataList   = []

        Array.from({length: _length}).forEach(function () {
          let _listItem = _thisModule['slidersList'][arguments[1]] || {}
          _dataList.push(Object.assign({
            sliderPicSrc: require(`assets-images/${_catalog}ico-${_index++}.jpg`)
          }, _listItem))
        })
        _thisModule['slidersList'] = _dataList
        this[o_key] = _thisModule
      })
    },
    components: { 
      GraphicBox,
      BlockSlider
    },
    data () {
      return {
        graphicData: {
          graphicHomeskill: {
            total: 8,             // 总数
            lineSum: 4,           // 一行数量
            picWidth: 117,        // 图宽
            picHeight: 117,       // 图高
            picIndex: 1,          // 图名字编号
            catalog: 'fixed/',    // 图相对文件夹
            styleVerOrHor: false, // 横竖样式
            graphicList: [        // 图文内容
              {introContent: 'HTML5'},
              {introContent: 'CSS3'},
              {introContent: 'JavaScript'},
              {introContent: 'Databases'},
              {introContent: 'Git & GitHub'},
              {introContent: 'Node.js'},
              {introContent: 'React.js'},
              {introContent: 'D3.js'}
            ]
          },
          graphicVision: {
            total: 3,
            lineSum: 3,
            picWidth: 180,
            picHeight: 180,
            picIndex: 9,
            catalog: 'fixed/',
            graphicList: [
              {introContent: '1234'},
              {introContent: '5678'},
              {introContent: 'gbgd'}
            ]
          },
          graphicContributor: {
            total: 4,
            lineSum: 2,
            picWidth: 80,
            picHeight: 80,
            picIndex: 1,
            catalog: 'fixed/',
            introWidth: 80,
            introHeight: 80,
            horizontalStyle: true,
            graphicList: [
              {introContent: '名字 26 May, 2017'},
              {introContent: '名字 26 May, 2017'},
              {introContent: '名字 26 May, 2017'},
              {introContent: '名字 26 May, 2017'}
            ]
          }
        },
        slidersData: {
          slidersActivity: {
            total: 8,           // 总数
            wrapperWidth: 400,  // 包裹层宽
            wrapperHeight: 160, // 包裹层高
            sliderWidth: 150,   // 轮播item宽
            sliderHeight: 150,  // 轮播item高
            sliderGap: 5,       // 轮播item内填充
            picIndex: 1,        // 轮播图名字编号
            catalog: 'fixed/',  // 轮播图相对文件夹
            slidersList: [      // 轮播文字或图片
              {sliderContent: '123'},
              {sliderContent: '123'}
            ],
          },
        }
      }
    }
  }
</script>

<style>
  .text-center {
    text-align: center;
  }
</style>
