<template>
  <div id="app">
    <Mheader></Mheader>
    <Tab></Tab>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
// 引入组件
import Mheader from './components/m-header/m-header'
import Tab from './components/tab/tab'

// 导出注册组件
export default {
  components: {
    Mheader,
    Tab
  }
}
</script>

<style  lang="stylus">
</style>
