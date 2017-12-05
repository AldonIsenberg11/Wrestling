import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './layout/Home.vue'
import Teamview from './layout/teamManager/TeamLanding.vue'
import Events from './layout/eventsDirector/EventLanding.vue'
import Blog from './layout/blog/BlogLanding.vue'
import SignUp from './layout/SignUp.vue'
import NewMatch from './layout/eventsDirector/NewMatch.vue'
import NotFound from './layout/NotFound.vue'

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
    { path: '/new-match', component: NewMatch },
    { path: '*', component: NotFound }
  ]
})

export default router
