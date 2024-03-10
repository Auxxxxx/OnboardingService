<template>
    <section class="container">
        <img class="section-header" src="../assets/imgs/footer-profile.png" alt="">
        <div class="profile-block">
            <img src="../assets/imgs/profileAvatar.svg" alt="">
            <h2>Good Day, dear Name Surename!</h2>
            <p>Welcome! Using this page toy can access all required tools needed for onboarding. You can also<br />
                access any notes from our meetings together and even access a record of advertissing reports.</p>
        </div>
        <div class="roadmap">
            <h3>The Roadmap</h3>
            <div class="roadmap-stages">
                <button class="roadmap-btn" @click="index = i" :class="{ active: index == i }" v-for="(btn, i) in data" :key="i">{{ i + 1
                }}</button>
            </div>
            <div class="roadmap-desc">
                <TransitionGroup name="list" tag="div" mode="out-in">
                    <div class="roadmap-text" :class="{active : index == i}" v-for="(text, i) in data" :key="i" v-show="i == index">
                        {{ text.text }}
                    </div>
                </TransitionGroup>
            </div>
            <button class="open-menu-btn" @click="store.navPopup = true">Open menu</button>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue"
import { useCounterStore } from "../stores/counter";

const store = useCounterStore()

const index = ref(0)

const data = ref([
    {
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, odit modi. Quas repudiandae commodi quia delectus dignissimos alias! Eos, cupiditate laborum et aperiam facere culpa vel id obcaecati unde delectus?"
    },
    {
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, odit modi. Quas repudiandae commodi quia delectus dignissimos alias! Eos, cupiditate laborum et aperiam facere culpa vel id obcaecati unde delectus?"
    },
    {
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, odit modi. Quas repudiandae commodi quia delectus dignissimos alias! Eos, cupiditate laborum et aperiam facere culpa vel id obcaecati unde delectus?"
    },
])


</script>

<style scoped>
/* .list-move, apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
/* .list-leave-active {
  position: absolute;
} */

.v-leave-to,
.v-leave-active {
  position: absolute;
}
.section-header {

}

.profile-block {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 30px;
    z-index: 2;

}

.profile-block>img {
    width: 150px;
}

.roadmap {
    margin-top: 30px;
}

h2,
h3 {
    color: #3873E9;
}

h2 {
    font-size: 2.5rem;
}

h3 {
    font-size: 2rem;
}

.roadmap-btn {
    background: transparent;
    border: 2px solid #3873E9;
    outline: none;
    width: 3em;
    height: 3em;
    border-radius: 200%;
    font-size: 30px;
    color: #3873E9;
    transition: 0.5s;
    cursor: pointer;
}

.roadmap-btn.active {
    color: white;
    background: #3873E9;
}

.roadmap-stages {
    display: flex;
    gap: 30px;
    margin-top: 30px;
}

.roadmap-desc{
    position: relative;
    margin-top: 30px;
}

.open-menu-btn{
    margin-top: 20px;
    padding: 0.375rem 0.75rem;
    border: none;
    border-radius: 3px;
    color: white;
    background-color: #0d6efd;
    font-size: 18px;
}

/* .roadmap-text.active{
    transition: 0.5s;
    position: absolute;
    top: 0;
    left: 20%;
} */

/* .roadmap-text.active{
    
    position: relative;
    top: 0;
    left: 0;
} */
</style>