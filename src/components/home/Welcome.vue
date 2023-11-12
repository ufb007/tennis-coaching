<template>
    <div class="flex justify-center mt-20">
        <div class="boxWrapper">
            <div class="box bg-primary text-white text-center py-20 mx-10 px-10 md:w-1/2">
                <h2 class="text-[45px] font-semibold">{{ title }}</h2>
                <h4 class="uppercase font-thin text-primary-green text-[0.6em] md:text-[0.7em] tracking-[3px] pt-3 pb-5">{{ subtitle }}</h4>
                <p class="font-thin leading-7 text-[12px] md:text-[13px]">{{ description }}</p>
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
    .boxWrapper {
        @apply 
            bg-[url("~@/assets/home/welcome_bg2.png")]
            md:w-page-width 
            object-cover 
            py-10 flex 
            justify-center 
            md:justify-end 
            mx-10 
            md:mx-0 
            md:ml-10;
    }
</style>