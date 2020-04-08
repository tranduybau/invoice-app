<template>
  <nav :class="{ '-translate-y-full': isShowNav }">
    <div class="navbar-content container">
      <router-link to="/">
        <img alt="codersX-logo" src="@/assets/logo.png" class="h-6" />
      </router-link>
      <div class="flex-grow text-right h-full">
        <logged v-if="isAuthenticated" />
        <unlog v-else />
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex';
import Logged from './Menu/Logged.vue';
import Unlog from './Menu/Unlog.vue';

const arrayRoute = ['/login', '/register', '/forgot-password'];

export default {
  name: 'Nav',
  components: {
    Logged,
    Unlog,
  },
  computed: {
    isShowNav() {
      return arrayRoute.includes(this.$route.path);
    },
    ...mapState('user', ['isAuthenticated']),
  },
};
</script>

<style lang="scss" scoped>
nav {
  @apply w-full h-16 fixed left-0 top-0 p-4 bg-white transform duration-300 z-10;
}
.navbar-content {
  @apply h-full flex items-center justify-between mx-auto;
}
</style>
