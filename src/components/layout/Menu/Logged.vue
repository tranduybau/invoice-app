<template>
  <div class="inline-flex justify-end h-full items-center">
    <div class="mr-3 cursor-pointer">
      <BellRing v-if="isHasNotify" />
      <Bell v-else />
    </div>
    <img src="@/assets/user.png" alt="" class="h-full" />
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
};
</script>
