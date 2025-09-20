<template>
  <Loader v-if="isLoading" />
  <div v-else class="home-container">
    <!-- <Header /> -->
    <div class="main-content">
      <div class="robot-side">
        <Robot />
      </div>
      <div class="desc-side">
        <Description />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue"
import Loader from "../components/Loader.vue"
import Header from "../components/Header.vue"
import Robot from "../components/Robot.vue"
import Description from "../components/Description.vue"
const isLoading = ref(true)
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 2000) // Simule un chargement de 500 ms
})
</script>
<style scoped>
.main-content {
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
}

.robot-side {
  width: 50%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.desc-side {
  width: 50%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>