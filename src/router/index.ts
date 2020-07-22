import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';
import Layout from '@/layout/index.vue';

Vue.use(Router);

/*
  redirect:                      if set to 'noredirect', no redirect action will be trigger when clicking the breadcrumb
  meta: {
    title: 'title'               the name showed in subMenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon showed in the sidebar
    breadcrumb: false            if false, the item will be hidden in breadcrumb (default is true)
    hidden: true                 if true, this route will not show in the sidebar (default is false)
  }
*/

export const constantRoutes: RouteConfig[] = [
    {
        path: '/login',
        component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue'),
        meta: { hidden: true, title: '登录' }
    },
    {
        path: '/404',
        component: () => import(/* webpackChunkName: "404" */ '@/views/404.vue'),
        meta: { hidden: true }
    }
];

export const asyncRoutes: RouteConfig[] = [
    {
        path: '*',
        redirect: '/404',
        meta: { hidden: true }
    }
];

const createRouter = () => new Router({
    // mode: 'history',  // Disabled due to Github Pages doesn't support this, enable this if you need.
    scrollBehavior: (to, from, savedPosition) => {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    },
    base: process.env.BASE_URL,
    routes: constantRoutes.concat(asyncRoutes)
});

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter();
    (router as any).matcher = (newRouter as any).matcher; // reset router
}

export default router;
