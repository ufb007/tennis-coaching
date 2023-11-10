<template>
    <div>
        <ul class="flex">
            <li class="ml-5 text-xs font-thin" :key="index" v-for="(item, index) in menu">
                <router-link class="flex justify-center items-center hover:text-black hover:font-normal duration-200" :class="route.path === item.link ? 'text-black font-normal' : 'text-primary-gray'" :to="item.link">{{ item.name.toUpperCase() }}<svg-icon class="w-[10px] h-[10px] ml-2" :fa-icon="faChevronDown" /></router-link>
            </li>
        </ul>
    </div>
</template>

<script setup>
    import { reactive } from 'vue';
    import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
    import { inject } from 'vue';
    import { useRoute } from 'vue-router';

    const SvgIcon = inject('SvgIcon');
    const route = useRoute()
    const menu = reactive([
        { name: 'Home', link: '/' },
        { name: 'Pages', link: '/pages' },
        { name: 'Membership', link: '/membership' },
        { name: 'Lessons', link: '/lessons' },
        { name: 'News', link: '/news' },
        { name: 'Contact', link: '/contact' }
    ])
</script>

<style scoped>
</style>