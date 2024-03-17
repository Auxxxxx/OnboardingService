<template>
    <section class="container">
        <header class="header">
            <div class="header-title">
                <img src="../assets/imgs/meeting-icon.svg" alt="">
                <div v-if="data">
                    <h2>{{ data.header }}</h2>
                </div>
            </div>
            <NavBar />
        </header>
        {{ data }}
    </section>    
</template>

<script setup>
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
const route = useRoute()

const data = ref(JSON.parse(route.query.note))
onMounted(() => {
    console.log(data.value)
})
</script>