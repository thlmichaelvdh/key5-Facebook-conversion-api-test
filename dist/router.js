import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4eb6f57a = () => interopDefault(import('../src/pages/confirmation.vue' /* webpackChunkName: "pages/confirmation" */))
const _8a14de20 = () => interopDefault(import('../src/pages/shopping-cart.vue' /* webpackChunkName: "pages/shopping-cart" */))
const _c7742790 = () => interopDefault(import('../src/pages/car/kart.vue' /* webpackChunkName: "pages/car/kart" */))
const _ccb99bc4 = () => interopDefault(import('../src/pages/car/toyota.vue' /* webpackChunkName: "pages/car/toyota" */))
const _c2cc2be2 = () => interopDefault(import('../src/pages/car/valiant.vue' /* webpackChunkName: "pages/car/valiant" */))
const _36cc91dd = () => interopDefault(import('../src/pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/confirmation",
    component: _4eb6f57a,
    name: "confirmation"
  }, {
    path: "/shopping-cart",
    component: _8a14de20,
    name: "shopping-cart"
  }, {
    path: "/car/kart",
    component: _c7742790,
    name: "car-kart"
  }, {
    path: "/car/toyota",
    component: _ccb99bc4,
    name: "car-toyota"
  }, {
    path: "/car/valiant",
    component: _c2cc2be2,
    name: "car-valiant"
  }, {
    path: "/",
    component: _36cc91dd,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
