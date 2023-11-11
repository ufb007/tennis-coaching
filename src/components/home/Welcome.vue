<template>
    <div class="flex justify-center mt-20">
        <div class="boxWrapper w-[1170px] relative overflow-hidden">
            <img class="float-left" src="/images/home/welcome/welcome_bg2.png" />
            <div class="box bg-primary text-white text-center py-20 px-10 w-1/2 absolute top-[50%] right-0 translate-y-[-50%]">
                <h2 class="text-[45px] font-semibold">{{ title }}</h2>
                <h4 class="uppercase font-thin text-primary-green text-[0.7em] tracking-[3px] pt-3 pb-5">{{ subtitle }}</h4>
                <p class="font-thin text-[14px]">{{ description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { computed } from '@vue/reactivity';
    import { useStore } from 'vuex';

    const store = useStore()

    const welcome = computed(() => store.getters.getWelcome)
    
    const { title, subtitle, description } = welcome.value
</script>

<style scoped>
</style>