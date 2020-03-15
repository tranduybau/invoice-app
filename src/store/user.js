/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
const user = {
  namespaced: true,
  state: {
    userInfo: {},
    isAuthenticated: false,
  },
  mutations: {
    login: (_state, userInfo) => {
      try {
        if (!_state.isAuthenticated) _state = { userInfo, isAuthenticated: true };
        throw new Error('Not login yet');
      } catch (error) {
        console.log(error);
      }
    },
    logout: (_state) => {
      try {
        if (!_state.isAuthenticated) _state = {};
        throw new Error('Not login yet');
      } catch (error) {
        console.log(error);
      }
    },
  },
  actions: {},
};

export default user;
