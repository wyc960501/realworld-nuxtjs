import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _21bd5e11 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _896634f4 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _a2efd8bc = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _05f883a2 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _4a58014a = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _15ee8454 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _267a7222 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _21bd5e11,
    children: [{
      path: "",
      component: _896634f4,
      name: "home"
    }, {
      path: "/login",
      component: _a2efd8bc,
      name: "login"
    }, {
      path: "/register",
      component: _a2efd8bc,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _05f883a2,
      name: "profile"
    }, {
      path: "/settings",
      component: _4a58014a,
      name: "settings"
    }, {
      path: "/editor",
      component: _15ee8454,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _267a7222,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
