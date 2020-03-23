<template>
  <div id="app">
    <notifications />
    <Nav />
    <div class="container mx-auto flex-grow py-4 flex items-center">
      <router-view />
    </div>
  </div>
</template>

<script>
import { getToken } from '@/utils/Auth.js';
import { mapActions } from 'vuex';
import Nav from '@/components/layout/Nav';

export default {
  name: 'App',
  components: {
    Nav,
  },
  created() {
    const token = getToken();

    if (token && token !== 'undefined') {
      this.checkLogin({ token });
    }
  },
  methods: {
    ...mapActions('user', ['checkLogin']),
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

#app {
  @apply w-screen min-h-screen bg-gray-200 pt-16 flex;
}
</style>
