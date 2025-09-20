<template>
  <Loader v-if="isLoading" />
  <div v-else class="home-container">
    <HeaderLangSwitcher />
    <div class="main-content">
      <div v-if="!isMobile" class="robot-side">
        <Robot />
      </div>
      <div :class="['desc-side', isMobile ? 'full-width' : '']">
        <Description />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, computed } from "vue"
import Loader from "../components/Loader.vue"
import Header from "../components/Header.vue"
import Robot from "../components/Robot.vue"
import Description from "../components/Description.vue"
import HeaderLangSwitcher from "../components/HeaderLangSwitcher.vue"

const isLoading = ref(true)
const windowWidth = ref(window.innerWidth)

const onResize = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 2000)
  window.addEventListener('resize', onResize)
})

import { onUnmounted } from "vue"
onUnmounted(() => {
  window.removeEventListener('resize', onResize)
})

const isMobile = computed(() => windowWidth.value <= 600)
</script>
<style scoped>
.main-content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100vw;
  min-height: 100vh;
}

.robot-side,
.desc-side {
  width: 50%;
  min-width: 320px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 2vw;
}

@media (max-width: 1024px) {
  .main-content {
    flex-direction: column;
    align-items: stretch;
    min-height: unset;
  }

  .robot-side,
  .desc-side {
    width: 100%;
    height: auto;
    min-height: 300px;
    padding: 5vw 2vw;
  }
}
</style>
@media (max-width: 600px) {
.main-content {
flex-direction: column;
padding: 0;
}
.robot-side {
display: none !important;
}
.desc-side.full-width {
width: 100% !important;
min-width: 0 !important;
padding: 6vw 2vw;
min-height: 200px;
}
}
</style>
</style>