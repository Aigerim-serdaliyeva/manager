import {layout} from './layout'

export const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../../components/Login.vue')
  },
  ...layout
]