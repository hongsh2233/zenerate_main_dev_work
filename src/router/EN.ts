import type { RouteRecordRaw } from 'vue-router'
import ENLayout from '/Layouts/ENLayout.vue'

import AboutView from '/Views/EN/AboutView.vue'
import CareerView from '/Views/EN/CareerView.vue'
import ContactView from '/Views/EN/ContactView.vue'
import LandingView from '/Views/EN/LandingView.vue'
import PricingView from '/Views/EN/PricingView.vue'
import ServiceView from '/Views/EN/ServiceView.vue'

const ENRoute: RouteRecordRaw = {
  path: '/',
  name: 'ENLayout',
  component: ENLayout,
  children: [
    {
      path: '/',
      name: 'en-landing',
      component: LandingView,
    },
    {
      path: '/about',
      name: 'en-about',
      component: AboutView,
    },
    {
      path: '/career',
      name: 'en-career',
      component: CareerView,
    },
    {
      path: '/contact',
      name: 'en-contact',
      component: ContactView,
    },
    {
      path: '/pricing',
      name: 'en-pricing',
      component: PricingView,
    },
    {
      path: '/services',
      name: 'en-services',
      component: ServiceView,
    },
  ],
}

export default ENRoute
