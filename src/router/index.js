import Vue from 'vue'
import VueRouter from 'vue-router'
import resume from '../views/resume.vue'
import search from '../views/search.vue'
import contact from '../views/contact.vue'
import post from '../views/post.vue'
import NOTFOUND from '../views/NOTFOUND.vue'





Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: ()=> import(/* webpackChunkName: "index" */'../views/index.vue')
  },
  {
    path: '*',
    name: '404',
    component: NOTFOUND
  },
  {
    path: '/blog/:post',
    name: 'post',
    component: post
  },
  // {
  //   path: '/resume',
  //   name: 'resume',
  //   // route level code-splitting
  //   // this generates a separate chunk (resume.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "resume" */ '../views/resume.vue')
  // },
  {
    path: '/blog',
    name: 'blog',
    component: ()=> import('../views/blog.vue')
  },
  {
    path: '/resume',
    name: 'resume',
    component: resume
  },
  {
    path: '/search',
    name: 'search',
    component: search
  },
  {
    path: '/contact',
    name: 'contact',
    component: contact
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
