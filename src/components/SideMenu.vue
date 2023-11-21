<template>
    <div>
        <div :class="`z-10 side-menu w-3/4 md:hidden flex flex-grow bg-primary text-primary-gray fixed top-0 left-[-75%] h-full ${sideMenuActivate}`">
            <svg-icon class="absolute top-3 right-3" @click="() => sideMenuActive = false" :fa-icon="faClose" />
            <ul>
                <li></li>
            </ul>
        </div>
        <div :class="`z-0 fixed w-full bg-black opacity-30 flex-grow h-full ${sideMenuActive ? 'flex' : 'hidden' }`" @click="() => sideMenuActive = false"></div>
    </div>
</template>

<script setup>
    import { inject, computed } from 'vue'
    import { faClose } from '@fortawesome/free-solid-svg-icons'
    import { useStore } from 'vuex';

    const SvgIcon = inject('SvgIcon')
    const sideMenuActive = inject('sideMenuActive')
    const store = useStore()

    const sideMenuActivate = computed(() => {
        if (sideMenuActive.value) {
            return 'animate-side-menu-open'
        }

        return 'animate-side-menu-close'
    })

    const menu = computed(() => store.getters.getMenu)
</script>

<style scoped>
</style>