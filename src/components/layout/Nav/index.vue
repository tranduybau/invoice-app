<template>
  <nav :class="{ '-translate-y-full': isShowNav }">
    <div class="navbar-content container">
      <router-link to="/">
        <img alt="codersX-logo" src="@/assets/logo.png" class="h-6" />
      </router-link>
      <div class="flex-grow text-right h-full">
        <logged v-if="isLoggin" />
        <unlog v-else />
      </div>
    </div>
  </nav>
</template>

<script>
import Logged from './Menu/Logged.vue';
import Unlog from './Menu/Unlog.vue';

const arrayRoute = ['/login', '/register', '/forgot-password'];

export default {
  name: 'Nav',
  data() {
    return {
      isLoggin: false,
    };
  },
  components: {
    Logged,
    Unlog,
  },
  computed: {
    isShowNav() {
      return arrayRoute.includes(this.$route.path);
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  @apply w-full h-16 fixed left-0 top-0 p-4 bg-white transform duration-300;
}
.navbar-content {
  @apply h-full flex items-center justify-between mx-auto;
}
</style>
