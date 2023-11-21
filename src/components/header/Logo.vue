<template>
    <div>
        <img class="w-[200px] cursor-pointer" @click="() => router.push('/')" src="/images/logo.png" />
    </div>
</template>

<script setup>
    import { useRouter } from 'vue-router';

    const router = useRouter()
</script>