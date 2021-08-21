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
  DocumentAddIcon,
  UserAddIcon,
  DownloadIcon,
  DocumentDownloadIcon,
  UploadIcon,
  TrashIcon,
  EyeIcon,
  PencilAltIcon,
  ArrowNarrowRightIcon,
  BookmarkIcon,
  BriefcaseIcon,
  HeartIcon,
  GlobeIcon,
  LocationMarkerIcon,
  TruckIcon,
  TagIcon,
  ThumbUpIcon,
  ThumbDownIcon,
  PlusIcon,
  PlusCircleIcon,
  PlusSmIcon,
  MoreIcon,
  LockClosedIcon,
  LockOpenIcon,
} from '@heroicons/vue/outline'
// Global components
import AppHeader from '@/components/layout/AppHeader'
import AppButton from '@/components/UI/buttons/AppButton'
import AppModalButton from '@/components/UI/buttons/AppModalButton'
import AppModal from '@/components/UI/modal/AppModal'
import AppBanner from '@/components/UI/banners/AppBanner'
import AppSimpleBanner from '@/components/UI/banners/AppSimpleBanner'
import AppLoader from '@/components/UI/AppLoader'
import AppTextInput from '@/components/form/AppTextInput'
import AppDrawer from '@/components/UI/drawer/AppDrawer'

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
app.component('app-modal-button', AppModalButton)
app.component('app-modal', AppModal)
app.component('app-banner', AppBanner)
app.component('app-simple-banner', AppSimpleBanner)
app.component('app-loader', AppLoader)
app.component('app-text-input', AppTextInput)
app.component('app-drawer', AppDrawer)

// App Icons
app.component('beaker-icon', BeakerIcon)
app.component('chart-pie-icon', ChartPieIcon)
app.component('view-grid-add-icon', ViewGridAddIcon)
app.component('shopping-bag-icon', ShoppingBagIcon)
app.component('gift-icon', GiftIcon)
app.component('user-group-icon', UserGroupIcon)
app.component('shield-exclamation-icon', ShieldExclamationIcon)
app.component('cog-icon', CogIcon)
app.component('shopping-cart-icon', ShoppingCartIcon)
app.component('document-add-icon', DocumentAddIcon)
app.component('user-add-icon', UserAddIcon)
app.component('download-icon', DownloadIcon)
app.component('document-download-icon', DocumentDownloadIcon)
app.component('upload-icon', UploadIcon)
app.component('trash-icon', TrashIcon)
app.component('eye-icon', EyeIcon)
app.component('pencil-alt-icon', PencilAltIcon)
app.component('arrow-narrow-right-icon', ArrowNarrowRightIcon)
app.component('bookmark-icon', BookmarkIcon)
app.component('briefcase-icon', BriefcaseIcon)
app.component('heart-icon', HeartIcon)
app.component('globe-icon', GlobeIcon)
app.component('location-marker-icon', LocationMarkerIcon)
app.component('truck-icon', TruckIcon)
app.component('tag-icon', TagIcon)
app.component('thumb-up-icon', ThumbUpIcon)
app.component('thumb-down-icon', ThumbDownIcon)
app.component('plus-icon', PlusIcon)
app.component('plus-sm-icon', PlusSmIcon)
app.component('plus-circle-icon', PlusCircleIcon)
app.component('more-icon', MoreIcon)
app.component('lock-open-icon', LockOpenIcon)
app.component('lock-closed-icon', LockClosedIcon)

app.mount('#app')
