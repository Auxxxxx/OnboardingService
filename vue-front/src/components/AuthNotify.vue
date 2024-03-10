<template>
    <div>
        <slot></slot>
    </div>    
</template>

<script setup>
import { onMounted } from "vue";



onMounted(() => {
    console.log("я родился")
})
</script>

<style scoped>


</style>