import type { RouteRecordRaw } from 'vue-router'
import ENLayout from '/Layouts/ENLayout.vue'

import AboutView from '/Views/EN/AboutView.vue'
import CaseStudiesView from '/Views/EN/CaseStudiesView.vue'
import CareerView from '/Views/EN/CareerView.vue'
import CareerContent from '/src/components/EN/CareerContent.vue'
import ContactView from '/Views/EN/ContactView.vue'
import LandingView from '/Views/EN/LandingView.vue'
import TermsAndConditionsView from '/Views/EN/TermsAndConditionsView.vue'
import PrivacyPolicyView from '/Views/EN/PrivacyPolicyView.vue'
import PrivacyPolicyNewView from '/Views/EN/PrivacyPolicyNewView.vue'
import PreSignUpView from '/Views/EN/PreSignUpView.vue'
import ED1ReportView from '/Views/EN/ED1ReportView.vue'
import SignUpView from '/Views/EN/SignUpView.vue'
import ZenerateView from '/Views/EN/ZenerateView.vue'
import AIConsultingVIew from '/Views/EN/AIConsultingView.vue'
import ModularView from '/Views/EN/ModularView.vue'
import DemoSignUpView from '/Views/EN/DemoSignUpView.vue'
import AppView from '/Views/EN/AppView.vue'

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
      path: '/app',
      name: 'en-app',
      component: AppView,
    },
    // /zenerate-app -> /app 리다이렉트
    {
      path: '/zenerate-app',
      redirect: '/app',
    },

    {
      path: '/ai-consulting',
      name: 'en-ai-consulting',
      component: AIConsultingVIew,
    },
    {
      path: '/modular',
      name: 'en-modular',
      component: ModularView,
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
    // {
    //   path: '/services',
    //   name: 'en-services',
    //   component: ServiceView,
    // },
    // {
    //   path: '/how-to-use',
    //   name: 'en-how-to-use',
    //   component: HowToUseView,
    // },
    // {
    //   path: '/pricing',
    //   name: 'en-pricing',
    //   component: PricingView,
    // },
    // {
    //   path: '/career',
    //   name: 'en-career',
    //   component: CareerView,
    //   children: [],
    // },
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
    // {
    //   path: '/faq',
    //   name: 'en-faq',
    //   component: FAQView,
    //   children: [],
    // },
    {
      path: '/beta',
      redirect: '/modular',
    },
    // {
    //   path: '/ed1',
    //   name: 'en-ed1-report',
    //   component: ED1ReportView,
    // },
    // {
    //   path: '/ed1-report',
    //   redirect: '/ed1',
    // },
    // {
    //   path: '/demo-signup',
    //   name: 'en-demo',
    //   component: DemoSignUpView,
    // },
    {
      path: '/signup',
      name: 'en-signup',
      component: SignUpView,
    },
    {
      path: '/terms-and-conditions',
      name: 'en-terms-and-conditions',
      component: TermsAndConditionsView,
    },
    {
      path: '/privacy-policy',
      name: 'en-privacy-policy',
      component: PrivacyPolicyNewView,
    },
    {
      path: '/privacy-policy-11292021',
      name: 'en-privacy-policy-11292021',
      component: PrivacyPolicyView,
    },
  ],
}

export default ENRoute
