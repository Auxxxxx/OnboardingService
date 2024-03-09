<template>
    <section>
        <div class="title container">
            <h2>Media Asserts</h2>
            <div @click="store.navPopup = true" class="burger-menu">
                <div class="hamburger-lines">
                  <span class="line line1"></span>
                  <span class="line line2"></span>
                  <span class="line line3"></span>
                </div>  
            </div>
        </div>
    </section>
</template>

<script setup>
import { useCounterStore } from '../stores/counter';

const store = useCounterStore()
</script>

<style scoped>


.title{
    display: flex;
    justify-content: space-between;
    align-content: center;
    margin-top: 100px;
}

h2{
    color: #0d6efd;
}

.burger-menu{
    position: relative;
    cursor: pointer;
}

.hamburger-lines {
  display: block;
  height: 26px;
  width: 32px;
  top: 17px;
  left: 20px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.hamburger-lines .line {
  display: block;
  height: 4px;
  width: 100%;
  border-radius: 10px;
  background: #0e2431;
}
.hamburger-lines .line1 {
  transform-origin: 0% 0%;
  transition: transform 0.4s ease-in-out;
}

.hamburger-lines .line2 {
  transition: transform 0.2s ease-in-out;
}

.hamburger-lines .line3 {
  transform-origin: 0% 100%;
  transition: transform 0.4s ease-in-out;
}

</style>