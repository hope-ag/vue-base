import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('/src/components/Home.vue'),
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
