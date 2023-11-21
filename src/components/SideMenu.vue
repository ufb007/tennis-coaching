<template>
    <div>
        <div :class="`z-10 side-menu w-3/4 md:hidden flex flex-grow bg-primary text-primary-gray fixed top-0 left-[-75%] h-full ${sideMenuActivate}`">
            <svg-icon class="absolute top-3 right-3" @click="() => sideMenuActive = false" :fa-icon="faClose" />
            <ul class="w-full mt-10">
                <li class="text-center py-3" :key="index" v-for="({name, link}, index) in menu">
                    <a :class="route.path === link ? 'text-white' : 'text-gray-400'" @click="goToLink(link)">{{ name }}</a>
                </li>
            </ul>
        </div>
        <div :class="`z-0 fixed w-full bg-black opacity-50 flex-grow h-full ${sideMenuActive ? 'flex' : 'hidden' }`" @click="() => sideMenuActive = false"></div>
    </div>
</template>

<script setup>
    import { inject, computed } from 'vue'
    import { faClose } from '@fortawesome/free-solid-svg-icons'
    import { useRoute, useRouter } from 'vue-router'
    import { useStore } from 'vuex'

    const SvgIcon = inject('SvgIcon')
    const sideMenuActive = inject('sideMenuActive')
    const store = useStore()
    const route = useRoute()
    const router = useRouter()

    const sideMenuActivate = computed(() => {
        if (sideMenuActive.value) {
            return 'animate-side-menu-open'
        }

        return 'animate-side-menu-close'
    })

    const menu = computed(() => store.getters.getMenu)

    const goToLink = (link) => {
        router.push(link)
        sideMenuActive.value = false
    }
</script>

<style scoped>
</style>