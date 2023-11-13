<template>
    <div class="flex justify-center my-20">
        <div class="tesimonials w-[770px] bg-primary-green text-white text-center overflow-hidden">
            <h2 class="py-10 font-bold text-4xl">{{ testimonials.title }}</h2>
            <div class="carousel-wrapper flex w-full items-end relative justify-center gap-1 pb-5 h-[200px]">
                <ul class="carousel absolute top-0 left-[0px] flex">
                    <li :key="index" v-for="(item, index) in testimonialsList" class="w-[770px] px-10 font-thin leading-6 text-[15px]">
                        "{{ item.message }}"
                    </li>
                </ul>

                <button class="bg-white p-7 group" @click="scrollTestimonials('prev')"><svg-icon class="text-primary-green w-[12px] h-[12px] group-hover:text-[#1a3150] duration-500" :fa-icon="faChevronLeft" /></button>
                <button class="bg-white p-7 group" @click="scrollTestimonials('next')"><svg-icon class="text-primary-green w-[12px] h-[12px] group-hover:text-[#1a3150] duration-500" :fa-icon="faChevronRight" /></button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, computed, onMounted, reactive, inject } from 'vue';
    import { useStore } from 'vuex';
    import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

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