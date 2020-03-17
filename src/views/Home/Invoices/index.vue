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
      <tr>
        <td>1</td>
        <td>Intro to CSS</td>
        <td>Pending</td>
        <td>
          <div class="flex items-center">
            <button class="btn bg-green-500 hover:bg-green-700">
              <Show :size="14" />
            </button>
            <button class="btn bg-yellow-500 hover:bg-yellow-700">
              <Edit :size="14" />
            </button>
            <button class="btn bg-red-500 hover:bg-red-700">
              <Delete :size="14" />
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import Show from 'vue-material-design-icons/EyeOutline';
import Edit from 'vue-material-design-icons/FileEditOutline';
import Delete from 'vue-material-design-icons/DeleteOutline';

export default {
  name: 'ListInvoices',
  data() {
    return {
      isEditInvoice: false,
    };
  },
  components: {
    Show,
    Edit,
    Delete,
  },
};
</script>

<style lang="scss" scoped>
table {
  @apply w-full bg-white mt-4 shadow-lg;
  thead {
    @apply bg-blue-900 text-white;
    th {
      @apply px-4 py-2 font-normal;
    }
  }
  tbody {
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
  }
}
</style>
