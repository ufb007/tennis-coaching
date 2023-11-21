<template>
  <!-- Menu Component for smaller screen size -->
  <SideMenu />
  <Header />
  <router-view/>
  <!-- Footer -->
</template>

<script setup>
  import SideMenu from '@/components/SideMenu.vue'
  import Header from '@/components/header/Header'
  import SvgIcon from 'vue3-icon'
  import { provide, ref } from 'vue'

  const sideMenuActivate = ref(false)

  provide('SvgIcon', SvgIcon)
  provide('sideMenuActive', sideMenuActivate)
  
</script>

<style>
</style>
