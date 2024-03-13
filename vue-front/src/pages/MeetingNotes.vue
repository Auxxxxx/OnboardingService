<template>
    <section class="container">
        <header class="header">
            <div class="header-title">
                <img src="../assets/imgs/meeting-icon.svg" alt="">
                <div>
                    <h2>Meeting notes</h2>
                    <p>notes for meeting</p>
                </div>
            </div>
            <NavBar />
        </header>
        <ul>
            <li v-for="(note, i) in notes.meetingNotes" :key="i">
                <header>
                    <h3>{{ note.header }}</h3>
                    <p>{{ note.date }}</p>
                </header>
                <p>{{ note.content[0] }}</p>
            </li>
        </ul>
        <!-- {{ notes }} -->
        <BackHome />
    </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useCounterStore } from '../stores/counter';
import NavBar from '../components/NavBar.vue';
import BackHome from "../components/BackHome.vue"
const url = import.meta.env.VITE_BASE_URL
const notes = ref({})
const store = useCounterStore()

async function getNotes(){
    fetch(`${url}/note/meeting-notes/${localStorage.getItem("email")}`,
    {
        method:"GET",
        headers:{ 
            "Authorization":"Bearer " + store.jwt
        },
    })
    .then((response) => {
        console.log(response)
        return response.json()})
    .then((data) => {
        console.log(data)
        notes.value = data})
}

onMounted(() => {
    getNotes()
})

</script>

<style scoped>

section{
    margin-top: 100px;
}

.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header-title{
    display: flex;
    align-items: center;
    gap: 20px;
}

.header-title > img{
    width: 50px;
}

ul{
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 40px;
}

li{
    width: 100%;
    padding: 20px;
    background: rgb(193, 207, 221);
    border-radius: 15px;
}

h2,h3,p{
    color: #0d6efd;
}

li > header{
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}
</style>