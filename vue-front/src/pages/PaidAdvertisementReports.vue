<template>
    <section class="container">
        <header class="title">
            <div class="header-title">
                <img src="../assets/imgs/paid-icon.svg" alt="">
                <div>
                    <h2>Reports</h2>
                    <!-- <p>notes for meeting</p> -->
                </div>
            </div>
            <NavBar />
        </header>
        <div v-for="(image,i) in images" :key="i">
            <img :src="image" alt="">
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useCounterStore } from '../stores/counter';
import NavBar from '../components/NavBar.vue';

const images = ref({})
const store = useCounterStore()
const url = import.meta.env.VITE_BASE_URL

async function getImages(){
    await fetch(`${url}/image/paid-advertising-reports/${localStorage.getItem("email")}`,
    {
        method:"GET",
        headers:{
            "Authorization":"Bearer " + store.jwt
        },
    }).then((response) => response.json())
    .then((data) => {
        console.log(data)
        images.value = data})
}

onMounted(() => {
    getImages()
})
</script>

<style scoped>
section{
    margin-top: 100px;
}

.title{
    display: flex;
    justify-content: space-between;
}

.header-title{
    display: flex;
    align-items: center;
    gap: 20px;
}

.header-title > img{
    width: 50px;
}

.header-title > div > h2{
    color: #0d6efd;
}

</style>