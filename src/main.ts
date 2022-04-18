// import devtools from '@vue/devtools'
// devtools.connect()
import { createApp } from 'vue'
import { createMetaManager, defaultConfig } from 'vue-meta'
import VueGtag from 'vue-gtag-next'
import i18n from '/Config/locales/i18n'
import App from './App.vue'
import Router from './router'
import Store from './store'
import 'vue-slider-component/theme/default.css'
import 'vue3-carousel/dist/carousel.css'
import 'aos/dist/aos.css'
import 'sweetalert2/src/sweetalert2.scss'
import '/Assets/scss/common.scss'
import '/Assets/scss/transitions.scss'
import '/Assets/scss/components.scss'
import '/Assets/scss/timeline.scss'
import '/Assets/scss/en.scss'
import '/Utils/gtm'

createApp(App)
  .use(Router)
  .use(i18n)
  .use(Store.original)
  .use(VueGtag, {
    property: [
      { id: 'UA-212995971-1', default: true },
      { id: 'UA-214276888-1' },
    ],
  })
  .use(
    createMetaManager(false, {
      ...defaultConfig,
      meta: { tag: 'meta', nameless: true },
    })
  )
  .mount('#app')
