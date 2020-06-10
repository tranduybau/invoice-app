<template>
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <item v-for="(item, index) in listInvoices" :key="index" :index="index" :invoice="item" />
    </tbody>
  </table>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Item from './Item.vue';

export default {
  name: 'ListInvoices',
  data() {
    return {
      isEditInvoice: false,
    };
  },
  components: {
    Item,
  },
  async mounted() {
    const { uid } = this.userInfo;

    await this.getListInvoices({ uid });
  },
  computed: {
    ...mapState('user', ['userInfo']),
    ...mapState('invoice', ['listInvoices', 'total']),
  },
  methods: {
    ...mapActions('invoice', ['getListInvoices']),
  },
};
</script>

<style lang="scss" scoped>
table {
  @apply w-full bg-white shadow-lg;
  thead {
    @apply bg-blue-900 text-white;
    th {
      @apply px-4 py-2 font-normal;
    }
  }
}
</style>
