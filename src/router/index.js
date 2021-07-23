import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Software from '../views/Software.vue'
import Overview from '../views/Overview.vue'
import OverviewPremium from '../views/OverviewPremium.vue'
import OverviewPrivacyPolicy from '../views/OverviewPrivacyPolicy.vue'

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
    component: Overview
  },
  {
    path: '/overview/privacypolicy',
    name: 'OverviewPrivacyPolicy',
    component: OverviewPrivacyPolicy

  },
  {
    path: '/overview/premium',
    name: 'OverviewPremium',
    component: OverviewPremium

  },
  {
    path: '/software',
    name: 'Software',
    component: Software
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
