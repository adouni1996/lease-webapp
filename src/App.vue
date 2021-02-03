<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
// import { getmodule } from '@/api/getdata.js'
export default {
  name: 'App',
  data() {
    return {
      layout: 'layout-default'
    }
  },
  watch: {
    $route(to) {
      if (to.meta.layout) {
        this.layout = 'layout-tab'
      } else {
        this.layout = 'layout-default'
      }
    }
  },
  async mounted() {
    // const res = await getmodule()
    // console.log(res)
  }

}
</script>

<style lang='scss'>
@import '@/assets/style/reset.scss';
@import '@/assets/style/common.scss';
@import '@/assets/style/page/login.scss';
#app{
  margin: 0 auto;
  width: 500px;
}
</style>
