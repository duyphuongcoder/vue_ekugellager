import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/home/Home.vue'
import Login from '../views/account/Login.vue'
import Register from '../views/account/Register.vue'
import MyAccount from '../views/account/MyAccount.vue'
import PasswordRecovery from '../views/account/PasswordRecovery.vue'

import Axiallager from '../views/products/Axiallager.vue'
import Clothes from '../views/products/Clothes.vue'
import GehaeuseEinheiten from '../views/products/GehaeuseEinheiten.vue'
import Gleitlager from '../views/products/Gleitlager.vue'
import Kegelrollenlager from '../views/products/Kegelrollenlager.vue'
import Keilriemen from '../views/products/Keilriemen.vue'
import KombinierteExialRadiallager from '../views/products/KombinierteExialRadiallager.vue'
import Laufrolle from '../views/products/Laufrolle.vue'
import Lineartechnik from '../views/products/Lineartechnik.vue'
import Men from '../views/products/Men.vue'
import Nadellager from '../views/products/Nadellager.vue'
import Rillenkugellager from '../views/products/Rillenkugellager.vue'
import SchraegkugellagerSpindellager from '../views/products/SchraegkugellagerSpindellager.vue'
import SpannlagerGehaeuselager from '../views/products/SpannlagerGehaeuselager.vue'
import Startseite from '../views/products/Startseite.vue'
import Women from '../views/products/Women.vue'
import Product from '../views/products/Product.vue'

import { Trans } from '@/lang/Translation.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/:lang',
    component: {
      template: '<router-view></router-view>'
    },
    beforeEnter: Trans.routeMiddleware,
    children: [
      {
        path: '',
        name: 'home',
        component: Home
      },
      {
        path: 'login',
        name: 'login',
        component: Login
      },
      {
        path: 'register',
        name: 'register',
        component: Register
      },
      {
        path: 'my-account',
        name: 'myaccount',
        component: MyAccount
      },
      {
        path: 'password-recovery',
        name: 'password-recovery',
        component: PasswordRecovery
      },
      {
        path: 'product',
        name: 'product',
        component: Product
      },
      {
        path: 'axiallager',
        name: 'axiallager',
        component: Axiallager
      },
      {
        path: 'clothes',
        name: 'clothes',
        component: Clothes
      },
      {
        path: 'gehaeuse-einheiten',
        name: 'gehaeuse-einheiten',
        component: GehaeuseEinheiten
      },
      {
        path: 'gleitlager',
        name: 'gleitlager',
        component: Gleitlager
      },
      {
        path: 'kegelrollenlager',
        name: 'kegelrollenlager',
        component: Kegelrollenlager
      },
      {
        path: 'keilriemen',
        name: 'keilriemen',
        component: Keilriemen
      },
      {
        path: 'kombinierte-exial-radiallager',
        name: 'kombinierte-exial-radiallager',
        component: KombinierteExialRadiallager
      },
      {
        path: 'laufrolle',
        name: 'laufrolle',
        component: Laufrolle
      },
      {
        path: 'lineartechnik',
        name: 'lineartechnik',
        component: Lineartechnik
      },
      {
        path: 'men',
        name: 'men',
        component: Men
      },
      {
        path: 'nadellager',
        name: 'nadellager',
        component: Nadellager
      },
      {
        path: 'rillenkugellager',
        name: 'rillenkugellager',
        component: Rillenkugellager
      },
      {
        path: 'schraegkugellager-spindellager',
        name: 'schraegkugellager-spindellager',
        component: SchraegkugellagerSpindellager
      },
      {
        path: 'spannlager-gehaeuselager',
        name: 'spannlager-gehaeuselager',
        component: SpannlagerGehaeuselager
      },
      {
        path: 'startseite',
        name: 'startseite',
        component: Startseite
      },
      {
        path: 'women',
        name: 'women',
        component: Women
      }
    ]
  },
  {
    path: '*',
    redirect (to) {
      return Trans.getUserSupportedLang()
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
