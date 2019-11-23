import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'App',
      component:()=>import("../App.vue"),
      
      children:[
        {
          path:'',
          component:()=>import("../page/index.vue")
        },
        {
          path:'my',
          component:()=>import("../page/mymusic.vue")
        },
        {
          path:'friend',
          component:()=>import("../page/friend.vue")
        },
        {
          path:'download',
          component:()=>import("../page/download.vue")
        },
      ]



    }
  ]
})
