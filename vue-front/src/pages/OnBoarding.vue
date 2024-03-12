<template>
    <section class="container">
        <header class="header">
            <div class="header-title">
                <img src="../assets/imgs/meeting-icon.svg" alt="">
                <div><h2>OnBoarding</h2>
                <p>on board quiz</p></div>
            </div>
            <NavBar />
        </header>
        <form action="">
            <div class="input">
                <label for="">1. In zoveel mogelijk detail, beschrijf jouw ideale klant </label>
                <textarea placeholder="answer here" v-model="state.qus1"></textarea>

            </div>
            <div class="input">
                <label for="">2. Zjin er bepaadle sectoren waarin jullie idea3le klant vaak te vinden is? Waarom past jullie aanbod goed bij hun behoeften</label>
                <textarea placeholder="answer here" v-model="state.qus1"></textarea>
                
            </div>
            <div class="input">
                <label for="">3. In zoveel mogelijk detail, beschrijf jouw ideale klant</label>
                <textarea placeholder="answer here" v-model="state.qus1"></textarea>
                
            </div>
            <div class="input">
                <label for="">4/ Waarom maken uw klanten gebruik van uw dienst? Welk probleem lost het voor hen op</label>
                <textarea placeholder="answer here" v-model="state.qus1"></textarea>
                
            </div>
            <div class="input">
                <label for="">5. Geef alsjeblieft een lijst van enkele van jouw meest significante concurrenten</label>
                <textarea placeholder="answer here" v-model="state.qus1"></textarea>
                
            </div>
            <div class="input">
                <label for="">Waarom kiezen klanten voor uw bedrijf in plaats van voor uw concurrenten  </label>
                <textarea placeholder="answer here" v-model="state.qus1"></textarea>
                
            </div>
            <button class="button">Send</button>
        </form>
    </section>
</template>


<script setup>
import {reactive} from "vue"
import NavBar from "../components/NavBar.vue"

const state = reactive({
    qus1:"",
    qus2:"",
    qus3:"",
    qus4:"",
    qus5:"",
    qus6:""
})


</script>

<style scoped>

.header{
    display: flex;
    justify-content: space-between;
}

.header-title{
    display: flex;
    gap: 10px;
}

section{
    margin-top: 100px;
    display: flex;
    flex-direction: column;
}

form{
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.input{
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.input > input{
    height: 40px;
}

textarea{
    resize: none;
}
.button{
    padding: 0.375rem 0.75rem;
    width: fit-content;
    border: none;
    border-radius: 3px;
    color: white;
    background-color: #0d6efd;
    font-size: 18px;
}
</style>