import Router from 'vue-router'
import {routes} from './routes'

export const router = new Router({
  linkActiveClass: 'active',
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [...routes]
});