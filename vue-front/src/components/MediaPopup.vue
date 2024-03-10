<template>
    <div class="popup">
        <div class="popup-inner">
            <header>
                <h3 >upload file</h3>
                <p @click="emitFunction">close</p>
                <button @click="loadImage">load</button>
            </header>
            <input type="file" @change="onFileChange">

        </div>
        <div class="shadow"></div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const emit = defineEmits(['closePopup']);
const url = import.meta.env.VITE_BASE_URL
const file = ref()
const emitFunction = function() {
    emit('closePopup')
}
let base64data = null
function onFileChange(e) {
    file.value = e.target.files;
    console.log(file.value[0])
//  const reader = new FileReader();
//  reader.onload = () => {
//     const img = new Image();
//     img.src = reader.result;
//     img.onload = () => {
//       const canvas = document.createElement('canvas');
//       canvas.width = img.width;
//       canvas.height = img.height;
//       const ctx = canvas.getContext('2d');
//       ctx.drawImage(img, 0, 0);
//         base64data = canvas.toDataURL('image/jpeg');
//       console.log(base64data);
//     };
//  };
//  reader.readAsDataURL(file.value[0]);
}
async function loadImage(){
    console.log(file.value[0])
    const formData = new FormData()
    formData.append("clientEmail", "bill_edwards@gmail.com")
    formData.append("files", file.value[0])
    await fetch(`${url}/image/media-assets/bill_edwards@gmail.com`,
        {
            method:"PUT",
            headers:{
                
                "Authorization":"Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJiaWxsX2Vkd2FyZHNAZ21haWwuY29tIiwiaWF0IjoxNzEwMDI1NTM4LCJleHAiOjE3MTAxMTE5Mzh9.VtN2WItVHd4x7norHM_7CMnj4YRbASIpVqPWrmXlcZE"
            },
            body:formData
        }
    ).then((response) => console.log(response))
}

</script>

<style scoped>

.popup{
    position: fixed;
    top: 0;
    left: 0;
    height: 100svh;
    width: 100%;
}

.popup-inner{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100svh;
}

</style>