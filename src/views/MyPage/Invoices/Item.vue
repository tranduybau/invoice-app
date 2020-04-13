<template>
  <tr class="duration-300 hover:bg-gray-100">
    <td class="border-r border-white w-12 text-center">{{ index + 1 }}</td>
    <td class="border-r border-white">{{ invoice.title }}</td>
    <td class="border-r border-white w-12 text-center">{{ getStatus }}</td>
    <td class="w-40">
      <div class="flex items-center justify-between">
        <router-link
          :to="`/detail/${this.invoice.invoiceNumber}`"
          class="btn p-2 bg-green-500 hover:bg-green-700"
          title="Show detail invoice"
        >
          <Show :size="14" />
        </router-link>
        <router-link
          class="btn p-2 bg-yellow-500 hover:bg-yellow-700"
          title="Edit invoice"
          :to="`/edit/${this.invoice.invoiceNumber}`"
          :class="{ 'opacity-50 cursor-not-allowed': invoice.payStatus.done }"
          :event="invoice.payStatus.done ? '' : 'click'"
        >
          <Edit :size="14" />
        </router-link>
        <button class="btn p-2 bg-red-500 hover:bg-red-700" title="Delete invoice">
          <Delete :size="14" />
        </button>
        <router-link
          class="btn p-2"
          title="Send invoice"
          to="/"
          :class="{ 'opacity-50 cursor-not-allowed': invoice.payStatus.done }"
          :event="invoice.payStatus.done ? '' : 'click'"
          @click="mailTo"
        >
          <Send :size="14" />
        </router-link>
      </div>
    </td>
  </tr>
</template>

<script>
import Show from 'vue-material-design-icons/EyeOutline';
import Edit from 'vue-material-design-icons/FileEditOutline';
import Delete from 'vue-material-design-icons/DeleteOutline';
import Send from 'vue-material-design-icons/Send';

export default {
  name: 'InvoiceItem',
  props: {
    invoice: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  components: {
    Show,
    Edit,
    Delete,
    Send,
  },
  computed: {
    getStatus() {
      return this.invoice.payStatus.done ? 'Paid' : 'Pending';
    },
  },
  methods: {
    mailTo() {
      // on development!
    },
  },
};
</script>

<style lang="scss" scoped>
td {
  @apply px-4 py-2 text-gray-700;
}
</style>
