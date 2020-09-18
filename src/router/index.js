import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'
import blog from '../views/blog.vue'
import resume from '../views/resume.vue'
import search from '../views/search.vue'
import contact from '../views/contact.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: index
  },
  // {
  //   path: '/resume',
  //   name: 'resume',
  //   // route level code-splitting
  //   // this generates a separate chunk (resume.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "resume" */ '../views/resume.vue')
  // },
  {
    path: '/blog',
    name: 'blog',
    component: blog
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
