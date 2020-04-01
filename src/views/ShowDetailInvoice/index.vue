<template>
  <div class="page-full-screen">
    <div>DETAIL</div>
    <div
      class="bg-white py-16 px-8 shadow max-w-2xl mx-auto text-xs relative"
      v-if="statusOfFetchInvoice === 'success'"
      @mouseover="showEdit"
      @mouseleave="hideEdit"
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
        <div>
          <i><u>Note:</u></i>
        </div>
        <div>
          {{ detailInvoice.note }}
        </div>
      </div>
      <!-- Edit button -->
      <router-link
        class="absolute right-0 top-0 mt-4 mr-8 duration-300"
        :to="`/edit/${$route.params.id}`"
        :class="isHover && !detailInvoice.payStatus.done ? 'opacity-100' : 'opacity-0'"
      >
        <Edit />
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import lodash from '@/utils/lodash';
import Edit from 'vue-material-design-icons/FileEditOutline';
import BusinessInfo from './BusinessInfo';
import ClientInfo from './ClientInfo';
import ProductInfo from './ProductInfo';

export default {
  name: 'DetailInvoice',
  data() {
    return {
      isHover: false,
    };
  },
  components: {
    BusinessInfo,
    ClientInfo,
    ProductInfo,
    Edit,
  },
  computed: {
    ...mapState('invoice', ['listInvoices', 'detailInvoice']),
    statusOfFetchInvoice() {
      if (!lodash.isEmpty(this.detailInvoice)) return 'success';
      return 'loading';
    },
  },
  async created() {
    const { id } = this.$route.params;
    const userId = id.slice(0, id.search('_'));

    if (!userId) this.$router.push('/');

    if (lodash.isEmpty(this.listInvoices)) {
      await this.getListInvoices({ userId });
    }

    if (lodash.isEmpty(this.listInvoices)) this.$router.push('/');

    await this.getDetailInvoice({ id });
    if (lodash.isEmpty(this.detailInvoice)) this.$router.push('/');
  },
  methods: {
    ...mapActions('invoice', ['getDetailInvoice', 'getListInvoices']),
    showEdit() {
      this.isHover = true;
    },
    hideEdit() {
      this.isHover = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
