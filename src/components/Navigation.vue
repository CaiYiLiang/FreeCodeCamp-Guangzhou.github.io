<template>
    <el-row type="flex" class="row-bg nav-list-wrap" justify="center">
      <el-col :span="12">
        <ul class="nav-list">
          <li class="nav-item">
            <router-link to="/#about">关于FCC</router-link></li>
          <li class="nav-item">
            <router-link to="/share">干货分享</router-link></li>
          <li class="nav-item nav-logo-wrap">
            <router-link class="nav-logo" to="/"></router-link></li>
          <li class="nav-item">
            <router-link to="/wall">贡献者</router-link></li>
          <li class="nav-item">
            <router-link to="/#join">加入我们</router-link></li></ul></el-col></el-row>
</template>

<style lang="sass" scoped>
  .nav-list-wrap {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    width: 100%;
    box-shadow: 0 1px 6px rgba(0,0,0,.2);
  }
  .nav-item {
    display: inline-block;
    vertical-align: top;
    padding: .5em 1em;
  }
  .nav-logo-wrap {
    position: relative;
    width: 186px;
  }
  .nav-logo {
    position: absolute;
    top: 0;
    left: 50%;
    width: 186px;
    height: 58px;
    margin-left: -93px;
    background: url("../assets/images/fixed/nav-logo.jpg");
  }
</style>