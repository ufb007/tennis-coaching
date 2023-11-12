<template>
    <div>
        <ul class="hidden md:flex">
            <li class="ml-5 text-xs font-thin" :key="index" v-for="(item, index) in menu">
                <router-link :class="route.path === item.link ? 'text-black font-normal' : 'text-primary-gray'" :to="item.link">
                    {{ item.name.toUpperCase() }}
                    <svg-icon class="w-[10px] h-[10px] ml-2" :fa-icon="faChevronDown" />
                </router-link>
            </li>
        </ul>
        <burger-menu @click="sideMenuOpen()"></burger-menu>
    </div>
</template>

<script setup>
    import { faChevronDown, faBars } from '@fortawesome/free-solid-svg-icons'
    import { inject, computed, h } from 'vue';
    import { useRoute } from 'vue-router';
    import { useStore } from 'vuex';

    const SvgIcon = inject('SvgIcon');
    const route = useRoute()
    const store = useStore()

    const burgerMenu = () => h('div', { class: 'burger-menu' }, [
        h('div', { class: 'w-full h-[2px] bg-primary' }),
        h('div', { class: 'w-full h-[2px] bg-primary' }),
        h('div', { class: 'w-full h-[2px] bg-primary' })
    ]);

    const menu = computed(() => store.getters.getMenu)
    const sideMenuOpen = () => {
        console.log('open this please')
    }
</script>

<style scoped>
    ul li a {
        @apply flex justify-center items-center hover:text-black hover:font-normal duration-200
    }
    .burger-menu {
        @apply w-[30px] h-[20px] md:hidden flex flex-col justify-between;
    }
</style>