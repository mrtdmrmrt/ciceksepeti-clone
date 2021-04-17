import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

//PAGES
import Home from '../views/Home.vue';
const router = new VueRouter({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home,
      name: '/',
    },
    {
      path: '/detail',
      component: () =>
        import(/* webpackChunkName: "FileDetail" */ '../views/Detail.vue'),
      name: 'detail',
    },
  ],
  mode: 'hash',
});
export default router;
