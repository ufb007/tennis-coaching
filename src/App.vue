<template>
  <!-- Menu Component for smaller screen size -->
  <Header />
  <router-view/>
  <!-- Footer -->
</template>

<script setup>
  import Header from '@/components/header/Header';
  import SvgIcon from 'vue3-icon';
  import { provide } from 'vue';

  provide('SvgIcon', SvgIcon)
</script>

<style>
</style>
