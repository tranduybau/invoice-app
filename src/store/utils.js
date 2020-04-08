/* eslint-disable no-param-reassign */
import { SET_LOADING, SET_ERROR } from './constance.js';

const utils = {
  namespaced: true,
  state: {
    isLoading: false,
    errorMess: '',
  },
  mutations: {
    [SET_LOADING](_state, payload = false) {
      _state.isLoading = payload;
    },
    [SET_ERROR](_state, payload = '') {
      _state.errorMess = payload;
    },
  },
  actions: {},
};

export default utils;
