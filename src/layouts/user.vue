<script setup lang="ts">
import Header from '@/components/user/TheHeader.vue';
import Footer from '@/components/user/TheFooter.vue';
</script>

<template>
    <Header></Header>
    <main>
        <router-view></router-view>
    </main>
    <Footer></Footer>
</template>