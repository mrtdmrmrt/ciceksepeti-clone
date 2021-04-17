import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';
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
      beforeEnter: (_to, _from, next) => {
        store.dispatch('product/removeShoppingProducts');

        next();
      },
    },
  ],
  mode: 'hash',
});
export default router;
