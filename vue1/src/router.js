import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Page404 from '@/views/Page404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/vue11',
        name: 'Vue11',
        component: () => import(/* webpackChunkName: "vue11" */ '@/views/Vue11.vue')
      },
      {
        path: '/vue12',
        name: 'Vue12',
        component: () => import(/* webpackChunkName: "vue12" */ '@/views/Vue12.vue')
      },
      {
        path: '*',
        name: 'Page404',
        component: Page404
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
