import Vue from 'vue'
import VueRouter from 'vue-router'
import Buefy from 'buefy'
import Home from '../views/Home.vue'
import 'buefy/dist/buefy.css'

Vue.use(VueRouter)
Vue.use(Buefy)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
    },
    {
      path: '/register',
      name: 'SignUp',
      component: () => import(/* webpackChunkName: "SignUp" */ '../views/SignUp.vue')
    },
    {
      path: '/create-api',
      name: 'CreateAPI',
      component: () => import(/* webpackChunkName: "CreateAPI" */ '../views/CreateAPI.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
    },
    {
      path: '/view-api',
      name: 'ViewAPI',
      component: () => import(/* webpackChunkName: "ViewAPI" */ '../views/ViewAPI.vue')
    },
    {
      path: '/view-projects',
      name: 'ViewProjects',
      component: () => import(/* webpackChunkName: "ViewProjects" */ '../views/ViewProjects.vue')
    },
    {
      path: '/create-project',
      name: 'Create-Project',
      component: () => import(/* webpackChunkName: "CreateProject" */ '../views/CreateProject.vue')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
