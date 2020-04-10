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
      </div>
      <button
        class="btn w-full"
        type="button"
        :disabled="!email.length || !password.length"
        @click="() => checkLogin({ email, password })"
      >
        Sign Up
      </button>
      <div class="border border-b border-gray-300 my-4" />
      <div class="text-center">
        <router-link class="hover:text-red-500" to="/forgot-password">
          Forgot Password?
        </router-link>
        <div>Or</div>
        <router-link class="hover:text-blue-500" to="/register">
          Login
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import ArrowLeft from 'vue-material-design-icons/ChevronLeft.vue';
// import firebase from 'firebase';

export default {
  name: 'Login',
  components: {
    ArrowLeft,
  },
  data() {
    return {
      email: '',
      password: '',
      redirect: this.$route.query ? this.$route.query.redirect : '/my-page',
    };
  },
  computed: {
    ...mapState('user', ['isAuthenticated', 'userInfo']),
    ...mapState('utils', ['isLoading']),
  },
  watch: {
    $route: {
      handler(route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true,
    },
    isAuthenticated(newVal) {
      if (newVal) {
        this.$router.push({ path: this.redirect });
      }
    },
  },
  created() {
    this.logout();
  },
  methods: {
    ...mapActions('user', ['checkLogin', 'logout']),
    async handleGoBack() {
      // const user = await firebase
      //   .auth()
      //   .signInWithEmailAndPassword('trdbau@gmail.com', 'bao123')
      //   .catch((error) => error);

      // console.log(user);
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
