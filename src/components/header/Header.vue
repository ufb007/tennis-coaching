<template>
    <header>
        <nav class="top hidden md:flex justify-center px-5">
            <div class="w-page-width">
                <ul class="text-white text-xs flex justify-end">
                    <li><svg-icon :fa-icon="faPen" />Register</li>
                    <li><svg-icon :fa-icon="faUser" />Login</li>
                </ul>
            </div>
        </nav>
        <nav class="bottom py-5 px-5 md:py-10 flex justify-center">
            <div class="w-page-width flex justify-between items-center">
                <Logo />
                <Menu />
            </div>
        </nav>
    </header>
</template>

<script setup lang="ts">
    import { faUser, faPen } from '@fortawesome/free-solid-svg-icons'
    import { inject } from 'vue'
    import Logo from '@/components/header/Logo.vue'
    import Menu from '@/components/header/Menu.vue'

    const SvgIcon = inject('SvgIcon')
</script>

<style scoped>
    nav.top {
        @apply bg-primary py-[15px];
    }

    nav.top li {
        @apply flex justify-center items-center ml-5 cursor-pointer hover:text-primary-green duration-200;
    }

    nav.top li svg {
        @apply text-primary-green w-[13px] mr-3;
    }
</style>