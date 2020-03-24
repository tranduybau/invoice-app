<template>
  <div class="page-full-screen">
    <div>DETAIL</div>
    <div class="bg-white py-16 px-8 shadow max-w-2xl mx-auto text-xs">
      <!-- invoice-head -->
      <div
        class="flex items-center justify-between border-double border-b-4 border-black pb-6 mb-6"
      >
        <div>
          <h2 class="text-xl">
            Cty ABC
          </h2>
          <div>
            16 Ly Thuong Kiet
          </div>
          <div>
            Da Nang City
          </div>
          <div class="">
            <div>
              trdbau@gmail.com
            </div>
            <div>
              0905960575
            </div>
          </div>
        </div>
        <div>
          <img class="w-32 h-32 object-contain object-right" src="https://bit.ly/39PFOd3" alt="" />
        </div>
      </div>
      <!-- invoice-details -->
      <div class="flex flex-wrap pb-4">
        <h2 class="text-right font-bold text-xl mb-8 w-full">
          INVOICE
        </h2>
        <div class="w-1/2 flex">
          <b>Bill To</b>
          <div class="ml-3">
            <div>Tran Duy Bau</div>
            <div>16 Ly Thuong Kiet</div>
            <div>Da Nang City, 550000</div>
          </div>
        </div>
        <div class="w-1/2">
          <table class="ml-auto">
            <tbody>
              <tr>
                <td class="text-right pr-2"><b>Invoice no.</b></td>
                <td>123123123123</td>
              </tr>
              <tr>
                <td class="text-right pr-2"><b>Date</b></td>
                <td>23/03/2019</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- invoice-list-item -->
      <table class="table-auto w-full text-left mb-12">
        <thead>
          <tr class="font-bold bg-gray-200">
            <th class="border p-1 border-black w-5/12">Description</th>
            <th class="border p-1 border-black">Quantity</th>
            <th class="border p-1 border-black">Unit price</th>
            <th class="border p-1 border-black">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border p-1 border-black">Product Name</td>
            <td class="border p-1 border-black">1</td>
            <td class="border p-1 border-black">0</td>
            <td class="border p-1 border-black">0</td>
          </tr>
          <tr>
            <td class="border p-1 border-black">Product Name</td>
            <td class="border p-1 border-black">1</td>
            <td class="border p-1 border-black">0</td>
            <td class="border p-1 border-black">0</td>
          </tr>
          <tr>
            <td class="border p-1 border-black">Intro to JavaScript</td>
            <td class="border p-1 border-black">1</td>
            <td class="border p-1 border-black">1,280</td>
            <td class="border p-1 border-black">1,280</td>
          </tr>
          <tr>
            <td />
            <td />
            <td class="border-b border-black p-1 font-bold">Total</td>
            <td class="border-b border-black p-1">1</td>
          </tr>
          <tr>
            <td />
            <td />
            <td class="border-b border-black p-1 font-bold">Paid Amount</td>
            <td class="border-b border-black p-1">1</td>
          </tr>
          <tr>
            <td />
            <td />
            <td class="border-b border-black p-1 font-bold">Balance Due</td>
            <td class="border-b border-black p-1">1</td>
          </tr>
        </tbody>
      </table>
      <!-- note area -->
      <div>
        <div><i>Note:</i></div>
        <div>
          This is a note!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { isEmpty as _isEmpty } from 'lodash';

export default {
  name: 'DetailInvoice',
  async created() {
    const { id } = this.$route.params;
    const userId = id.slice(0, id.search('_'));

    if (_isEmpty(this.listInvoices)) {
      await this.getListInvoices({ userId });
    }

    await this.getDetailInvoice({ id });
  },
  computed: {
    ...mapState('invoice', ['listInvoices']),
  },
  methods: {
    ...mapActions('invoice', ['getDetailInvoice', 'getListInvoices']),
  },
};
</script>

<style lang="scss" scoped></style>
