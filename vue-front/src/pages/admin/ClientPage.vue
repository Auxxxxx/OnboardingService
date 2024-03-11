<template>
    <section class="container">
        <button @click="router.back(1)">back</button>
        <header>
            <h2>{{ userData.fullName }}</h2>
            <div>
                <p>{{ route.params.email }}</p>
            </div>
        </header>
        <form action="">
            <div class="stage-changer">
                <h2>Choosen stage {{ userData.activeStage }}</h2>
                <p>Client progress</p>
                <div>
                    <input type="radio" v-for="i in 3" :key="i" v-model="indexStage" :value="i">
                    
                </div>
                {{  userStages[indexStage] ? userStages[indexStage] : "none"}}
                <button>change stage</button>
            </div>
            <div class="meeting-notes">
                <h2>Add new note:</h2>
                <AddNote />
            </div>
            <ChangeUsefulNote />
            <ChangeContacts />
            <AddMedia />
        </form>
    </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import AddNote from "../../components/admin/AddNote.vue"
import ChangeUsefulNote from "../../components/admin/ChangeUsefulNote.vue"
import ChangeContacts from "../../components/admin/ChangeContacts.vue"
import AddMedia from "../../components/admin/AddMedia.vue"

const url = import.meta.env.VITE_BASE_URL
const route = useRoute()
const router = useRouter()
const user = route.params
const userData = ref({})
const indexStage = ref(1)
const userStages = ref("");

async function getClientData(){
    await fetch(`${url}/client/get-data/${route.params.email}`,
    {
        method:"GET",
        headers:{ 
            "Authorization":"Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJiaWxsX2Vkd2FyZHNAZ21haWwuY29tIiwiaWF0IjoxNzEwMTY4OTE0LCJleHAiOjE3MTAyNTUzMTR9.DvwS2DGY6pqi3IjGSTYt_4ivcX1RntKcALGXz3p3e9s"
        },
    }).then((response) => response.json())
    .then((data) => {
        console.log(data)
        userData.value = data
        userStages.value = Array.from(data.onboardingStages)
    })
}

onMounted(() =>{
    console.log(route.params.email)
    getClientData()
})
</script>