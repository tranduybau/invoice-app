<template>
  <div class="page-full-screen">
    <div>HOME</div>
    <invoices/>
    <new-invoice />
  </div>
</template>

<script>
import NewInvoice from '@/components/layout/NewInvoice';
import Invoices from './Invoices';

export default {
  name: 'Home',
  components: {
    Invoices,
    NewInvoice,
  },
};
</script>
