<template>
  <div>
    <!-- <router-link class="btn sign-up" to="/register">
      Sign Up
    </router-link> -->
    <router-link class="btn" to="/login">
      Sign In
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Unlog',
  methods: {},
};
</script>

<style lang="scss" scoped>
.sign-up {
  @apply bg-green-500 mr-4;
  &:hover {
    @apply bg-green-700;
  }
}
</style>
