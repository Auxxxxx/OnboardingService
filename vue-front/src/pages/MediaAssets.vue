<template>
    <section>
        <div class="title container">
            <h2>Media Asserts</h2>
            <NavBar />
        </div>
        <ul>
          <li v-for="(image, i) in images" :key="i">
          {{ image }}</li>
        </ul>
        <MediaPopup @close-popup="popup = false" v-show="popup"/>
    </section>
</template>

<script setup>
import { useCounterStore } from '../stores/counter';
import MediaPopup from '../components/MediaPopup.vue';
import NavBar from '../components/NavBar.vue';
import { onMounted, ref } from 'vue';

const popup = ref(true)
const store = useCounterStore()
const images = ref()
const url = import.meta.env.VITE_BASE_URL
async function getImages(){
  await fetch(`${url}/image/media-assets/bill_edwards@gmail.com`,
        {
            method:"GET",
            headers:{ 
                "Authorization":"Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJiaWxsX2Vkd2FyZHNAZ21haWwuY29tIiwiaWF0IjoxNzEwMDI1NTM4LCJleHAiOjE3MTAxMTE5Mzh9.VtN2WItVHd4x7norHM_7CMnj4YRbASIpVqPWrmXlcZE"
            },
        }
    ).then((response) => response.json())
    .then((data) => images.value = data)
}

onMounted(() =>{
  getImages()
})
</script>

<style scoped>


.title{
    display: flex;
    justify-content: space-between;
    align-content: center;
    margin-top: 100px;
}

h2{
    color: #0d6efd;
}


</style>