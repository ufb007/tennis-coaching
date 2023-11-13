<template>
    <div class="flex justify-center my-20">
        <div class="tesimonials w-[770px] bg-primary-green text-white text-center overflow-hidden">
            <h2 class="py-10 font-bold text-4xl flex flex-col items-center">
                <p class="pb-5">{{ testimonials.title }}</p>
                <svg-icon class="w-[30px] h-[30px] opacity-50" :fa-icon="faQuoteRight" />
            </h2>
            <div class="carousel-wrapper flex w-full items-end relative justify-center gap-1 pb-5 h-[200px]">
                <ul class="carousel absolute top-0 left-[0px] flex">
                    <li :key="index" v-for="(item, index) in testimonialsList" class="w-[770px] px-10 font-thin leading-6 text-[15px]">
                        "{{ item.message }}"
                    </li>
                </ul>

                <button class="group" @click="scrollTestimonials('prev')"><svg-icon class="group-hover:text-[#1a3150]" :fa-icon="faChevronLeft" /></button>
                <button class="group" @click="scrollTestimonials('next')"><svg-icon class="group-hover:text-[#1a3150]" :fa-icon="faChevronRight" /></button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, computed, onMounted, reactive, inject } from 'vue';
    import { useStore } from 'vuex';
    import { faChevronLeft, faChevronRight, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

    const position = ref(false)
    const store = useStore()
    const testimonials = computed(()=> store.getters.getTestimonials)
    const testimonialsList = reactive([])
    const SvgIcon = inject('SvgIcon')

    const createTestimonials = () => {
        const listLength = testimonials.value.list.length > 3 ? 3 : testimonials.value.list.length

        for (let i = 0; i < listLength; i++) {
            testimonialsList.push(testimonials.value.list[i])
        }
    }

    const scrollTestimonials = (location) => {
        console.log(`${location} button will be triggered`)
    }

    onMounted(() => {
        createTestimonials()
    })
</script>

<style scoped>
    button {
        @apply bg-white p-7;
    }

    button svg {
        @apply text-primary-green w-[12px] h-[12px] duration-500;
    }
</style>