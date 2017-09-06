import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'components/recommend/recommend' // 推荐
import Singer from 'components/singer/singer' //  歌手
import Rank from 'components/rank/rank' // 排名
import Search from 'components/search/search' // 搜索

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      alias: '/tuiJina',
      name: '推荐',
      component: Recommend
    },
    {
      path: '/singer',
      alias: '/geShou',
      name: '歌手',
      component: Singer
    },
    {
      path: '/rank',
      alias: '/paiMing',
      name: '排名',
      component: Rank
    },
    {
      path: '/search',
      alias: '/souSuo',
      name: '搜索',
      component: Search
    }
  ]
})
