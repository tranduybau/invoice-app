<template>
  <tr>
    <td class="border p-1 border-black">{{ description }}</td>
    <td class="border p-1 border-black">{{ quantity }}</td>
    <td class="border p-1 border-black">
      {{ globalFormatCurrency(unitPrice, locales, currency) }}
    </td>
    <td class="border p-1 border-black">
      {{ globalFormatCurrency(quantity * unitPrice, locales, currency) }}
    </td>
  </tr>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    description: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      default: 0,
    },
    unitPrice: {
      type: Number,
      default: 0,
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
