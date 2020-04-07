/* eslint-disable no-param-reassign */
import lodash from '@/utils/lodash';
import { getToken, removeToken } from '@/utils/Auth.js'; // get token from cookie
import router from '@/router';
import store from '@/store';

const handleInfoUser = async (to, from, next) => {
  const { userInfo } = store.getters;
  if (lodash.isEmpty(userInfo)) {
    try {
      await store.dispatch('user/checkLogin', { token: getToken() });
      next();
    } catch (error) {
      removeToken();
      next((vm) => {
        vm.errMess = 'token is wrong';
        return `/login?redirect=${to.fullPath}`;
      });
    }
  } else {
    next();
  }
};

router.beforeEach(async (to, from, next) => {
  const token = getToken();
  // next-line: check if route ("to" object) needs authenticated
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (token) {
      handleInfoUser(to, from, next);
    } else {
      next(`/login?redirect=${to.fullPath}`);
    }
  } else if (token) {
    handleInfoUser(to, from, next);
    switch (to.name) {
      case 'Login':
        next({ path: '/' });
        break;
      case 'Home':
        next({ path: '/my-page' });
        break;
      default:
        next();
        break;
    }
  } else {
    next();
  }
});

router.afterEach(() => {
});
