/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
import axios from 'axios';
import lodash from '@/utils/lodash';
import { setToken, removeToken } from '@/utils/Auth.js';
import { LOG_IN, LOG_OUT } from './constance.js';

const user = {
  namespaced: true,
  state: {
    userInfo: {},
    isAuthenticated: false,
  },
  mutations: {
    [LOG_IN]: (_state, userInfo) => {
      setToken(userInfo.token);
      _state.isAuthenticated = true;
      _state.userInfo = userInfo;
    },
    [LOG_OUT]: (_state) => {
      removeToken();
      _state.isAuthenticated = false;
      _state.userInfo = {};
    },
  },
  actions: {
    async checkLogin({ commit }, params) {
      commit('utils/SET_LOADING', true, { root: true });
      const response = await axios.get('http://localhost:3000/users', { params });
      const userInfo = lodash.get(response, 'data[0]', {});
      if (!lodash.isEmpty(userInfo)) commit('LOG_IN', userInfo);
      else commit('utils/SET_ERROR', 'Email or password is incorrect!', { root: true });
      setTimeout(() => {
        commit('utils/SET_LOADING', false, { root: true });
      }, 0);
    },
    async logout({ commit }) {
      commit('utils/SET_LOADING', true, { root: true });
      commit('LOG_OUT');
      setTimeout(() => {
        commit('utils/SET_LOADING', false, { root: true });
      }, 0);
    },
  },
};

export default user;
