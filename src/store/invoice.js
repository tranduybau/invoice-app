/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import lodash from '@/utils/lodash';
import firebase from 'firebase';

const invoice = {
  namespaced: true,
  state: {
    listInvoices: [],
    detailInvoice: {},
  },
  mutations: {
    GET_LIST_INVOICES: (_state, listInvoices) => {
      _state.listInvoices = listInvoices;
    },
    GET_DETAIL_INVOICE: (_state, detailInvoice) => {
      _state.detailInvoice = detailInvoice;
    },
    CLEAR_DETAIL_INVOICE: (_state) => {
      _state.detailInvoice = {};
    },
  },
  actions: {
    async getListInvoices({ commit }, params) {
      const db = firebase.firestore();
      const { uid, startAt } = params;
      const arrayList = [];

      commit('utils/SET_LOADING', true, { root: true });

      db.collection('invoice')
        .where('uid', '==', uid)
        .orderBy('dateCreated', 'desc')
        // .startAt(startAt)
        // .limit(10)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            arrayList.push(doc.data());
          });
          commit('GET_LIST_INVOICES', arrayList);
        })
        .catch(() => {
          commit('utils/SET_ERROR', 'Server Error!', { root: true });
        })
        .then(() => {
          setTimeout(() => {
            commit('utils/SET_LOADING', false, { root: true });
            commit('utils/SET_ERROR', '', { root: true });
          }, 0);
        });
    },
    async getDetailInvoice({ commit, state }, params) {
      commit('SET_LOADING', true);
      const detailInvoice = state.listInvoices.find((item) => item.id === params.id);
      if (!lodash.isEmpty(detailInvoice)) commit('GET_DETAIL_INVOICE', detailInvoice);
      else commit('ERROR_ON_GET_DATA', 'There is no invoice with that id');
      setTimeout(() => {
        commit('SET_LOADING', false);
        commit('RESET_ERROR_MESSAGE');
      }, 0);
    },
  },
};

export default invoice;
