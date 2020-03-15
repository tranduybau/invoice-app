/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import axios from 'axios';
import { get as _get, isEmpty as _isEmpty } from 'lodash';

const user = {
  namespaced: true,
  state: {
    userInfo: {},
    isAuthenticated: false,
    errMess: '',
  },
  mutations: {
    LOGIN: (_state, userInfo) => {
      console.log(123);
      _state.isAuthenticated = true;
      _state.userInfo = userInfo;
      console.log(_state);
    },
    LOGOUT: (_state) => {
      _state = { userInfo: {}, isAuthenticated: false };
    },
    ERROR_ON_LOGIN: (_state) => {
      console.log(123);
      const errMess = "Can't login now";
      _state = { ..._state, errMess };
      console.log(_state);
    },
    RESET_ERROR_MESSAGE: (_state) => {
      const errMess = 'hahahah';
      _state = { ..._state, errMess };
    },
  },
  actions: {
    async checkLogin({ commit }, params) {
      const response = await axios.get('http://localhost:3000/users', {
        params,
      });
      const userInfo = _get(response, 'data[0]', {});
      if (!_isEmpty(userInfo)) commit('LOGIN', userInfo);
      else commit('ERROR_ON_LOGIN');
    },
  },
};

export default user;
