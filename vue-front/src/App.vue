<script setup>
import Navigation from './components/Navigation.vue';
</script>

<template>
    <Navigation />
   <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component"/>
      </transition>
      </router-view>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all .5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
