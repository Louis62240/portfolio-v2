<template>
  <div class="loader-container">
    <div class="loader"></div>
  </div>
</template>

<script setup>
// Aucun script nécessaire
</script>

<style scoped>
:root {
  --color-background: #004643;
  /* Background global */
  --color-headline: #fffffe;
  /* Pour texte important */
  --color-paragraph: #abd1c6;
  /* Pour paragraphes et loader */
}

/* Container centré */
.loader-container {
  display: flex;
  justify-content: center;
  /* centre horizontalement */
  align-items: center;
  /* centre verticalement */
  height: 100vh;
  /* prend toute la hauteur de la page */
  background-color: var(--color-background);
  /* couleur du fond */
}

.loader {
  width: 120px;
  height: 22px;
  border-radius: 20px;
  color: var(--color-paragraph);
  /* couleur du loader */
  border: 2px solid var(--color-paragraph);
  position: relative;
}

.loader::before {
  content: "";
  position: absolute;
  margin: 2px;
  inset: 0 100% 0 0;
  border-radius: inherit;
  background: currentColor;
  animation: l6 2s infinite;
}

@keyframes l6 {
  100% {
    inset: 0;
  }
}
</style>
