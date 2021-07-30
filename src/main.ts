// import devtools from '@vue/devtools'

// devtools.connect()

import { createApp } from 'vue'
import i18n from '/Config/locales/i18n'
import App from './App.vue'
import Router from './router'
import Store from './store'

import '/Assets/scss/common.scss'
import '/Assets/scss/transitions.scss'
import '/Assets/scss/components.scss'
import '/Assets/scss/timeline.scss'
import '/Assets/scss/en.scss'
import 'sweetalert2/src/sweetalert2.scss'
import 'vue-slider-component/theme/default.css'
import 'vue3-carousel/dist/carousel.css'
import 'aos/dist/aos.css'

createApp(App).use(Router).use(i18n).use(Store.original).mount('#app')
