<template>
    <div>
        <ul class="hidden md:flex">
            <li class="ml-5 text-xs" :key="index" v-for="({ name, link }, index) in menu">
                <router-link :class="route.path === link ? 'text-black' : 'text-gray-400'" :to="link">
                    {{ name.toUpperCase() }}
                    <!--<svg-icon class="w-[10px] h-[10px] ml-2" :fa-icon="faChevronDown" />-->
                </router-link>
            </li>
        </ul>
        <burger-menu @click="() => sideMenuActive = true"></burger-menu>
    </div>
</template>

<script setup lang="ts">
    import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
    import { inject, computed, h } from 'vue';
    import { useRoute } from 'vue-router';
    import { useStore } from 'vuex';
    import MenuType from '@/types/MenuType';

    const SvgIcon = inject('SvgIcon')
    const sideMenuActive = inject('sideMenuActive')
    const route = useRoute()
    const store = useStore()

    const burgerMenu = () => h('div', { class: 'burger-menu' }, [
        h('div', { class: 'w-full h-[2px] bg-primary' }),
        h('div', { class: 'w-full h-[2px] bg-primary' }),
        h('div', { class: 'w-full h-[2px] bg-primary' })
    ]);

    const menu = computed<MenuType[]>(() => store.getters.getMenu)
</script>

<style scoped>
    ul li a {
        @apply flex justify-center items-center hover:text-black duration-500
    }
    .burger-menu {
        @apply w-[30px] h-[20px] md:hidden flex flex-col justify-between;
    }
</style>