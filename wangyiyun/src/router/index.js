import Vue from 'vue'
import Router from 'vue-router'
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
          component:()=>import("../page/discover.vue"),
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

        {
          path:'discover',
          component:()=>import("../page/discover.vue"),
        },
         {
          path:'discover/playlist',
          component: ()=>import("../page/playlist.vue")
        },
        {
          path:'discover/album',
          component:()=>import('../page/album.vue')
        },
        {
          path:'discover/toplist',
          component:()=>import('../page/toplist.vue')
        },{
          path:'discover/artist',
          component:()=>import('../page/artist.vue'),
        },
        {
          path:'discover/djradio',
          component:()=>import('../page/djradio.vue'),
        }
        ,{
          path:'store/product',
          component:()=>import('../page/product.vue'),
        }
      ]
    }
  ]
})
