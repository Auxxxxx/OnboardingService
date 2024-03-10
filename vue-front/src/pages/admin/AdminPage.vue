<template>
    <section class="container">
        <header>
            <h2>Admin</h2>
            <ul>
                <li v-for="(user,i) in users.clients" :key="i">
                    <h3>{{ user.email }}</h3>
                    <button @click="router.push(`/admin/client-page/${user.email}`)">go to user page</button>
                </li>
            </ul>
        </header>
    </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const users = ref({})
const url = import.meta.env.VITE_BASE_URL
async function getUsers(){
    await fetch(`${url}/client/list`,
    {
        method:"GET",
        headers:{ 
            "Authorization":"Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJvbmJvYXJkaW5nLm1hbmFnZXIwMUBnbWFpbC5jb20iLCJpYXQiOjE3MTAwOTc0ODksImV4cCI6MTcxMDE4Mzg4OX0.kfhn0IfBl_Kzk6zhsbiVP2_aUHK-UHk6iJNxJrFC7WI"
        },
    }).then((response) => response.json())
    .then((data) => users.value = data)
}

onMounted(() => {
    getUsers()
})
</script>

<style scoped></style>