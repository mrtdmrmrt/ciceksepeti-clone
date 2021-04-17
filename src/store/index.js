import Vue from 'vue';
import Vuex from 'vuex';
import { productModules } from './modules';

Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    product: productModules,
  },
  strict: process.env.NODE_ENV !== 'production',
});

export default store;
