import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/manage',
    component: () => import('../views/Manage.vue'),
    redirect: '/home',
    children: [
      {
        path: 'user', name: '首页', component: () => import('../views/User.vue')
      },
      {
        path: 'home', name: '系统管理/用户管理', component: () => import('../views/Home.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Manage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
