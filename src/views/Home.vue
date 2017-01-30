<template>
  <div>
    <!-- header begin -->
    <div class="box" style="background-color: #ff5;height: 468px;padding: 200px; text-align: center">我是一个头部</div>
    <!-- header end -->

    <el-row type="flex" class="box row-bg" justify="center" id="about">
      <el-col :span="12">
        <!-- summary -->
        <h3 class="h1 summary-title text-center primary-color-ft">在fcc平台上，你可以收获</h3>
        <div class="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess.</div>
        <el-row type="flex" class="row-bg" justify="center">
          <el-col class="text-center">
            <div class="inli-blok"><div class="h2 strong primary-color-ft">400H</div><span>前端开发</span></div></el-col>
          <el-col class="text-center">
            <div class="inli-blok"><div class="h2 strong primary-color-ft">400H</div><span>数据可视化</span></div></el-col>
          <el-col class="text-center">
            <div class="inli-blok"><div class="h2 strong primary-color-ft">400H</div><span>后端开发</span></div></el-col>
          <el-col class="text-center">
            <div class="inli-blok"><div class="h2 strong primary-color-ft">800H</div><span>非盈利性项目</span></div></el-col>
          <el-col class="text-center">
            <div class="inli-blok"><div class="h2 strong primary-color-ft">80H</div><span>面试攻略</span></div></el-col></el-row>
        <!-- 技能 -->
        <h4 class="text-center">你可收获的技能</h4>
        <el-row class="row-bg text-center">
          <el-col :span="24/item.lineSum" v-for="item of graphicHomeskill">
            <graphic-box
              class="grid-content"
              :picWidth="item.picWidth"
              :picHeight="item.picHeight"
              :graphicList="item.graphicList"></graphic-box></el-col></el-row>
        <!-- 愿景 -->
        <h4 class="text-center">FreeCodeCamp的愿景</h4>
        <el-row class="row-bg text-center">
          <el-col :span="24/item.lineSum" v-for="item of graphicVision">
            <graphic-box
              class="grid-content"
              :picWidth="item.picWidth"
              :picHeight="item.picHeight"
              :graphicList="item.graphicList"></graphic-box></el-col></el-row></el-col></el-row>

    <el-row type="flex" class="box row-bg primary-color-bg white-color-ft" justify="center">
      <el-col :span="12">
        <!-- summary -->
        <h3 class="h1 summary-title text-center">我们的沙龙</h3>
        <el-row class="row-bg text-center">
          <el-col :span="24/item.lineSum" v-for="item of graphicCreator">
            <graphic-box
              class="grid-content"
              :picWidth="item.picWidth"
              :picHeight="item.picHeight"
              :introWidth="item.introWidth"
              :introHeight="item.introHeight"          
              :graphicList="item.graphicList"
              :horizontalStyle="item.horizontalStyle"></graphic-box></el-col></el-row>
        <div class="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess.</div>
        <!-- 社区图片 -->
        <el-row class="row-bg text-center">
          <el-col :span="24/item.lineSum" v-for="item of graphicCommunity">
            <graphic-box
              class="grid-content"
              :picWidth="item.picWidth"
              :picHeight="item.picHeight"
              :introWidth="item.introWidth"
              :introHeight="item.introHeight"          
              :graphicList="item.graphicList"></graphic-box></el-col></el-row>
        <!-- 照片轮播 -->
        <el-row class="row-bg text-center">
          <block-slider
            :wrapperWidth="slidersActivity.wrapperWidth"
            :wrapperHeight="slidersActivity.wrapperHeight"
            :sliderWidth="slidersActivity.sliderWidth"
            :sliderHeight="slidersActivity.sliderHeight"
            :sliderGap="slidersActivity.sliderGap"
            :slidersList="slidersActivity.slidersList"></block-slider></el-row></el-col></el-row>

    <el-row type="flex" class="box row-bg" justify="center" id="join">
      <el-col :span="12">
        <!-- summary -->
        <h3 class="h1 summary-title text-center primary-color-ft">加入我们</h3>
        <div class="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        mmodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess.
          <img src="images/ico-16.jpg" width="60%"></div>
        
      </el-col></el-row>

    <!-- footer begin -->
    <el-row type="flex" class="row-bg primary-color-bg white-color-ft" justify="center">
      <el-col :span="12">
        <!-- 贡献者 -->
        <el-row class="row-bg text-center">
          <el-col :span="24/item.lineSum" v-for="item of graphicContributor">
            <graphic-box
              class="grid-content"
              :picWidth="item.picWidth"
              :picHeight="item.picHeight"
              :graphicList="item.graphicList"
              :horizontalStyle="item.horizontalStyle"></graphic-box></el-col></el-row></el-col></el-row>
    <!-- footer end -->

  </div>
</template>

<script>
  import GraphicBox from '../components/GraphicBox'
  import BlockSlider from '../components/BlockSlider'
  import HomeData from '../assets/json/HomeData.json'

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
          try { item['picSrc'] = require(`assets-images/${_catalog}ico-${_index++}.jpg`) }
          catch (e) { item['picSrc'] = require(`assets-images/${_catalog}ico-${--_index}.png`) }
          this[o_key].push({graphicList: item, ..._newModule})
        })
      })

      // Fill slider's data
      Object.keys(this.slidersData).map((o_key) => {
        let _thisModule = this.slidersData[o_key] 
        let _length     = _thisModule['total']
        let _catalog    = _thisModule['catalog']
        let _index      = _thisModule['picIndex']
        let _dataList   = []

        Array.from({length: _length}).map((...arg) => {
          let _listItem = _thisModule['slidersList'][arg[1]] || {}
          _dataList.push({sliderPicSrc: require(`assets-images/${_catalog}ico-${_index++}.jpg`), ..._listItem})
        })
        _thisModule['slidersList'] = _dataList
        this[o_key] = _thisModule
      })
    },
    components: { 
      GraphicBox,
      BlockSlider
    },
    data: function () {
      return HomeData
    }
  }
</script>

<style lang="sass">
  * {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    box-sizing: border-box;
  }
  html, body {
    margin: 0
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
  .h1 {
    font-size: 1.8rem;
  }
  .h2 {
    font-size: 1.6rem;
  }
  .inli-blok {
    display: inline-block;
    vertical-align: top;
  }
  .text-center {
    text-align: center;
  }
  .strong {
    font-weight: bold;
  }
  .primary-color-bg {
    background-color: #00ac71;
  }
  .primary-color-ft {
    color: #00ac71;
  }
  .white-color-ft * {
    color: #fff;
  }

  .box {
    padding: 50px 0;
  }
  .summary-title {
    position: relative;
    padding-bottom: .6em;
    &:after {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      width: 260px;
      margin-left: -130px;
      border-bottom: 1px solid;
      opacity: .3;
    }
    &:before {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      width: 60px;
      margin-left: -30px;
      border: 1px solid;
      opacity: .6;
    }
  }
</style>