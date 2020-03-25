<template>
  <div class="flex flex-wrap pb-4">
    <h2 class="text-right font-bold text-xl mb-8 w-full">
      INVOICE
    </h2>
    <div class="w-1/2 flex">
      <b>Bill To</b>
      <div class="ml-3">
        <div>{{ pathOfUserInfo.name }}</div>
        <div>{{ pathOfUserInfo.address.street }}</div>
        <div>{{ pathOfUserInfo.address.city }}</div>
      </div>
    </div>
    <div class="w-1/2">
      <table class="ml-auto">
        <tbody>
          <tr>
            <td class="text-right pr-2"><b>Invoice no.</b></td>
            <td>{{ invoiceIndex }}</td>
          </tr>
          <tr>
            <td class="text-right pr-2"><b>Date</b></td>
            <td>{{ date.toLocaleDateString('en-US') }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ClientInfo',
  props: {
    client: {
      type: Object,
      default: () => {},
    },
    date: {
      type: Date,
      default: () => new Date(),
    },
    invoiceIndex: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState('user', ['userInfo']),
    pathOfUserInfo() {
      return this.client.isCurrentUser ? this.userInfo : this.client.newClient;
    },
  },
};
</script>

<style></style>
