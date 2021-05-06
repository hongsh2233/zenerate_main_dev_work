import { createRouter, createWebHistory } from 'vue-router'

import ModuleLayout from '/Layouts/ModuleLayout.vue'

const routes: Array<any> = [
  {
    path: '/',
    name: 'ModuleLayout',
    component: ModuleLayout,
    children: [],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
