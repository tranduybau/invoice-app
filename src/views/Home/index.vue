<template>
  <div class="w-full h-full">
    <div class="text-xs text-gray-500">HOME</div>
    <welcome />
    <invoices />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Invoices from './ListInvoices';
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
  created() {
    console.log(this.isAuthenticated);
  },
};
</script>

<style></style>
