import Overview from '@/views/dashboard/Overview'
import Categories from '@/views/dashboard/Categories'
import SubCategories from '@/views/dashboard/SubCategories'
import Products from '@/views/dashboard/Products'
import Coupons from '@/views/dashboard/Coupons'
import Orders from '@/views/dashboard/Orders'

export default [
  {
    path: '',
    name: 'Overview',
    component: Overview,
  },
  {
    path: 'categories',
    name: 'Categories',
    component: Categories,
  },
  {
    path: 'subCategories',
    name: 'SubCategories',
    component: SubCategories,
  },
  {
    path: 'products',
    name: 'Products',
    component: Products,
  },
  {
    path: 'coupons',
    name: 'Coupons',
    component: Coupons,
  },
  {
    path: 'orders',
    name: 'Orders',
    component: Orders,
  },
]
