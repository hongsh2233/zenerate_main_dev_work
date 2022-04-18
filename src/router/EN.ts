import type { RouteRecordRaw } from 'vue-router'
import ENLayout from '/Layouts/ENLayout.vue'

import AboutView from '/Views/EN/AboutView.vue'
import CaseStudiesView from '/Views/EN/CaseStudiesView.vue'
import CareerView from '/Views/EN/CareerView.vue'
import CareerContent from '/src/components/EN/CareerContent.vue'
import ContactView from '/Views/EN/ContactView.vue'
import LandingView from '/Views/EN/LandingView.vue'
import ServiceView from '/Views/EN/ServiceView.vue'
import TermsAndConditionsView from '/Views/EN/TermsAndConditionsView.vue'
import PrivacyPolicyView from '/Views/EN/PrivacyPolicyView.vue'
import SignUp from '/Views/EN/SignUpView.vue'
import HowToUseView from '/Views/EN/HowToUseView.vue'
import OverviewView from '/Views/EN/OverviewView.vue'
import FAQView from '/Views/EN/FAQView.vue'
import PricingView from '/Views/EN/PricingView.vue'
import DemoSignUpView from '/Views/EN/DemoSignUpView.vue'

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
      component: OverviewView,
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
      component: HowToUseView,
    },
    {
      path: '/pricing',
      name: 'en-pricing',
      component: PricingView,
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
      path: '/faq',
      name: 'en-faq',
      component: FAQView,
      children: [],
    },
    {
      path: '/pre-launch-signup',
      name: 'SignUp',
      component: SignUp,
    },
    {
      path: '/demo-signup',
      name: 'en-demo',
      component: DemoSignUpView,
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
