<template>
    <section>
        <h2>Sign in</h2>
        <form action="">
            <div class="form-input">
                <label>Email address</label>
                <input v-model="email" type="email" placeholder="enter email">
            </div>
            <div class="form-input">
                <label  >Password</label>
                <input v-model="password" type="password" placeholder="enter password">
            </div>
            <div>
                <input v-model="rememberMe" type="checkbox">
                <label>Remember me</label>
            </div>
            <button @click.prevent="login">Login</button>
        </form>
        <Transition>
            <p class="success" v-if="notifyState">success</p>
        </Transition>
        <Transition>
            <p class="error" v-if="notifyState == false">error</p>
        </Transition>
    </section>
</template>

<script setup>

import {ref} from "vue"
import { useRouter } from "vue-router";

const router = useRouter()
const rememberMe = ref(false)
const email = ref("")
const password = ref("")
const notifyState = ref(null)



function login(){
    if(email.value == "test@gmail.com" && password.value == "12345"){
        putInLocalOrSession()
        setNotifyToFalse()
        notifyState.value = true
        setTimeout(() => {
            router.push("/onboard")
        },500)
        return
    }
    console.log(email.value, password.value)
    setNotifyToFalse()
    notifyState.value = false
}

function setNotifyToFalse(){
    setTimeout(() =>{
        notifyState.value = null
    },2000)
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