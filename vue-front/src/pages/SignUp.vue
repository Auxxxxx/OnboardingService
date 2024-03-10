<template>
      <section>
        <h2>Registration</h2>
        <form action="">
            <div class="form-input">
                <!-- <label>Email address</label> -->
                <input v-model="formValue.email" type="email" placeholder="Name" required>
            </div>
            <div class="form-input">
                <!-- <label>Email address</label> -->
                <input v-model="formValue.name" type="text" placeholder="Login" required>
            </div>
            <div class="form-input">
                <!-- <label  >Password</label> -->
                <input v-model="formValue.password" type="password" placeholder="Password" required>
            </div>
            <!-- <div>
                <input v-model="rememberMe" type="checkbox">
                <label>Remember me</label>
            </div> -->
            <button @click.prevent="regUser">Register</button>
        </form>
        <Transition>
          <AuthNotify class="test" v-if="formValue.email == 1" >error</AuthNotify>
        </Transition>
    </section>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';
import AuthNotify from "../components/AuthNotify.vue"
const formValue = reactive({
  email:"",
  name:"",
  password:""
})
const popUpClass = ref(null)
const status = ref(false)
const url = import.meta.env.VITE_BASE_URL

async function regUser(){


  const form = new FormData()
  form.append("email", formValue.email)
  form.append("fullName", formValue.name)
  form.append("password", formValue.password)

  console.log(form)
  const response = await fetch(`${url}/auth/sign-in`,
  {
    method:"POST",
    body:JSON.stringify({
      "email":"te321321st@gmail.com",
      "password":"12345"
    }),
    headers:{
      "Content-Type":"application/json"
    }
  })
  .then((response) => {
      console.log(response)
    if(response == 200){

      return 
    }
  })

}



onMounted(() =>{
  console.log()
})
</script>

<style scoped>

.test{
  color: red;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

h2{
  font-size: 32px;
    color: #0d6efd;
}

.success{
    color: limegreen;
}
.error{
    color: red;
}
section{
  margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100svh;
}

form{
  position: relative;
    display: flex;
    flex-direction: column;
    width: 300px;
    gap: 10px;
}

form::before{
  content: "";
  position: absolute;
  top: -40%;
  left: -20%;
  background-image: url("../assets/imgs/decor-1.svg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
}

form::after{
  content: "";
  position: absolute;
  bottom: 0%;
  right: -20%;
  background-image: url("../assets/imgs/decor-2.svg");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 52px;
  height: 95px;
}

.form-input{
    display: flex;
    flex-direction: column;
}

input{
    padding: 7px;
    border: none;
    border-bottom: 2px solid #0d6efd;
    background: none;
    
}

button{
    margin: 0 auto;
    padding: 0.375rem 1.075rem;
    border: none;
    border-radius: 12px;
    width: fit-content;
    color: white;
    background-color: #0d6efd;
    font-size: 18px;
    cursor: pointer;
}
</style>
