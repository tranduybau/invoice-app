<template>
  <div class="page-full-screen">
    <div>{{ pathOfUserInfo }}</div>
    <div class="bg-white py-16 px-8 shadow max-w-2xl mx-auto text-xs relative">
      <div
        class="flex items-center justify-between border-double border-b-4 border-black pb-6 mb-6"
      >
        <div class="w-1/2">
          <input type="text" class="text-xl" placeholder="Business Name" v-model="business.name" />
          <input type="text" placeholder="Street" />
          <input type="text" placeholder="City" />
          <input type="text" placeholder="Mail" />
          <input type="tel" placeholder="Phone" />
        </div>
        <div class="logo-wrapper" @click="importLogo">
          <input
            type="file"
            class="hidden"
            ref="logoInput"
            accept="image/x-png,image/gif,image/jpeg"
            @change="changeLogo"
          />
          <img
            :src="logo"
            alt=""
            class="w-32 h-32 object-contain object-right"
            :class="{ 'empty-img': !logo.length }"
          />
          <div class="overlay-wrapper">
            <div class="overlay-inner" />
            <image-plus class="relative" :size="40" />
          </div>
        </div>
      </div>
      <div class="flex flex-wrap pb-4">
        <input type="text" class="text-right font-bold text-xl mb-8 w-full" placeholder="INVOICE" />
        <div class="w-1/2 flex">
          <b class="whitespace-no-wrap">Bill To</b>
          <div class="ml-3">
            <input type="tel" placeholder="Client Name" />
            <input type="tel" placeholder="Client Address" />
            <input type="tel" placeholder="Client City" />
          </div>
        </div>
        <div class="w-1/2">
          <table class="ml-auto">
            <tbody>
              <tr>
                <td class="text-right pr-2"><b>Invoice no.</b></td>
                <input type="tel" placeholder="000000000" />
              </tr>
              <tr>
                <td class="text-right pr-2"><b>Date</b></td>
                <input type="tel" placeholder="3/14/2020" />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
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
          <form-invoice-item
            v-for="(item, index) in items"
            :item="item"
            :key="index"
            :locales="locales"
            :currency="currency"
          />
          <tr>
            <td></td>
            <td></td>
            <td class="border-b border-black p-1 font-bold">Total</td>
            <td class="border-b border-black p-1">$35.00</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td class="border-b border-black p-1 font-bold">Paid Amount</td>
            <td class="border-b border-black p-1">$2.00</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td class="border-b border-black p-1 font-bold">Balance Due</td>
            <td class="border-b border-black p-1">$33.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { get as _get } from 'lodash';
import ImagePlus from 'vue-material-design-icons/ImagePlus';
import FormInvoiceItem from './Item.vue';

// const item = {
//   id: '',
//   index: '',
//   description: '',
//   quantity: 0,
//   unitPrice: 0,
// };

export default {
  name: 'FormInvoice',
  data() {
    return {
      logo: '',
      id: '',
      business: {
        name: '',
        address: {
          city: '',
          street: '',
        },
        email: '',
        phone: '',
      },
      title: '',
      billTo: {
        isCurrentUser: true,
        newClient: {
          name: '',
          address: {
            city: '',
            street: '',
          },
          email: '',
          phone: '',
        },
      },
      invoiceNumber: '',
      dateCreated: '',
      items: [{}],
      payStatus: {
        done: false,
        paid: 0,
      },
      locales: 'es-US',
      currency: 'USD',
    };
  },
  components: {
    ImagePlus,
    FormInvoiceItem,
  },
  computed: {
    pathOfUserInfo() {
      const id = _get(this, '$route.params.id', false);
      return id ? 'EDIT' : 'NEW INVOICE';
    },
  },
  methods: {
    importLogo() {
      this.$refs.logoInput.click();
    },
    changeLogo(e) {
      const file = e.target.files[0];
      this.logo = URL.createObjectURL(file);
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  @apply outline-none  border-b border-transparent duration-300 w-full;

  &:hover,
  &:focus {
    @apply border-gray-500;
  }
}
.logo-wrapper {
  @apply text-transparent relative cursor-pointer duration-300;
  .overlay-wrapper {
    @apply absolute w-full h-full top-0 left-0 flex items-center justify-center;
  }
  .overlay-inner {
    @apply absolute w-full h-full top-0 left-0 opacity-25  duration-300;
  }
  &:hover {
    @apply text-white;
    .overlay-inner {
      @apply bg-black;
    }
  }
}
</style>
