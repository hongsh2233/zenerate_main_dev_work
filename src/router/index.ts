import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { trackRouter } from 'vue-gtag-next'
import ModuleLayout from '/Layouts/ModuleLayout.vue'
import MainLayout from '/Layouts/MainLayout.vue'

import Service from '/Views/Main/Service.vue'
import Contact from '/Views/Main/Contact.vue'
import About from '/Views/Main/About.vue'
import News from '/Views/Main/News.vue'
import Company from '/Views/Main/Company.vue'
import Timeline from '/Views/Main/Timeline.vue'
import Team from '/Views/Main/Team.vue'
import Career from '/Views/Main/Career.vue'

import NewsList from '/Views/Admin/NewsList.vue'
import NewsEdit from '/Views/Admin/NewsEdit.vue'

import ENRoute from './EN'

const routes: RouteRecordRaw[] = [
  ENRoute,
  // {
  //   path: '/kr',
  //   name: 'ModuleLayout',
  //   component: ModuleLayout,
  //   children: [],
  // },
  // {
  //   path: '/kr/main',
  //   name: 'MainLayout',
  //   component: MainLayout,
  //   children: [
  //     {
  //       path: 'service',
  //       name: 'MainService',
  //       component: Service,
  //     },
  //     {
  //       path: 'contact',
  //       name: 'Contact',
  //       component: Contact,
  //     },
  //     {
  //       path: 'about',
  //       name: 'About',
  //       component: About,
  //     },
  //     {
  //       path: 'news',
  //       name: 'News',
  //       component: News,
  //     },
  //     {
  //       path: 'career',
  //       name: 'Career',
  //       component: Career,
  //       children: [
  //         {
  //           path: ':careerKey',
  //           name: 'CareerContent',
  //           component: Career,
  //           props: true,
  //         },
  //       ],
  //     },
  //     {
  //       path: 'company',
  //       name: 'Company',
  //       component: Company,
  //     },
  //     {
  //       path: 'timeline',
  //       name: 'Timeline',
  //       component: Timeline,
  //     },

  //     // {
  //     //   path: 'team',
  //     //   name: 'Team',
  //     //   component: Team,
  //     // },
  //     // {
  //     //   path: 'admin',
  //     //   name: 'NewsList',
  //     //   component: NewsList,
  //     // },
  //     // {
  //     //   path: 'admin/edit/:id?',
  //     //   name: 'NewsEdit',
  //     //   component: NewsEdit,
  //     //   props: true,
  //     // },
  //   ],
  // },
  {
    path: '/:catchAll(.*)',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // if (to.hash) {
    //   return { el: to.hash }
    // }
    // always scroll to top
    return { top: 0, left: 0 }
  },
})

trackRouter(router, {
  useScreenview: true,
})

router.beforeEach((to, from, next) => {
  if (to.name === 'en-zmaps') {
    window.open('https://zmaps.ai')
  } else {
    next()
  }
})

export default router
