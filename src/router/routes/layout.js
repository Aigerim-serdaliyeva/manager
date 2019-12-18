export const layout = [
  {
    path: '/',
    name: 'layout',
    component: () => import('../../components/LayoutDefault.vue'),
    children: [
      {
        path: '/main',
        name: 'main',
        component: () => import('../../components/main/Main.vue')
      },      
      {
        path: '/applications',
        name: 'applications',
        component: () => import('../../components/application/Applications.vue')
      },
      {
        path: '/directories',
        name: 'directories',
        component: () => import('../../components/directory/Directories.vue')
      },
      {
        path: '/management',
        name: 'management',
        component: () => import('../../components/management/Management.vue')
      }
    ]
  }
]