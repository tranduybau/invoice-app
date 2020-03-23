/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import axios from 'axios';
import { get as _get, isEmpty as _isEmpty } from 'lodash';

const invoices = {
  namespaced: true,
  state: {
    listInvoices: [],
    total: 0,
    errMess: '',
    isLoading: false,
  },
  mutations: {
    SET_LOADING: (_state, isLoading) => {
      _state.isLoading = isLoading;
    },
    RESET_ERROR_MESSAGE: (_state) => {
      _state.errMess = '';
    },
    GET_LIST_INVOICES: (_state, listInvoices) => {
      _state.listInvoices = listInvoices['0'].invoicesUser;
      _state.total = listInvoices['0'].total;
    },
  },
  actions: {
    async getListInvoices({ commit }, params) {
      commit('SET_LOADING', true);
      const response = await axios.get('http://localhost:3000/invoices', { params });
      commit('GET_LIST_INVOICES', response.data);
      setTimeout(() => {
        commit('SET_LOADING', false);
        commit('RESET_ERROR_MESSAGE');
      }, 0);
    },
  },
};

export default invoices;
