<template>
  <div class="w-full max-w-xs mx-auto relative relative -mt-12">
    <div @click="handleGoBack()" class="go-back-btn">
      <ArrowLeft />
      <span>HOME</span>
    </div>
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Username</label>
        <input type="text" placeholder="Username" v-model="email" :disabled="isLoading" />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
        <input
          class="mb-3"
          type="password"
          placeholder="******"
          v-model="password"
          :disabled="isLoading"
          @keyup.enter="() => checkLogin({ email, password })"
        />
        <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
      </div>
      <div class="flex items-center justify-between">
        <button
          class="btn"
          type="button"
          :disabled="!email.length || !password.length"
          @click="() => checkLogin({ email, password })"
        >
          Sign In
        </button>
        <!-- <router-link
          class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          to="/forgot-password"
        >
          Forgot Password?
        </router-link>-->
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { getToken, setToken, removeToken } from '@/utils/Auth.js';
// import { isEmpty as _isEmpty } from 'lodash';
import ArrowLeft from 'vue-material-design-icons/ChevronLeft.vue';

export default {
  name: 'Login',
  components: {
    ArrowLeft,
  },
  data() {
    return {
      prevRoute: '/',
      email: '',
      password: '',
    };
  },
  computed: {
    ...mapState('user', ['isAuthenticated', 'userInfo', 'isLoading', 'errMess']),
  },
  watch: {
    isAuthenticated(value) {
      if (value) {
        setToken();
        this.$router.push('/');
      }
    },
    errMess(value) {
      if (value.length) {
        this.$notify({
          type: 'error',
          title: 'Login denied',
          text: value,
        });
        removeToken();
      }
    },
  },
  created() {
    if (this.isAuthenticated) {
      this.$notify({
        type: 'error',
        title: 'Action denied',
        text: "You've already been authenticated",
      });
      this.$router.push('/');
    } else if (getToken()) {
      const token = getToken();
      this.checkLogin({ token });
    }
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      // eslint-disable-next-line no-param-reassign
      vm.prevRoute = from;
    });
  },
  methods: {
    ...mapActions('user', ['checkLogin']),
    handleGoBack() {
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  @apply shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none;
  &:disabled {
    @apply bg-gray-300 cursor-not-allowed;
  }
}
.go-back-btn {
  @apply inline-flex items-center text-gray-500 absolute top-0 left-0 -mt-8;
  &:hover {
    @apply text-gray-700 cursor-pointer;
  }
}
</style>
