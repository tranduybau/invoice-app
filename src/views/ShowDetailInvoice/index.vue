<template>
  <div class="page-full-screen">
    <div>DETAIL</div>
    <div
      class="bg-white py-16 px-8 shadow max-w-2xl mx-auto text-xs"
      v-if="statusOfInvoice === 'success'"
    >
      <business-info :business="detailInvoice.business" :logo="detailInvoice.logo" />
      <!-- invoice-details -->
      <client-info
        :client="detailInvoice.billTo"
        :invoiceIndex="detailInvoice.invoiceNumber"
        :date="new Date(detailInvoice.dateCreated)"
      />
      <!-- invoice-list-item -->
      <product-info
        :products="detailInvoice.items"
        :payStatus="detailInvoice.payStatus"
        :currency="detailInvoice.currency"
        :locales="detailInvoice.locales"
      />
      <!-- note area -->
      <div v-if="detailInvoice.note" class="mt-12">
        <div><i>Note:</i></div>
        <div>
          {{ detailInvoice.note }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { isEmpty as _isEmpty } from 'lodash';
import BusinessInfo from './BusinessInfo';
import ClientInfo from './ClientInfo';
import ProductInfo from './ProductInfo';

export default {
  name: 'DetailInvoice',
  components: {
    BusinessInfo,
    ClientInfo,
    ProductInfo,
  },
  computed: {
    ...mapState('invoice', ['listInvoices', 'detailInvoice']),
    statusOfInvoice() {
      if (!_isEmpty(this.detailInvoice)) return 'success';
      return 'loading';
    },
  },
  async created() {
    const { id } = this.$route.params;
    const userId = id.slice(0, id.search('_'));

    if (_isEmpty(this.listInvoices)) {
      await this.getListInvoices({ userId });
    }

    await this.getDetailInvoice({ id });
  },
  methods: {
    ...mapActions('invoice', ['getDetailInvoice', 'getListInvoices']),
  },
};
</script>

<style lang="scss" scoped></style>
