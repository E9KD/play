import Vue from 'vue'
import Router from 'vue-router'

import homepage from '../pages/home.vue'
import likepage from '../pages/like.vue'
import historypage from '../pages/history.vue'
import setpage from '../pages/set.vue'
// import playpage from '../pages/play.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/home',
      component:homepage
  },
  {
      path:'/like',
      component:likepage
  },
  {
      path:'/history',
      component:historypage
  },{
      path:'/set',
      component:setpage
  },
//   {
//       path:'/play',
//       component:playpage
//   },
  {
      path:'/',
      redirect:'/home'
  }
  ]
})
