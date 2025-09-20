<template>
  <Loader v-if="isLoading" />
  <div v-else class="home-container">
    <Header />
    <Robot />
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue"
import Loader from "../components/Loader.vue"
import Header from "../components/Header.vue"
import Robot from "../components/Robot.vue"

const isLoading = ref(true)
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 2000) // Simule un chargement de 500 ms
})
</script>
<style scoped></style>