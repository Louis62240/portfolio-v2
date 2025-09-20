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

    <!-- Section projets -->
    <section class="projects-grid">
      <ProjectCard v-for="(project, index) in projects" :key="index" :title="project.title" :year="project.year"
        :image="project.image" :skills="project.skills" :link="project.link" :testimonial="project.testimonial"
        :clientName="project.clientName" :isUpwork="project.isUpwork" />
    </section>
  </div>
</template>

<script setup>

import { ref, onMounted, onUnmounted, computed } from "vue"
import Loader from "../components/Loader.vue"
import HeaderLangSwitcher from "../components/HeaderLangSwitcher.vue"
import Robot from "../components/Robot.vue"
import Description from "../components/Description.vue"
import ProjectCard from "../components/ProjectCard.vue"
import { projects } from "../projects"

const isLoading = ref(true)
const windowWidth = ref(window.innerWidth)

const onResize = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 2000)
  window.addEventListener("resize", onResize)
})

onUnmounted(() => {
  window.removeEventListener("resize", onResize)
})

const isMobile = computed(() => windowWidth.value <= 600)

// Liste de projets importée depuis src/projects.ts
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

/* --- GRID pour les projets --- */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
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
