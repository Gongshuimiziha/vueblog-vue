import Vue from 'vue'
import VueRouter from 'vue-router'
import blogs from '../views/Blogs'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    redirect:{name: 'blogs'}
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: blogs
  },
  {
    path: '/Login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/blog/add',
    name: 'Blogadd',
    meta:{
      requireAuth:true
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/BlogEdit.vue'),
  },
  {
    path: '/blog/:blogId',
    name: 'BlogDetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/BlogDetail.vue')
  },
  {
    path: '/blog/:blogId/eidt',
    name: 'BlogEdit',
    meta:{
      requireAuth:true
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/BlogEdit.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
