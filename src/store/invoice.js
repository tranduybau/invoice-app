/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import axios from 'axios';
import { get as _get, isEmpty as _isEmpty } from 'lodash';

const invoice = {
  namespaced: true,
  state: {
    listInvoices: [],
    detailInvoice: {},
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
    GET_DETAIL_INVOICE: (_state, detailInvoice) => {
      _state.detailInvoice = detailInvoice;
    },
    ERROR_ON_GET_DATA: (_state, errMess) => {
      _state.errMess = errMess;
    },
  },
  actions: {
    async getListInvoices({ commit }, params) {
      commit('SET_LOADING', true);
      const response = await axios.get('http://localhost:3000/invoices', { params });
      const listInvoices = _get(response, 'data[0]', {});
      if (!_isEmpty(listInvoices)) commit('GET_LIST_INVOICES', response.data);
      else commit('ERROR_ON_GET_DATA', 'User has no invoice yet!');
      setTimeout(() => {
        commit('SET_LOADING', false);
        commit('RESET_ERROR_MESSAGE');
      }, 0);
    },
    async getDetailInvoice({ commit, state }, params) {
      commit('SET_LOADING', true);
      const detailInvoice = state.listInvoices.find((item) => item.id === params.id);
      if (!_isEmpty(detailInvoice)) commit('GET_DETAIL_INVOICE');
      else commit('ERROR_ON_GET_DATA', 'There is no invoice with that id');
      setTimeout(() => {
        commit('SET_LOADING', false);
        commit('RESET_ERROR_MESSAGE');
      }, 0);
    },
  },
};

export default invoice;
