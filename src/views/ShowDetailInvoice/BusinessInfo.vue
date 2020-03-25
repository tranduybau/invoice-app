<template>
  <div class="flex items-center justify-between border-double border-b-4 border-black pb-6 mb-6">
    <div>
      <h2 class="text-xl">{{ business.name }}</h2>
      <div>{{ business.address.street }}</div>
      <div>{{ business.address.city }}</div>
      <div>{{ business.email }}</div>
      <div>{{ business.phone }}</div>
    </div>
    <div>
      <img
        class="w-32 h-32 object-contain object-right"
        :class="{ 'empty-img': !logo.length }"
        :src="logo"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BusinessInfo',
  props: {
    business: {
      type: Object,
      default: () => {},
    },
    logo: {
      type: String,
      default: '',
    },
  },
};
</script>

<style></style>
