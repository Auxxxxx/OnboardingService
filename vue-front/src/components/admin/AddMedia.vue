<template>
    <div class="add-media">
        <header>
            <h2>Add media</h2>
        </header>
        <input type="file" @change="onFileChange">
        <button @click.prevent="addMedia">add image</button>
        {{ props.email }}
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

const props = defineProps({
    email:String
})
async function addMedia(){
    console.log(file.value[0])
    const formData = new FormData()
    formData.append("clientEmail", props.email)
    formData.append("files", file.value[0])
    await fetch(`${url}/image/paid-advertising-reports/${props.email}`,
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

<style scoped>

.add-media{
    display: flex;
    flex-direction: column;
}

.add-media > button{
    width: fit-content;
}

</style>