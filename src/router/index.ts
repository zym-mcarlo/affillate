import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginModule from '../views/LoginModule.vue'
import SignIn from '../views/SignIn.vue'
import JoinUs from '../views/JoinUs.vue'
import Login from '../views/Login.vue'
import SubmitSuccess from '../views/SubmitSuccess.vue'

import ContentModule from '../views/ContentModule.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    name: 'loginModule',
    component: LoginModule,
    children: [
      {
        path: 'signIn',
        name: 'signIn',
        component: SignIn
      },
      {
        path: 'joinUs',
        name: 'joinUs',
        component: JoinUs
      },
      {
        path: 'login',
        name: 'login',
        component: Login
      },
      {
        path: 'submitSuccess',
        name: 'submitSuccess',
        component: SubmitSuccess
      }
    ]
  },
  {
    path: '/content',
    name: 'content',
    component: ContentModule,
    childrens: [
    ]
  },
  {
    path: '/',
    redirect: '/index/signIn'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
