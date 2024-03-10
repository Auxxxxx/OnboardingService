<template>
    <section class="container">
        <header class="meeting-header">
            <h2>Meeting notes</h2>
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
    </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import NavBar from '../components/NavBar.vue';
const url = import.meta.env.VITE_BASE_URL
const notes = ref({})

async function getNotes(){
    fetch(`${url}/note/meeting-notes/bill_edwards@gmail.com`,
    {
        method:"GET",
        headers:{ 
            "Authorization":"Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJiaWxsX2Vkd2FyZHNAZ21haWwuY29tIiwiaWF0IjoxNzEwMDI1NTM4LCJleHAiOjE3MTAxMTE5Mzh9.VtN2WItVHd4x7norHM_7CMnj4YRbASIpVqPWrmXlcZE"
        },
    })
    .then((response) => response.json())
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

.meeting-header{
    display: flex;
    justify-content: space-between;
}

ul{
    display: flex;
    flex-direction: column;
    margin-top: 40px;
}

li{
    width: 100%;
    padding: 20px;
    background: #ebf3fb;
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