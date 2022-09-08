import {createRouter, createWebHistory} from "vue-router"
import Home from '../views/Home.vue'
import Register from "../views/Register.vue";

import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
];

const router = createRouter({
  linkExactActiveClass: 'active',
  history: createWebHistory(),
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes
})

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    NProgress.start()

  }
  next()
});

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done()
});

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher // reset router
}

export default router;
