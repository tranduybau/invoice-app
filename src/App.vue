<template>
  <div id="app">
      <Nav>asd</Nav>
    <router-view/>
  </div>
</template>

<script>
import Nav from '@/components/layout/Nav.vue';

export default {
  name: 'App',
  components: {
    Nav,
  },
};
</script>
