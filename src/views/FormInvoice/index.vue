<template>
  <div class="page-full-screen">
    <div>DETAIL</div>
    <div>haha</div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { isEmpty as _isEmpty } from 'lodash';

export default {
  name: 'DetailInvoice',
  data() {
    return {
      isHover: false,
    };
  },
  components: {},
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
