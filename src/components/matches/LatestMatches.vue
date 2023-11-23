<template>
    <div class="py-10 px-10 text-primary">
        <h2 class="text-4xl font-semibold pb-5">{{ latest.title }}</h2>
        <div class="line w-[30px] h-[2px] bg-primary-green"></div>
        <p class="text-sm py-5">{{ latest.description }}</p>
        <div class="flex flex-col sm:flex-row md:justify-between">
            <div class="player_1 w-full sm:w-[210px] shadow-lg">
                <img :src="latest.match.competing[0].img" class="w-full" />
                <div class="py-3 w-full bg-primary text-white text-center text-sm">{{ latest.match.competing[0].name }}</div>
            </div>
            <div class="flex flex-col py-5 sm:flex-row items-center">
                <div class="text-center">
                    <p class="text-gray-500 text-sm font-medium">{{ day }} {{ month }} {{ getTime(latest.match.date) }}</p>
                    <p class="py-5 font-semibold text-4xl">{{ latest.match.score }}</p>
                    <p class="uppercase text-primary-green">{{ latest.match.venue }}</p>
                </div>
            </div>
            <div class="player_2 w-full sm:w-[210px] shadow-lg">
                <img :src="latest.match.competing[1].img" class="w-full" />
                <div class="py-3 w-full bg-primary text-white text-center text-sm">{{ latest.match.competing[1].name }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { getDate, getTime } from '@/models/DateFormatter';
    import { computed } from 'vue';
    import { useStore } from 'vuex';
    import { ReviewLatestType } from '@/types/MatchReviewType';

    const store = useStore()

    const latest = computed<ReviewLatestType>(()=> store.getters.getLatestMatchReviews)

    const { day, month } = getDate(latest.value.match.date)
</script>

<style scoped>
</style>