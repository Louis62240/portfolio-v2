<template>
  <section class="hero-section">
    <transition name="fade-slide-right" appear>
      <div class="hero-content">
        <h1 class="hero-title custom-text">{{ $t('hero.name') }}</h1>
        <h2 class="hero-subtitle custom-text">{{ $t('hero.title') }}</h2>
        <h3 class="hero-position custom-text">{{ $t('hero.position') }}</h3>
        <p class="hero-desc custom-text">{{ $t('hero.desc') }}</p>
        <span class="hero-stack" v-html="$t('hero.stack')"></span>
        <div class="hero-links">
          <a href="#portfolio" class="hero-btn custom-text">{{ $t('hero.projects') }}</a>
          <a href="#contact" class="hero-btn custom-text">{{ $t('hero.contact') }}</a>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
// Utilisation de $t pour la traduction avec vue-i18n
</script>

<style scoped>
/* Animation d'entrée fade + slide up */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(40px);
}

.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}

/* Animation d'entrée fade + slide depuis la droite */
.fade-slide-right-enter-active,
.fade-slide-right-leave-active {
  transition: opacity 1s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.fade-slide-right-enter-from,
.fade-slide-right-leave-to {
  opacity: 0;
  transform: translateX(120px);
}

.fade-slide-right-enter-to,
.fade-slide-right-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.hero-section {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: color-mix(in srgb, var(--color-background) 90%, transparent);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.hero-content {
  background: color-mix(in srgb, var(--color-background) 95%, transparent);
  border-radius: 24px;
  padding: 3rem 2.5rem;
  text-align: center;
  max-width: 540px;
  margin: 0 2rem;
  /* border removed for cleaner look */
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--color-button);
}

.hero-subtitle {
  font-size: 1.3rem;
  font-weight: 500;
  margin-bottom: 1.2rem;
  color: var(--color-headline);
}

.hero-desc {
  font-size: 1.05rem;
  font-weight: 400;
  color: var(--color-paragraph);
  margin-bottom: 1.5rem;
  line-height: 1.7;
}

.hero-stack {
  display: block;
  margin-top: 0.7rem;
  margin-bottom: 1.2rem;
  color: var(--color-button);
  font-size: 1.08rem;
}

.hero-links {
  display: flex;
  justify-content: center;
  gap: 1.2rem;
}

.hero-btn {
  display: inline-block;
  padding: 0.7rem 1.5rem;
  background: var(--color-button);
  color: var(--color-button-text);
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
}

.hero-btn:hover {
  background: var(--color-headline);
  color: #222;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.10);
}

@media (max-width: 600px) {
  .hero-content {
    padding: 2rem 1rem;
    max-width: 98vw;
  }

  .hero-title {
    font-size: 1.5rem;
  }

  .hero-subtitle {
    font-size: 1.05rem;
  }
}
</style>
