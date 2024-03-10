<template>
    <section class="container">
        <header>
            <h2>Useful info</h2>
        </header>
        {{ tips }}
    </section>
</template>

<script setup>
import { onMounted, ref } from "vue";


const tips = ref({})
const url = import.meta.env.VITE_BASE_URL

async function getTips(){
    await fetch(`${url}/note/useful-info/bill_edwards@gmail.com`,
    {
        method:"GET",
        headers:{ 
            "Authorization":"Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJiaWxsX2Vkd2FyZHNAZ21haWwuY29tIiwiaWF0IjoxNzEwMDI1NTM4LCJleHAiOjE3MTAxMTE5Mzh9.VtN2WItVHd4x7norHM_7CMnj4YRbASIpVqPWrmXlcZE"
        },
    }).then((response) => response.json())
    .then((data) => {
        console.log(data)
        tips.value = data.usefulInfo
    })
}

onMounted(() => {
    getTips()
})

</script>



<style scoped>

section{
    margin-top: 100px;
}
</style>