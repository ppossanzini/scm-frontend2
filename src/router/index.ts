import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home, 
    children:[{
      path:"/sub", 
      name: "sub", 
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }]
  },
  {
    path: '/raw', 
    name: 'Raw', 
    // props: true,
    component: ()=> import( /* webpackChunkName: "dati" */ "@/views/raw/raw.vue")
  },
  {
    path: '/chart', 
    name: 'Chart', 
    // props: true,
    component: ()=> import( /* webpackChunkName: "dati" */ "@/views/barChart/barChart.vue")
  },
  {
    path: '/table', 
    name: 'Table', 
    // props: true,
    component: ()=> import( /* webpackChunkName: "dati" */ "@/views/table/table.vue")
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
