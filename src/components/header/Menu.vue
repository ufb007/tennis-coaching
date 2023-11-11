<template>
    <div>
        <ul class="hidden md:flex md:px-5">
            <li class="ml-5 text-xs font-thin" :key="index" v-for="(item, index) in menu">
                <router-link class="flex justify-center items-center hover:text-black hover:font-normal duration-200" :class="route.path === item.link ? 'text-black font-normal' : 'text-primary-gray'" :to="item.link">{{ item.name.toUpperCase() }}<svg-icon class="w-[10px] h-[10px] ml-2" :fa-icon="faChevronDown" /></router-link>
            </li>
        </ul>
    </div>
</template>

<script setup>
    import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
    import { inject, computed } from 'vue';
    import { useRoute } from 'vue-router';
    import { useStore } from 'vuex';

    const SvgIcon = inject('SvgIcon');
    const route = useRoute()
    const store = useStore()

    const menu = computed(() => store.getters.getMenu)
</script>

<style scoped>
</style>