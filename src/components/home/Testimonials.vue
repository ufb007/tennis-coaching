<template>
    <div class="flex justify-center my-20">
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

<script setup>
    import { ref, computed, onMounted, reactive, inject, watch } from 'vue'
    import { useStore } from 'vuex'
    import { faChevronLeft, faChevronRight, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

    let currentWidth = ref()
    const store = useStore()
    const testimonials = computed(()=> store.getters.getTestimonials)
    let testimonialsList = reactive([])
    const SvgIcon = inject('SvgIcon')
    const positions = [
        `left-[-400px] md:left-[-770px]`, 
        'left-0', 
        `left-[400px] md:left-[770px]`
    ]
    let scrollDirection = ref('next')
    let scrollTimer

    const createTestimonials = () => {
        for (let i = 0; i < testimonials.value.list.length; i++) {
            testimonialsList.push({
                ...testimonials.value.list[i],
                position: (positions[i]),
            })
        }
    }

    const handleResize = () => {
        const width = window.innerWidth

        currentWidth.value = 770;

        if (width <= 768) {
            currentWidth.value = 400;
        }
    }

    const scrollAnimationEnd = (el) => {
        const element = el.srcElement
        const offset = element.offsetLeft

        element.classList.remove('animate-moveLeft-770', 'animate-moveLeft-400', 'animate-moveRight-770', 'duration-500', 'animate-moveRight-400', 'transition-all')

        if (element.id === 'testimonial-1') {
            if (scrollDirection.value === 'next') {
                const list = testimonialsList.shift()
                testimonialsList.push(list)
            } else {
                const list = testimonialsList.pop()
                testimonialsList = [list, ...testimonialsList]
            }

            testimonialsList.map((value, index) => {
                value.position = positions[index]
            })
        }
    }

    const scrollTestimonials = (location, clicked = false) => {
        if (clicked) {
            clearInterval(scrollTimer)
        }

        scrollDirection.value = location

        const moveLeft = (currentWidth.value === 770) ? ` animate-moveLeft-770 duration-500 ` : ` animate-moveLeft-400 `
        const moveRight = (currentWidth.value === 770) ? ` animate-moveRight-770 duration-500 ` : ` animate-moveRight-400 `
        const transition_duration = 'transition-all'

        if (location === 'next') {
            testimonialsList[1].position += moveLeft + transition_duration
            testimonialsList[2].position += moveLeft + transition_duration
        } else {
            testimonialsList[0].position += moveRight + transition_duration
            testimonialsList[1].position += moveRight + transition_duration
        }
    }

    onMounted(() => {
        handleResize()
        createTestimonials()

        addEventListener('resize', handleResize)

        document.addEventListener("DOMContentLoaded", function(event) { 
            for (let i = 0; i < 3; i++) {
                document.getElementById(`testimonial-${i}`).addEventListener('animationend', scrollAnimationEnd)
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