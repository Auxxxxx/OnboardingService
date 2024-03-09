<template>
    <nav>
        <Transition>
        <div v-show="store.navPopup" class="nav">
            <div class="nav-title">
                <h3>Navigation</h3>
                <img @click="store.navPopup = false" src="../assets/imgs/cross.svg" class="close-nav" />
            </div>
            <ul class="nav-list">
                <li class="nav-item">
                    <img src="../assets/imgs/meetingNotes.svg" alt="">
                    <router-link @click="store.navPopup = false" to="/onboard">OnBoarding</router-link>
                </li>
                <li class="nav-item">
                    <img src="../assets/imgs/meetingNotes.svg" alt="">
                    <router-link @click="store.navPopup = false" to="/media-asserts">Media Asserts</router-link>
                </li>
                <!-- <li class="nav-item">
                    <img src="" alt="">
                    <router-link to="/">Paid Adversting Reports</router-link>
                </li>
                <li class="nav-item">
                    <img src="" alt="">
                    <router-link to="/">Meeting Notes</router-link>
                </li> -->
            </ul>
        </div>
        </Transition>
        <Transition>
            <aside @click="store.navPopup = false" v-show="store.navPopup" class="nav-bg"></aside>
        </Transition>
    </nav>
</template>

<script setup>
import { useCounterStore } from "../stores/counter";

const store = useCounterStore()
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

.nav{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    background: white;
    height: 100svh;
    width: 30%;
}

.nav-bg {
  position: fixed;
  width: 100%;
  top: 0;
  height: 100vh;
  background: rgba(67, 87, 121, 0.6);
  z-index: 3;
}

.nav-list{
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.nav-item{
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: 20px;
}

.nav-item > a{
    color: #3873E9;
    text-decoration: none;
}

.nav-title{
    display: flex;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
}

.close-nav{
    width: 50px;
   
}

.nav-title > h3{
    color: #3873E9;
    font-size: 24px;
}
</style>