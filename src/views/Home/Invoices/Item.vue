<template>
  <tr>
    <td>{{ showId }}</td>
    <td>{{ invoice.title }}</td>
    <td>{{ getStatus }}</td>
    <td>
      <div class="flex items-center">
        <router-link :to="`/detail/${this.invoice.id}`">
          <button class="btn bg-green-500 hover:bg-green-700">
            <Show :size="14" />
          </button>
        </router-link>
        <button class="btn bg-yellow-500 hover:bg-yellow-700">
          <Edit :size="14" />
        </button>
        <button class="btn bg-red-500 hover:bg-red-700">
          <Delete :size="14" />
        </button>
      </div>
    </td>
  </tr>
</template>

<script>
import Show from 'vue-material-design-icons/EyeOutline';
import Edit from 'vue-material-design-icons/FileEditOutline';
import Delete from 'vue-material-design-icons/DeleteOutline';

export default {
  name: 'InvoiceItem',
  props: {
    invoice: {
      type: Object,
      required: true,
    },
  },
  components: {
    Show,
    Edit,
    Delete,
  },
  computed: {
    showId() {
      const position = this.invoice.id.search('_');
      return this.invoice.id.slice(position + 1);
    },
    getStatus() {
      return this.invoice.isPaid ? 'Paid' : 'Pending';
    },
  },
};
</script>

<style lang="scss" scoped>
tr {
  @apply duration-300;
  &:hover {
    @apply bg-gray-100;
  }
  & > *:not(:nth-child(2)) {
    @apply w-12 text-center;
  }
  & > *:not(:last-child) {
    @apply border-r border-white;
  }
  & > *:last-child {
    @apply w-32;
    & > div {
      @apply flex justify-between;
    }
  }
  & td {
    @apply px-4 py-2 text-gray-700;
    button {
      @apply p-2;
    }
  }
}
</style>
