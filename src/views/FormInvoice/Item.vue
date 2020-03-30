<template>
  <tr>
    <td class="border p-1 border-black">
      <input
        type="text"
        v-model="item.description"
        class="w-full outline-none"
        placeholder="Description of product"
      />
    </td>
    <td class="border p-1 border-black">
      <input
        type="number"
        v-model="item.quantity"
        class="w-full outline-none"
        placeholder="Quantity"
      />
    </td>
    <td class="border p-1 border-black">
      <input
        type="number"
        v-model="item.unitPrice"
        class="w-full outline-none"
        placeholder="Unit Price"
      />
    </td>
    <td class="border p-1 border-black">
      {{ globalFormatCurrency(item.quantity * item.unitPrice || 0, locales, currency) }}
    </td>
  </tr>
</template>

<script>
export default {
  name: 'FormInvoiceItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
    locales: {
      type: String,
      default: 'es-US',
    },
    currency: {
      type: String,
      default: 'USD',
    },
  },
};
</script>

<style></style>
