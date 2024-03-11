<template>
    <section>
        <h2>Sign in</h2>
        <form action="">
            <div class="form-input">
                <label>Email address</label>
                <input v-model="state.email" type="email" placeholder="enter email">
            </div>
            <div class="form-input">
                <label  >Password</label>
                <input v-model="state.password" type="password" placeholder="enter password">
            </div>
            <div>
                <input v-model="state.rememberMe" type="checkbox">
                <label>Remember me</label>
            </div>
            <button @click.prevent="login">Login</button>
        </form>
        <Transition>
            <AuthNotify :class="popUpClass" v-if="notifyState == true">{{ popUpText }}</AuthNotify>
        </Transition>
        <button @click="getJwt">get cookie</button>
    </section>
</template>

<script setup>
import { useCounterStore } from "../stores/counter";
import {onMounted, reactive, ref} from "vue"
import { useRouter } from "vue-router";
import AuthNotify from "../components/AuthNotify.vue";

const store = useCounterStore()
const router = useRouter()
const state = reactive({
    email:"",
    password:"",
    rememberMe:false
})
const notifyState = ref(false)
const popUpText = ref("")
const popUpClass = ref("none")
const url = import.meta.env.VITE_BASE_URL

function wrongPassword(){
    popUpClass.value = "error"
    popUpText.value = "wrong password"
}

function wrongEmail(){
    popUpClass.value = "error"
    popUpText.value = " User with such email is not found"
}

function successLogin(){
    
    popUpClass.value = "success"
    popUpText.value = "success signed in"
}

function dissapearPopup(){
    setTimeout(() => notifyState.value = false, 4000)
}

function getJwt(){
    const jwt = store.getCookieJwt();

}

function getCookie(){
    var pattern = RegExp("token" + "=.[^;]*");
    var matched = document.cookie.match(pattern);
    if(matched){
        var cookie = matched[0].split('=');
        console.log(cookie[1]);
    }
}

const responseVariations = {
    200:successLogin(),
    401:wrongPassword(),
    404:wrongEmail()
}

async function login(){

    if(!state.email || !state.password){
        popUpClass.value = "error"
        notifyState.value = true
        dissapearPopup()
        return
    }

    await fetch(`${url}/auth/sign-in`,
    {
        method:"POST",
        body:JSON.stringify({
            "email":state.email,
            "password":state.password
        })
    })
    .then((response) => {
        responseVariations[response.status]
        notifyState.value = true
        dissapearPopup()
        return response.json()
    })
    .then((data) => {
        console.log("cookie saved")
        const expiresIn = new Date();
      expiresIn.setHours(expiresIn.getHours() + 24);
      document.cookie = `token=${data.jwt}; Secure; SameSite=Lax; expires=${expiresIn.toUTCString()}`;
    })

}



function putInLocalOrSession(){
    if(rememberMe.value){
        localStorage.setItem("isLoggedIn", "true")
        return
    }
    console.log("session")
    sessionStorage.setItem("isLoggedIn", "true")
    return
}

onMounted(() => {
})

</script>

<style scoped>

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

h2{
    color: #0d6efd;
}

.success{
    color: limegreen;
}
.error{
    color: red;
}
section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100svh;
}

form{
    display: flex;
    flex-direction: column;
    width: 300px;
    gap: 10px;
}

.form-input{
    display: flex;
    flex-direction: column;
}

input{
    padding: 7px;
    
}

button{
    padding: 0.375rem 0.75rem;
    border: none;
    border-radius: 3px;
    color: white;
    background-color: #0d6efd;
    font-size: 18px;
}
</style>