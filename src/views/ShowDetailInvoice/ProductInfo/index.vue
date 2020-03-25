<template>
  <table class="table-auto w-full text-left">
    <thead>
      <tr class="font-bold bg-gray-200">
        <th class="border p-1 border-black w-5/12">Description</th>
        <th class="border p-1 border-black w-1/6">Quantity</th>
        <th class="border p-1 border-black w-1/6">Unit price</th>
        <th class="border p-1 border-black w-1/4">Amount</th>
      </tr>
    </thead>
    <tbody>
      <product-item
        v-for="(item, index) in products"
        :key="index"
        :description="item.description"
        :quantity="item.quantity"
        :unitPrice="item.unitPrice"
        :locales="item.locales"
        :currency="item.currency"
      />
      <tr>
        <td />
        <td />
        <td class="border-b border-black p-1 font-bold">Total</td>
        <td class="border-b border-black p-1">
          {{ globalFormatCurrency(totalBill, locales, currency) }}
        </td>
      </tr>
      <tr>
        <td />
        <td />
        <td class="border-b border-black p-1 font-bold">Paid Amount</td>
        <td class="border-b border-black p-1">
          {{ globalFormatCurrency(totalPaid, locales, currency) }}
        </td>
      </tr>
      <tr>
        <td />
        <td />
        <td class="border-b border-black p-1 font-bold">Balance Due</td>
        <td class="border-b border-black p-1">
          {{ globalFormatCurrency(payStatus.done ? 0 : totalBill - totalPaid, locales, currency) }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import ProductItem from './Item';

export default {
  name: 'ProductsInfo',
  components: {
    ProductItem,
  },
  props: {
    products: {
      type: Array,
      default: () => [],
    },
    payStatus: {
      type: Object,
      default() {
        return {
          done: false,
          paid: 0,
        };
      },
    },
    currency: {
      type: String,
      default: 'USD',
    },
    locales: {
      type: String,
      default: 'es-US',
    },
  },
  computed: {
    totalBill() {
      let totalBill = 0;
      // eslint-disable-next-line no-plusplus
      for (let index = 0; index < this.products.length; index++) {
        totalBill += this.products[index].quantity * this.products[index].unitPrice;
      }
      return totalBill;
    },
    totalPaid() {
      return this.payStatus.done ? this.totalBill : this.payStatus.paid;
    },
  },
};
</script>

<style></style>
