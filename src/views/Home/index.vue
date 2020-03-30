<template>
  <div class="page-full-screen">
    <div>HOME</div>
    <welcome v-if="!isAuthenticated" />
    <invoices v-else />
    <new-invoice />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import NewInvoice from '@/components/layout/NewInvoice';
import Invoices from './Invoices';
import Welcome from './Welcome';

export default {
  name: 'Home',
  components: {
    Invoices,
    Welcome,
    NewInvoice,
  },
  computed: {
    ...mapState('user', ['isAuthenticated']),
  },
};
</script>
