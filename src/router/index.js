import Vue from 'vue'
import VueRouter from 'vue-router'
import { Trans } from '@/lang/Translation.js'
import store from '../store'

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
import RecommendProducts from '@/views/products/RecommendProducts'
import Order from '../views/order/Order.vue'
import Error404 from '../views/errors/404.vue'
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
        path: 'password-recovery',
        name: 'password-recovery',
        component: PasswordRecovery
      },
      {
        path: 'my-account',
        name: 'my-account',
        component: MyAccount,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'order-history',
        name: 'order-history',
        component: OrderHistory,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'order-follow',
        name: 'order-follow',
        component: OrderFollow,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'addresses',
        name: 'addresses',
        component: Addresses,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'address',
        name: 'address',
        component: Address,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'advisor',
        name: 'advisor',
        component: Advisor,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'comparator',
        name: 'comparator',
        component: Comparator,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'identity',
        name: 'identity',
        component: Identity,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'offene-posten',
        name: 'offene-posten',
        component: OffenePosten,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'rank',
        name: 'rank',
        component: Rank,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'wishlist',
        name: 'wishlist',
        component: Wishlist,
        meta: {
          requiresAuth: true
        }
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
      },
      {
        path: 'recommend-products',
        name: 'recommend-products',
        component: RecommendProducts
      },
      {
        path: 'content/:content_key',
        name: 'content',
        component: () => import('../views/ContentModule.vue')
      },
      {
        path: '*',
        name: '404',
        component: Error404
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

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLoggedIn) {
      next({ name: 'login' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
