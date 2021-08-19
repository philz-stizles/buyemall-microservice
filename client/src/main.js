import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  BeakerIcon,
  ChartPieIcon,
  ViewGridAddIcon,
  ShoppingBagIcon,
  GiftIcon,
  UserGroupIcon,
  ShieldExclamationIcon,
  CogIcon,
  ShoppingCartIcon,
} from '@heroicons/vue/outline'
// Global components
import AppHeader from '@/components/layout/AppHeader'
import AppButton from '@/components/AppButton'
import AppModal from '@/components/UI/AppModal'
import AppBanner from '@/components/UI/banners/AppBanner'
import AppSimpleBanner from '@/components/UI/banners/AppSimpleBanner'

// Tailwind Base styles
import './index.css'
// App-wide styles
import './assets/styles/global.css'

const app = createApp(App)

app.use(store)
app.use(router)

// Global component registration - These components are available anywhere
// in the app as custom components
app.component('app-header', AppHeader)
app.component('app-button', AppButton)
app.component('app-modal', AppModal)
app.component('app-banner', AppBanner)
app.component('app-simple-banner', AppSimpleBanner)

app.component('beaker-icon', BeakerIcon)
app.component('chart-pie-icon', ChartPieIcon)
app.component('view-grid-add-icon', ViewGridAddIcon)
app.component('shopping-bag-icon', ShoppingBagIcon)
app.component('gift-icon', GiftIcon)
app.component('user-group-icon', UserGroupIcon)
app.component('shield-exclamation-icon', ShieldExclamationIcon)
app.component('cog-icon', CogIcon)
app.component('shopping-cart-icon', ShoppingCartIcon)

app.mount('#app')
