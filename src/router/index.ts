import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import ModuleLayout from '/Layouts/ModuleLayout.vue'
import MainLayout from '/Layouts/MainLayout.vue'

import Service from '/Views/Main/Service.vue'
import Contact from '/Views/Main/Contact.vue'
import About from '/Views/Main/About.vue'
import News from '/Views/Main/News.vue'
import Company from '/Views/Main/Company.vue'
import Timeline from '/Views/Main/Timeline.vue'
import Team from '/Views/Main/Team.vue'
// import NewsList from "/Views/Admin/NewsList.vue"
// import NewsEdit from "/Views/Admin/NewsEdit.vue"

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'ModuleLayout',
    component: ModuleLayout,
    children: [],
  },
  {
    path: '/main',
    name: 'MainLayout',
    component: MainLayout,
    children: [
      {
        path: 'service',
        name: 'MainService',
        component: Service,
      },
      {
        path: 'contact',
        name: 'Contact',
        component: Contact,
      },
      {
        path: 'about',
        name: 'About',
        component: About,
      },
      {
        path: 'news',
        name: 'News',
        component: News,
      },
      {
        path: 'company',
        name: 'Company',
        component: Company,
      },
      {
        path: 'timeline',
        name: 'Timeline',
        component: Timeline,
      },
      {
        path: 'team',
        name: 'Team',
        component: Team,
      },
      // {
      //   path: "admin",
      //   name: "NewsList",
      //   component: NewsList
      // },
      // {
      //   path: "admin/edit/:id?",
      //   name: "NewsEdit",
      //   component: NewsEdit,
      //   props: true
      // }
    ],
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/',
    
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
