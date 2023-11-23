<template>
  <div :class="`home overflow-y-hidden`">
    <!-- Weather Forecast Component -->
    <Slider />
    <Welcome />
    <MatchReviews />
    <!-- Photos Component -->
    <!-- Court review Component -->
    <!-- Coaching tips Component -->
    <!-- Club Coaches Component -->
    <Testimonials />
    <!-- Payment Membership Fees Component -->
  </div>
</template>

<script setup>
  import Slider from'@/components/home/Slider.vue';
  import Welcome from '@/components/home/Welcome.vue';
  import MatchReviews from '@/components/home/MatchReviews.vue';
  import Testimonials from '@/components/home/Testimonials.vue';

  import { inject } from 'vue';

  const sideMenuActive = inject('sideMenuActive')
</script>