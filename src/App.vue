<template>
  <div id="app">
    <navigation class="primary-color-bg white-color-ft text-center"></navigation>
    <transition name="slide">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import Navigation from './components/Navigation'

  export default {
    components: {
      Navigation
    }
  }
</script>

<style type="text/css">
  .slide-enter-active, .slide-leave-active {
    transition: all .2s
  }
  .slide-enter, .slide-leave-to {
    opacity: 0
  }
  ::-webkit-scrollbar {
      width: 0px;
      height: 1px;
  }
  ::-webkit-scrollbar-thumb {
      border-radius: 5px;
      -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      background: rgba(0, 0, 0, 0.2);
  }   
</style>