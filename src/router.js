import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './layout/pages/Home.vue'
import Teamview from './layout/pages/Teamview.vue'
import Events from './layout/pages/EventsDirector/EventsDirectorLayout.vue'
import Blog from './layout/pages/Blog.vue'
import SignUp from './layout/pages/SignUp.vue'
import NotFound from './layout/pages/NotFound.vue'

// const Category = () => System.import('./theme/Category.vue')
// const Login = () => System.import('./theme/Login.vue')
// const NotFound = () => System.import('./theme/NotFound.vue')

// ^This will provide lazy loading for the import Category, Login, NotFound
// ^so it's only loaded when needed on the client's browser, useful when this list increases in size

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior: (to, from, savedPosition) => ({y: 0}),
  routes: [
    { path: '/', component: Home },
    { path: '/teamview', component: Teamview },
    { path: '/events', component: Events },
    { path: '/blog/', component: Blog },
    { path: '/sign-up', component: SignUp },
    { path: '*', component: NotFound }
  ]
})

export default router
