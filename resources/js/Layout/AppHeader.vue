<template>
        <div class="mb-2 shadow-sm card">
            <Breadcrumb class="text-sm text-[var(--color-text)]" :home="home" :model="items" />
        </div>
</template>
  
<script setup>
import { ref } from 'vue';

const items = ref([
    { label: 'Home' }, 
]);

const home = ref({
    icon: 'pi pi-home'
});


</script>
  
<style>
@import '../Layout/css/custom-layout.css';
</style>