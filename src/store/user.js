/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import axios from 'axios';
import { get as _get, isEmpty as _isEmpty } from 'lodash';
import { setToken } from '@/utils/Auth.js';
import Vue from 'vue';

const user = {
  namespaced: true,
  state: {
    userInfo: {},
    isAuthenticated: false,
    errMess: '',
    isLoading: false,
  },
  mutations: {
    SET_LOADING: (_state, isLoading) => {
      // console.log('1', _state);
      // _state = { ..._state, isLoading };
      // console.log('2', _state);
      Vue.set(_state, 'isLoading', isLoading);
    },
    LOGIN: (_state, userInfo) => {
      setToken(userInfo.token);
      _state.isAuthenticated = true;
      _state.userInfo = userInfo;
    },
    LOGOUT: (_state) => {
      _state = { userInfo: {}, isAuthenticated: false };
    },
    ERROR_ON_LOGIN: (_state, params) => {
      const arrWrongInfo = Object.getOwnPropertyNames(params);
      const arrWrongInfoFormatted = arrWrongInfo.map((name) => name.charAt(0).toUpperCase() + name.slice(1));
      const wrongInfo = arrWrongInfoFormatted.join(' or ');
      const errMess = `${wrongInfo} is wrong!`;
      _state.errMess = errMess;
    },
    RESET_ERROR_MESSAGE: (_state) => {
      _state.errMess = '';
    },
  },
  actions: {
    async checkLogin({ commit }, params) {
      commit('SET_LOADING', true);
      const response = await axios.get('http://localhost:3000/users', { params });
      const userInfo = _get(response, 'data[0]', {});
      if (!_isEmpty(userInfo)) commit('LOGIN', userInfo);
      else commit('ERROR_ON_LOGIN', params);
      setTimeout(() => {
        commit('SET_LOADING', false);
        commit('RESET_ERROR_MESSAGE');
      }, 0);
    },
  },
};

export default user;
