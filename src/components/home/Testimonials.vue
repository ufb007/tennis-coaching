<template>
    <div class="flex justify-center my-20 bg-[url('~@/assets/home/testimony_bg.jpg')] py-20">
        <div class="tesimonials w-[400px] md:w-[770px] bg-primary-green text-white text-center overflow-hidden">
            <h2 class="py-10 font-bold text-4xl flex flex-col items-center">
                <p class="pb-5">{{ testimonials.title }}</p>
                <svg-icon class="w-[30px] h-[30px] opacity-50" :fa-icon="faQuoteRight" />
            </h2>
            <div class="carousel-wrapper w-full relative gap-1 pb-5">
                <div class="w-full relative h-[200px] md:h-[150px]">
                    <ul id="carousel" class="relative top-0 left-0">
                        <li :id="`testimonial-${index}`" :key="index" v-for="({position, message, name}, index) in testimonialsList"
                            :class="`absolute top-0 w-[400px] md:w-[770px] px-10 font-thin leading-6 text-[15px] ${position}`">
                            "{{ message.toUpperCase() }}"
                            <p class="text-[12px] font-normal pt-3">{{ name }}</p>
                        </li>
                    </ul>
                </div>

                <button class="group" @click="scrollTestimonials('prev', true)"><svg-icon class="group-hover:text-[#1a3150]" :fa-icon="faChevronLeft" /></button>
                <button class="group mt-2 ml-1" @click="() => scrollTestimonials('next', true)"><svg-icon class="group-hover:text-[#1a3150]" :fa-icon="faChevronRight" /></button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, computed, onMounted, reactive, inject } from 'vue'
    import { useStore } from 'vuex'
    import { faChevronLeft, faChevronRight, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
    import { TestimonialsType, ListType } from '@/types/TestimonialsType';

    let currentWidth = ref<number>()
    const store = useStore()
    const testimonials = computed<TestimonialsType>(()=> store.getters.getTestimonials)
    let testimonialsList = reactive<ListType[]>([])
    const SvgIcon = inject('SvgIcon')
    const positions = [
        `left-[-400px] md:left-[-770px]`, 
        'left-0', 
        `left-[400px] md:left-[770px]`
    ]
    let scrollDirection = ref<string>('next')
    let scrollTimer: number

    const createTestimonials = (): void => {
        testimonials.value.list.map((testimony, index) => {
            testimonialsList.push({
                ...testimony,
                position: (positions[index] !== undefined ? positions[index] : positions[2])
            })
        })
    }

    const handleResize = (): void => {
        const width = window.innerWidth

        currentWidth.value = 770;

        if (width <= 768) {
            currentWidth.value = 400;
        }
    }

    function scrollAnimationEnd(this: HTMLLIElement): void {
        this.classList.remove(
            'animate-moveLeft-770', 
            'animate-moveLeft-400', 
            'animate-moveRight-770',
            'animate-moveRight-400', 
            'transition-all'
        )

        if (this.id === 'testimonial-1') {
            if (scrollDirection.value === 'next') {
                const list = testimonialsList.shift()!
                testimonialsList.push(list)
            } else {
                const list = testimonialsList.pop()!
                testimonialsList = [list, ...testimonialsList]
            }

            testimonialsList.map((value, index) => {
                value.position = positions[index] !== undefined ? positions[index] : positions[2]
            })
        }
    }

    const scrollTestimonials = (location: string, clicked: boolean = false): void => {
        if (clicked) {
            clearInterval(scrollTimer)
        }

        scrollDirection.value = location

        const moveLeft = (currentWidth.value === 770) ? ` animate-moveLeft-770 ` : ` animate-moveLeft-400 `
        const moveRight = (currentWidth.value === 770) ? ` animate-moveRight-770 ` : ` animate-moveRight-400 `
        const transition_duration = 'transition-all'

        if (location === 'next') {
            testimonialsList[1].position = positions[1] + moveLeft + transition_duration
            testimonialsList[2].position = positions[2] + moveLeft + transition_duration
        } else {
            testimonialsList[0].position = positions[0] + moveRight + transition_duration
            testimonialsList[1].position = positions[1] + moveRight + transition_duration
        }
    }

    onMounted(() => {
        handleResize()
        createTestimonials()

        addEventListener('resize', handleResize)

        document.addEventListener("DOMContentLoaded", function(event): void { 
            for (let i = 0; i < 3; i++) {
                document.getElementById(`testimonial-${i}`)!.addEventListener('animationend', scrollAnimationEnd)
            }
        });

        scrollTimer = setInterval(() => {
            scrollTestimonials('next')
        }, 5000)
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