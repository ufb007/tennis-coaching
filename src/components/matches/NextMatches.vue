<template>
    <div class="next w-full lg:w-[600px] bg-primary-green text-white py-10 px-10">
        <h2 class="text-4xl font-semibold pb-5">Next Matches</h2>
        <div class="line w-[30px] h-[2px] bg-white"></div>
        <p class="text-sm py-5">{{ nextMatches.title }}</p>
        <ul>
            <li :key="index" v-for="({ date, venue, competing }, index) in nextMatches.list" class="flex mb-1">
                <div class="date bg-white text-primary-green flex flex-col items-center justify-center py-3 w-[60px] flex-grow">
                    <div class="day leading-5 font-thin text-[25px]">{{ getDate(date).day }}</div>
                    <div class="month uppercase text-[13px] p-0 m-">{{ getDate(date).month }}</div>
                </div>
                <div class="competition bg-white bg-opacity-20 w-full py-2 px-3">
                    <div class="venu text-sm font-medium">{{ venue }}</div>
                    <div class="time-players font-thin">{{ getTime(date) }}, {{ competing[0] }} - {{ competing[1] }}</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
    import { computed } from 'vue';
    import { useStore } from 'vuex';
    import { getDate, getTime } from '@/models/DateFormatter';
    import { ReviewNextType } from '@/types/MatchReviewType';

    const store = useStore()
    const nextMatches = computed<ReviewNextType>(()=> store.getters.getNextMatchReviews)
</script>