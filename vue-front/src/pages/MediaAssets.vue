<template>
    <section>
        <div class="title container">
            <h2>Media Assets</h2>
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
  await fetch(`${url}/image/media-assets/${localStorage.getItem("email")}`,
        {
            method:"GET",
            headers:{ 
                "Authorization":"Bearer " + store.jwt
            },
        }
    ).then((response) => response.json())
    .then((data) => images.value = data)
}

onMounted(() =>{
//   getImages()
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