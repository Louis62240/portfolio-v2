<template>
  <header class="header">
    <nav class="nav">
      <div class="nav-container">
        <!-- Logo optionnel -->
        <div class="logo full-width-logo">
          <span class="logo-text custom-text" style="font-size:1.7rem;">Portfolio de Louis Hanquiez</span>
        </div>

        <ul class="nav-list">
          <li class="nav-item">
            <a href="#home" class="nav-link active custom-text" data-text="Home">
              <span class="custom-text" style="font-size:1.1rem;">Home</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#about" class="nav-link custom-text" data-text="About">
              <span class="custom-text" style="font-size:1.1rem;">About</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#portfolio" class="nav-link custom-text" data-text="Portfolio">
              <span class="custom-text" style="font-size:1.1rem;">Portfolio</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#contact" class="nav-link custom-text" data-text="Contact">
              <span class="custom-text" style="font-size:1.1rem;">Contact</span>
            </a>
          </li>
        </ul>

        <!-- Sélecteur de langue -->
        <div class="lang-switcher">
          <select v-model="selectedLang" @change="changeLang" aria-label="Choisir la langue">
            <option value="fr">FR</option>
            <option value="en">EN</option>
            <option value="es">ES</option>
          </select>
        </div>

        <!-- Indicateur mobile -->
        <div class="mobile-indicator"></div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const selectedLang = ref('fr')

function changeLang() {
  // Ici, vous pouvez ajouter la logique pour changer la langue du site
  // Par exemple, stocker la langue dans le localStorage ou utiliser un plugin i18n
  // localStorage.setItem('lang', selectedLang.value)
  // location.reload() // à remplacer par une vraie gestion i18n
  alert('Langue changée en : ' + selectedLang.value)
}

onMounted(() => {
  // Animation d'entrée séquentielle
  const navItems = document.querySelectorAll('.nav-item')
  navItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`
  })

  // Gestion du scroll pour effet glassmorphism
  const header = document.querySelector('.header')
  let lastScroll = 0

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset

    if (currentScroll > 50) {
      header.classList.add('scrolled')
    } else {
      header.classList.remove('scrolled')
    }

    if (currentScroll > lastScroll && currentScroll > 100) {
      header.classList.add('hidden')
    } else {
      header.classList.remove('hidden')
    }

    lastScroll = currentScroll
  })
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: color-mix(in srgb, var(--color-background) 85%, transparent);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid color-mix(in srgb, var(--color-background) 20%, transparent);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  animation: slideDown 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.header.scrolled {
  background: color-mix(in srgb, var(--color-background) 95%, transparent);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.header.hidden {
  transform: translateY(-100%);
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-100%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}


.nav-container {
  width: 100%;
  padding: 0 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 70px;
}

.full-width-logo {
  flex: 1 1 0%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 2rem;
  padding-right: 2rem;
}

.logo {
  opacity: 0;
  animation: fadeInLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s forwards;
}


.nav-list {
  display: flex;
  align-items: center;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-right: 10rem;
}

.nav-item {
  opacity: 0;
  transform: translateY(-20px);
  animation: slideInDown 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

@keyframes slideInDown {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}


.nav-link {
  position: relative;
  display: inline-block;
  padding: 0.8rem 1.2rem;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--color-paragraph);
  border-radius: 12px;
  transition: color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  overflow: hidden;
  letter-spacing: 0.3px;
}

.nav-link span {
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
}



.nav-link:hover,
.nav-link:focus {
  text-decoration: underline;
  text-underline-offset: 10px;
  color: var(--color-button);
}

.nav-link.active {
  text-decoration: underline;
  text-underline-offset: 10px;
  color: var(--color-button);
}


.nav-link.active {
  color: var(--color-button);
  background: none;
  box-shadow: none;
}

/* Indicateur visuel pour mobile */

.mobile-indicator {
  display: none;
  width: 4px;
  height: 4px;
  background: var(--color-button);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.lang-switcher {
  margin-left: 1rem;
  display: flex;
  align-items: center;
}

.lang-switcher select {
  padding: 0.3rem 0.7rem;
  border-radius: 8px;
  border: 1px solid var(--color-paragraph, #ccc);
  background: var(--color-background, #fff);
  color: var(--color-paragraph, #333);
  font-size: 1rem;
  outline: none;
  transition: border 0.2s;
}

.lang-switcher select:focus {
  border: 1.5px solid var(--color-button, #667eea);
}

@keyframes pulse {

  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }

  50% {
    opacity: 0.7;
    transform: scale(1.2);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .nav-container {
    padding: 0 1rem;
    height: 60px;
  }

  .nav-list {
    gap: 0.5rem;
  }

  .nav-link {
    padding: 0.6rem 0.8rem;
    font-size: 0.9rem;
  }

  .mobile-indicator {
    display: block;
  }
}

@media (max-width: 480px) {
  .nav-container {
    flex-direction: column;
    height: auto;
    padding: 1rem;
    gap: 1rem;
  }

  .nav-list {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }

  .nav-link {
    padding: 0.5rem 0.7rem;
    font-size: 0.85rem;
  }
}

/* Thème sombre (si variables CSS disponibles) */
@media (prefers-color-scheme: dark) {
  .header {
    background: color-mix(in srgb, var(--color-background) 90%, transparent);
    border-bottom-color: color-mix(in srgb, var(--color-headline) 10%, transparent);
  }

  .header.scrolled {
    background: color-mix(in srgb, var(--color-background) 95%, transparent);
  }

  .nav-link {
    color: var(--color-headline);
  }

  .nav-link::before {
    background: var(--color-button);
    opacity: 0.2;
  }
}

/* Amélioration de l'accessibilité */
.nav-link:focus {
  outline: 2px solid #667eea;
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>