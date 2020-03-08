<template>
  <div class="w-full h-full">
    <div class="text-xs text-gray-500">HOME</div>
    <div>
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
                <Show :size="14" />
                <Edit :size="14" />
                <Delete :size="14" />
              </div>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on
              Design
            </td>
            <td>Paid</td>
            <td>
              <div class="flex items-center">
                <Show :size="14" />
                <Edit :size="14" />
                <Delete :size="14" />
              </div>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Intro to JavaScript</td>
            <td>Pending</td>
            <td>
              <div class="flex items-center">
                <Show :size="14" />
                <Edit :size="14" />
                <Delete :size="14" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Show from 'vue-material-design-icons/EyeOutline.vue';
import Edit from 'vue-material-design-icons/FileEditOutline.vue';
import Delete from 'vue-material-design-icons/DeleteOutline.vue';

export default {
  name: 'Home',
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
  th {
    @apply px-4 py-2 text-gray-500 font-normal;
  }
  tbody {
    tr {
      @apply duration-300;
      &:hover {
        @apply bg-blue-300;
      }
      & > *:not(:nth-child(2)) {
        @apply w-12 text-center;
      }
      & td {
        @apply px-4 py-2 text-gray-700;
      }
    }
  }
}
</style>
