<template>
    <section class="container">
        <header class="header">
            <div class="header-title">
                <img src="../assets/imgs/contact-icon.svg" alt="">
                <div>
                    <h2>Contacts</h2>
                    <p>Detail information about contacts</p>
                </div>
            </div>
            <NavBar />
        </header>
        <div class="tips" v-if="tips">
            <div class="tip" v-if="tips.content">
                <img src="../assets/imgs/dot-icon.svg" alt="">
                <span>{{ tips.content[0] }}</span>
            </div>
            <div class="tip"  v-if="tips.content">
                <img src="../assets/imgs/dot-icon.svg" alt="">
                <span>{{ tips.content[1] }}</span>
            </div>
        </div>
        <div class="no-contacts" v-else>
            <p>You dont have contact details :(</p>
        </div>
        <BackHome />
    </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useCounterStore } from "../stores/counter";
import NavBar from "../components/NavBar.vue";
import BackHome from "../components/BackHome.vue"

const store = useCounterStore()
const tips = ref({})
const url = import.meta.env.VITE_BASE_URL

async function getTips(){
    await fetch(`${url}/note/contact-detail/${localStorage.getItem("email")}`,
    {
        method:"GET",
        headers:{ 
            "Authorization":"Bearer " + store.jwt
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

.header{
    display: flex;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
    
}

.header-title{
    display: flex;
    gap: 20px;
   
}

.header-title > img{
    width: 50px;
}

.header-title > div > h2{
    color: #0d6efd;
    font-size: 50px;
}

.tips{
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 40px;
}

.tip{
    display: flex;
    align-content: center;
    gap: 10px;
}

.tip > span{
    color: #575757;
}

.no-contacts{
    display: flex;
    justify-content: center;
    margin-top: 100px;

}
</style>