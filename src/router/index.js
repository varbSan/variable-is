import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/overview',
    name: 'Overview',
    component: () => import(/* webpackChunkName: "about" */ '../views/Overview.vue')
  },
  {
    path: '/overview/privacypolicy',
    name: 'OverviewPrivacyPolicy',
    component: () => import(/* webpackChunkName: "about" */ '../views/OverviewPrivacyPolicy.vue')

  },
  {
    path: '/overview/premium',
    name: 'OverviewPremium',
    component: () => import(/* webpackChunkName: "about" */ '../views/OverviewPremium.vue')

  },
  {
    path: '/software',
    name: 'Software',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Software.vue')
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
