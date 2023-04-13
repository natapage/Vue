import { createStore } from 'vuex';
import { postModule } from './PostModule';

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    post: postModule,
  },
});
