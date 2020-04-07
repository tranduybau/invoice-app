<template>
  <div class="inline-flex justify-end h-full items-center">
    <div class="mr-3 cursor-pointer">
      <BellRing v-if="isHasNotify" />
      <Bell v-else />
    </div>
    <div class="relative h-full">
      <img src="@/assets/user.png" alt="" class="h-full relative" />

      <div class="absolute right-0 z-50" id="user-nav">
        <div>User</div>
      </div>
    </div>
  </div>
</template>

<script>
import Bell from 'vue-material-design-icons/BellOutline.vue';
import BellRing from 'vue-material-design-icons/BellRingOutline.vue';

export default {
  name: 'Logged',
  data() {
    return {
      isHasNotify: false,
    };
  },
  components: {
    Bell,
    BellRing,
  },
  methods: {
    logOut() {
      alert(1);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
