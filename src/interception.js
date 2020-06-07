import lodash from '@/utils/lodash';
import router from '@/router';
import store from '@/store';
import Vue from 'vue';

const handleInfoUser = async (to, from, next) => {
  const { userInfo } = store.getters;

  if (lodash.isEmpty(userInfo)) {
    try {
      await store.dispatch('user/getInfoUser');
    } catch (error) {
      router.push(`/login?redirect=${to.fullPath}`);
      Vue.notify({
        type: 'error',
        title: 'Login denied',
        text: error,
      });
    }
  } else {
    next();
  }
};

router.beforeEach(async (to, from, next) => {
  const { userInfo } = store.getters;

  if (to.matched.some((record) => record.meta.requiresAuth) && lodash.isEmpty(userInfo)) {
    await handleInfoUser(to, from, next);
    next();
  } else if (!lodash.isEmpty(userInfo)) {
    switch (to.name) {
      case 'Login' || 'Register' || 'ResetPassword':
        next({ path: '/' });
        break;
      case 'Home':
        next({ path: '/my-page' });
        break;
      default:
        next();
        break;
    }
  } else next();
});

router.afterEach(() => {});
