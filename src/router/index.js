import Vue from 'vue'
import VueRouter from 'vue-router'
import { Trans } from '@/lang/Translation.js'

import Home from '../views/home/Home.vue'
import Login from '../views/account/Login.vue'
import Register from '../views/account/Register.vue'
import MyAccount from '../views/account/MyAccount.vue'
import PasswordRecovery from '../views/account/PasswordRecovery.vue'
import OrderHistory from '../views/account/OrderHistory.vue'
import OrderFollow from '../views/account/OrderFollow.vue'
import Addresses from '../views/account/Addresses.vue'
import Address from '../views/account/Address.vue'
import Advisor from '../views/account/Advisor.vue'
import Comparator from '../views/account/Comparator.vue'
import Identity from '../views/account/Identity.vue'
import OffenePosten from '../views/account/OffenePosten.vue'
import Rank from '../views/account/Rank.vue'
import Wishlist from '../views/account/Wishlist.vue'

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
import Cart from '../views/products/Cart.vue'

import Order from '../views/order/Order.vue'

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
        name: 'my-account',
        component: MyAccount
      },
      {
        path: 'password-recovery',
        name: 'password-recovery',
        component: PasswordRecovery
      },
      {
        path: 'order-history',
        name: 'order-history',
        component: OrderHistory
      },
      {
        path: 'order-follow',
        name: 'order-follow',
        component: OrderFollow
      },
      {
        path: 'addresses',
        name: 'addresses',
        component: Addresses
      },
      {
        path: 'address',
        name: 'address',
        component: Address
      },
      {
        path: 'advisor',
        name: 'advisor',
        component: Advisor
      },
      {
        path: 'comparator',
        name: 'comparator',
        component: Comparator
      },
      {
        path: 'identity',
        name: 'identity',
        component: Identity
      },
      {
        path: 'offene-posten',
        name: 'offene-posten',
        component: OffenePosten
      },
      {
        path: 'rank',
        name: 'rank',
        component: Rank
      },
      {
        path: 'wishlist',
        name: 'wishlist',
        component: Wishlist
      },
      {
        path: 'product/:id_product',
        name: 'product',
        component: Product
      },
      {
        path: 'cart',
        name: 'cart',
        component: Cart
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
      },
      {
        path: 'order',
        name: 'order',
        component: Order,
        meta: {
          layout: 'order'
        }
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
