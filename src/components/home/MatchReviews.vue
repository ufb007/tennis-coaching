<template>
    <div class="flex justify-center bg-yellow">
        <div class="w-page-width mx-10 flex flex-col lg:flex-row">
            <NextMatches />
            <LatestMatches />
        </div>
    </div>
</template>

<script setup>
    import NextMatches from '@/components/matches/NextMatches.vue';
    import LatestMatches from '../matches/LatestMatches.vue';
</script>

<style scoped>
    
</style>