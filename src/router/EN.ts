import type { RouteRecordRaw } from 'vue-router'
import ENLayout from '/Layouts/ENLayout.vue'

import AboutView from '/Views/EN/AboutView.vue'
import CaseStudiesView from '../views/EN/CaseStudiesView.vue'
import CareerView from '/Views/EN/CareerView.vue'
import CareerContent from '/src/components/EN/CareerContent.vue'
import ContactView from '/Views/EN/ContactView.vue'
import LandingView from '/Views/EN/LandingView.vue'
import ServiceView from '/Views/EN/ServiceView.vue'
import TermsAndConditionsView from '/Views/EN/TermsAndConditionsView.vue'
import PrivacyPolicyView from '/Views/EN/PrivacyPolicyView.vue'
import SignUp from '/Views/EN/SignUpView.vue'

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
      path: '/overview',
      name: 'en-overview',
      component: AboutView,
    },
    {
      path: '/about',
      name: 'en-about',
      component: AboutView,
    },
    {
      path: '/case-studies',
      name: 'en-case-studies',
      component: CaseStudiesView,
    },
    {
      path: '/services',
      name: 'en-services',
      component: ServiceView,
    },
    {
      path: '/how-to-use',
      name: 'en-how-to-use',
      component: ServiceView,
    },
    {
      path: '/pricing',
      name: 'en-pricing',
      component: ServiceView,
    },
    {
      path: '/career',
      name: 'en-career',
      component: CareerView,
      children: [],
    },
    {
      path: '/career/:id',
      name: 'en-detail',
      component: CareerContent,
      props: true,
    },
    {
      path: '/contact',
      name: 'en-contact',
      component: ContactView,
    },
    {
      path: '/pre-launch-signup',
      name: 'SignUp',
      component: SignUp,
    },
    {
      path: '/terms-and-conditions',
      name: 'en-terms-and-conditions',
      component: TermsAndConditionsView,
    },
    {
      path: '/privacy-policy',
      name: 'en-privacy-policy',
      component: PrivacyPolicyView,
    },
  ],
}

export default ENRoute
