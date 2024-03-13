<template>
    <div>
        <h2>Change contacts details</h2>
        <input type="text" v-model="contactOne">
        <input type="text" v-model="contactTwo">
        <button @click.prevent="changeUsefulNote">change contact</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCounterStore } from '../../stores/counter';

const props = defineProps({
    email:String
})
const store = useCounterStore()
const url = import.meta.env.VITE_BASE_URL
const contactOne = ref("")
const contactTwo = ref("")
function formatDate(){
    const date = new Date();
    const year = date.getFullYear();
    const month = `0${date.getMonth() + 1}`.slice(-2);
    const day = `0${date.getDate()}`.slice(-2);
    const formattedDate = `${year}-${month}-${day}`;
    return formatDate
}

async function changeUsefulNote(){
    const body = {
        content:[
            contactOne.value,
            contactTwo.value
        ],
        date:formatDate()
    }
    await fetch(`${url}/note/contact-details/${props.email}`,{
        method: "PUT",
        headers:{
            "Authorization":"Bearer " + store.jwt
        },
        body:JSON.stringify(body)
    }).then((response) => console.log(response))
}


</script>