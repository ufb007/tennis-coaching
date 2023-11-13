<template>
    <div>
        <div class="tesimonials w-[770px] bg-primary-green text-white text-center">
            <h2>{{ testimonials.title }}</h2>
            <!--
                loop through testimonial list

            -->
        </div>
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue';
    import { useStore } from 'vuex';

    const position = ref({})

    const store = useStore()

    const testimonials = computed(()=> store.getters.getTestimonials)

    // create function to get 3 from the testimonials list
    // select 3 from the list and add to array for display in the template
    // selected middle always
    // when next is selected, we either pop or push to end or add to beginning of array of 3
    // setinterval timer to select
</script>