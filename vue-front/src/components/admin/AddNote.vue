<template>
    <div class="meeting-notes">
        <input type="text" placeholder="header" v-model="noteHeader">
        <textarea class="textarea" name="" id="" cols="30" rows="10" v-model="noteDesc" ></textarea>
        <button @click.prevent="postNote">add note</button>
    </div>
</template>

<script setup>
import { ref,onMounted } from 'vue';
import {useCounterStore} from "../../stores/counter"

const store = useCounterStore()
const noteHeader = ref("")
const noteDesc = ref("")
const url = import.meta.env.VITE_BASE_URL

async function postNote(){
    const body = {
        id:null,
        content:[
            noteDesc.value,""
        ],
        header:noteHeader.value,
        recipientEmail:"bill_edwards@gmail.com"
    }
    console.log(JSON.stringify(body))
    await fetch(`${url}/note/meeting-notes`,{
        method:"PUT",
        headers:{ 
            "Authorization":"Bearer " + store.jwt
        },
        body:JSON.stringify(body)
    }).then((response) =>{
        console.log(response)
        return response
    })
}


</script>

<style scoped>

.textarea{
    resize: none;
}
</style>