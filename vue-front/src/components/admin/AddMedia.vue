<template>
    <div class="add-media">
        <header>
            <h2>Add media</h2>
        </header>
        <input type="file" @change="onFileChange">
        <button @click.prevent="addMedia">add image</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCounterStore } from '../../stores/counter';

const store = useCounterStore()
const file = ref()
const url = import.meta.env.VITE_BASE_URL

function onFileChange(e) {
    file.value = e.target.files;
    console.log(file.value[0])
}

async function addMedia(){
    console.log(file.value[0])
    const formData = new FormData()
    formData.append("clientEmail", "bill_edwards@gmail.com")
    formData.append("files", file.value[0])
    await fetch(`${url}/image/paid-advertising-reports/bill_edwards@gmail.com`,
        {
            method:"PUT",
            headers:{
                "Authorization":"Bearer " + store.jwt
            },
            body:formData
        }
    ).then((response) => console.log(response))
}
</script>

<style scoped></style>