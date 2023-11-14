<template>
    <div class="flex justify-center my-20">
        <div class="tesimonials w-[770px] bg-primary-green text-white text-center overflow-hidden">
            <h2 class="py-10 font-bold text-4xl flex flex-col items-center">
                <p class="pb-5">{{ testimonials.title }}</p>
                <svg-icon class="w-[30px] h-[30px] opacity-50" :fa-icon="faQuoteRight" />
            </h2>
            <div class="carousel-wrapper w-full relative gap-1 pb-5">
                <div id="carousel" class="w-full relative h-[150px] overflow-x-hidden duration-1000">
                    <ul class="absolute top-0 flex left-0">
                        <li :id="position" :key="index" v-for="({position, message, name}, index) in testimonialsList" class="w-[770px] px-10 font-thin leading-6 text-[15px]">
                            "{{ message.toUpperCase() }}"
                            <p class="text-[12px] font-normal pt-3">{{ name }}</p>
                        </li>
                    </ul>
                </div>

                <button class="group" @click="scrollTestimonials('prev')"><svg-icon class="group-hover:text-[#1a3150]" :fa-icon="faChevronLeft" /></button>
                <button class="group mt-2 ml-1" @click="scrollTestimonials('next')"><svg-icon class="group-hover:text-[#1a3150]" :fa-icon="faChevronRight" /></button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, computed, onMounted, reactive, inject, watch } from 'vue'
    import { useStore } from 'vuex'
    import { faChevronLeft, faChevronRight, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

    let position = ref(2)
    const store = useStore()
    const testimonials = computed(()=> store.getters.getTestimonials)
    const testimonialsList = reactive([])
    const SvgIcon = inject('SvgIcon')

    const createTestimonials = () => {
        for (let i = 0; i < testimonials.value.list.length; i++) {
            testimonialsList.push({
                ...testimonials.value.list[i],
                position: (i + 1),
            })
        }
    }

    const scrollTestimonials = (location) => {
        if (location === 'prev') {
            position.value--
        } else {
            position.value++
        }

        if (position.value === 1 && location === 'prev') {
            let popTestimonial = testimonialsList.pop()

            testimonialsList.splice(0, 0, popTestimonial)
        }
        
        document.getElementById(position.value).scrollIntoView({behavior: "smooth", block: "nearest"})
    }

    onMounted(() => {
        createTestimonials()
        setTimeout(() => {
            document.getElementById(2).scrollIntoView({block: "nearest"})
        }, 500)
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