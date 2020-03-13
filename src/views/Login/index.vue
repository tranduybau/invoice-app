<template>
  <div class="w-full max-w-xs mx-auto relative relative -mt-12">
    <div @click="handleGoBack()" class="go-back-btn">
      <ArrowLeft />
      <span>BACK</span>
    </div>
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Username</label>
        <input id="username" type="text" placeholder="Username" />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
        <input class="mb-3" id="password" type="password" placeholder="******" />
        <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
      </div>
      <div class="flex items-center justify-between">
        <button class="btn" type="button" :click="handleLogin">Sign In</button>
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
import ArrowLeft from 'vue-material-design-icons/ChevronLeft.vue';

export default {
  name: 'Login',
  data() {
    return {
      prevRoute: '/',
    };
  },
  components: {
    ArrowLeft,
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      // eslint-disable-next-line no-param-reassign
      vm.prevRoute = from;
    });
  },
  methods: {
    handleGoBack() {
      this.$router.push(this.prevRoute.path);
    },
    handleLogin() {},
  },
};
</script>

<style lang="scss" scoped>
input {
  @apply shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none;
}
.go-back-btn {
  @apply inline-flex items-center text-gray-500 absolute top-0 left-0 transform -translate-y-full;
  &:hover {
    @apply text-gray-700 cursor-pointer;
  }
}
</style>
