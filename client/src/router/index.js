import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import dashboardRoutes from './dashboard-routes'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () =>
      import(/* webpackChunkName: "signup" */ '../views/SignUp.vue'),
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/SignIn.vue'),
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/dashboard',
    name: 'DashboardHome',
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/dashboard'),
    children: [...dashboardRoutes],
  },
  {
    path: '/home',
    redirect: { name: 'Home' },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

// router.beforeEach((to, from, next) => {
//   const publicPages = ['/login', '/signUp', '/', '/about']
//   const authRequired = !publicPages.includes(to.path)
//   const loggedInUser = localStorage.getItem('loggedInUser')

//   // trying to access a restricted page + not logged in
//   // redirect to login page
//   if (authRequired && !loggedInUser) {
//     next('/login')
//   } else {
//     next()
//   }
// })

export default router
