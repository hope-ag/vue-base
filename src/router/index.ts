import nProgress from "nprogress"
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('/src/views/Home.vue'),
    
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('/src/views/about.vue')
  }
]

const _router = createRouter({
  history: createWebHistory(),
  routes,
})

_router.beforeEach((to, from) => {
  if (to.path !== from.path)
    nProgress.start()
})
_router.afterEach(() => { nProgress.done() })


export const router = _router