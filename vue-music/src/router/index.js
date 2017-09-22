import Vue from 'vue'
import Router from 'vue-router'
import rank from '../components/rank/rank.vue'
import recommend from '../components/recommend/recommend.vue'
import search from '../components/search/search.vue'
import singer from '../components/singer/singer.vue'

Vue.use(Router)
// 路由配置
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
      // 利用router的redirect属性来重定向根目录指定路径
    },
    {
      path: '/rank',
      component: rank
    },
    {
      path: '/recommend',
      component: recommend
    },
    {
      path: '/search',
      component: search
    },
    {
      path: '/singer',
      component: singer
    }
  ]
})
