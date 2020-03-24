<template>
  <div class="page-full-screen">
    <div>HOME</div>
    <welcome v-if="!isAuthenticated" />
    <invoices v-else />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Invoices from './Invoices';
import Welcome from './Welcome';

export default {
  name: 'Home',
  components: {
    Invoices,
    Welcome,
  },
  computed: {
    ...mapState('user', ['isAuthenticated']),
  },
};
</script>
