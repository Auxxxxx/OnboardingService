<template>
    <div class="useful-notes">
        <header>
            <h2>Add useful note</h2>
        </header>
        <input type="text" v-model="noteOne"/>
        <button @click.prevent="changeUsefulNote">save</button>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useCounterStore } from '../../stores/counter';

const store = useCounterStore()
const url = import.meta.env.VITE_BASE_URL
const noteOne = ref("")


const props = defineProps({
    email:String
})

function formatDate(){
    const date = new Date();
    const year = date.getFullYear();
    const month = `0${date.getMonth() + 1}`.slice(-2);
    const day = `0${date.getDate()}`.slice(-2);
    const formattedDate = `${year}-${month}-${day}`;
    return formatDate
}

async function changeUsefulNote(){
    if(noteOne.value == "") return
    const body = {
        content:noteOne.value.split(" "),
        date:formatDate()
    }
    await fetch(`${url}/note/useful-info/${props.email}`,{
        method: "PUT",
        headers:{
            "Authorization":"Bearer " + store.jwt
        },
        body:JSON.stringify(body)
    }).then((response) => console.log(response))
}

onMounted(() => {
    formatDate()
})

</script>


<style scoped>

.useful-notes{
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.useful-notes > button{
    width: fit-content;
}
</style>