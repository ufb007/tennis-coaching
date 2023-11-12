<template>
    <div class="flex justify-center bg-yellow">
        <div class="w-page-width mx-10">
            <div class="next w-full md:w-[289px] lg:w-[350] xl:w-[468px] bg-primary-green text-white py-10 px-10">
                <h2 class="text-4xl font-semibold pb-5">Next Matches</h2>
                <div class="line w-[30px] h-[2px] bg-white"></div>
                <p class="text-sm py-5">{{ nextMatches.title }}</p>
                <ul>
                    <li :key="index" v-for="(item, index) in nextMatches.list">
                        <div class="date bg-white text-primary-green flex flex-col items-center py-3 w-[60px] mb-1">
                            <div class="day leading-5 font-thin text-[25px]">{{ getDateTime(item.date).day }}</div>
                            <div class="month uppercase text-[13px] p-0 m-">{{ getDateTime(item.date).month }}</div>
                        </div>
                        <div class="venue"></div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { computed } from 'vue';
    import { useStore } from 'vuex';

    const store = useStore()

    const getDateTime = (date) => {
        const createDate = new Date(date)
        const formattedDate = new Intl.DateTimeFormat('us-GB', { year: 'numeric', month: 'short', day: '2-digit' }).format(createDate).split(' ')

        return {
            day: formattedDate[0],
            month: formattedDate[1],
            year: formattedDate[2]
        }
    }

    const getTime = (date) => {
        const createDate = new Date(date)
        return new Intl.DateTimeFormat('us-GB', { hour: '2-digit', minute: '2-digit' }).format(createDate)
    }

    const nextMatches = computed(()=> store.getters.getNextMatchReviews)
</script>

<style scoped>
    
</style>