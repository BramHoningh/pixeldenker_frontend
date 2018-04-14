import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import AboutPage from '@/components/AboutPage'
import WorkPage from '@/components/WorkPage'
import ContactPage from '@/components/ContactPage'
import CaseDHKB from '@/components/cases/CaseDHKB'
import CaseDHKW from '@/components/cases/CaseDHKW'
import CaseSC from '@/components/cases/CaseSC'
import CaseDC from '@/components/cases/CaseDC'
import CaseSP from '@/components/cases/CaseSP'
import CaseSS from '@/components/cases/CaseSS'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/over-ons',
      name: 'AboutPage',
      component: AboutPage
    },
    {
      path: '/werk',
      name: 'WorkPage',
      component: WorkPage,
      children: [
        {
          path: 'dehuyskamer-business',
          component: CaseDHKB
        },
        {
          path: 'dehuyskamer-webapp',
          component: CaseDHKW
        },
        {
          path: 'steigerconfigurator',
          component: CaseSC
        },
        {
          path: 'digital-chefs',
          component: CaseDC
        },
        {
          path: 'spotter',
          component: CaseSP
        },
        {
          path: 'solvisoft',
          component: CaseSS
        }
      ]
    },
    {
      path: '/contact',
      name: 'ContactPage',
      component: ContactPage
    }
  ]
})
