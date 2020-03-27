<template>
  <router-link
    to="/create-new-invoice"
    class="absolute bottom-0 right-0 mb-6 btn p-0 bg-transparent"
  >
    <AddBtn :size="36" title="Create a new invoice" class="add-btn" />
  </router-link>
</template>

<script>
import AddBtn from 'vue-material-design-icons/ClipboardPlus';

export default {
  name: 'NewInvoice',
  components: { AddBtn },
};
</script>

<style lang="scss" scoped>
.add-btn {
  @apply text-blue-500 duration-300;
  &:hover {
    @apply text-blue-700;
  }
}
</style>
