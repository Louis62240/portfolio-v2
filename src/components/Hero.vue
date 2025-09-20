<template>
  <section class="hero-section">
    <div class="hero-content">
      <h1 class="hero-title custom-text">Louis Hanquiez</h1>
      <h2 class="hero-subtitle custom-text">Développeur Full-stack</h2>
      <p class="hero-desc custom-text">
        Passionné par le développement web et logiciel, je conçois des applications modernes, performantes et
        accessibles.<br>
        <span class="hero-stack">Stack : <strong>TypeScript</strong>, <strong>Vue.js</strong>, <strong>Node.js</strong>,
          <strong>Three.js</strong>, <strong>HTML/CSS</strong>, <strong>Python</strong></span>
      </p>
      <div class="hero-links">
        <a href="#portfolio" class="hero-btn custom-text">Voir mes projets</a>
        <a href="#contact" class="hero-btn custom-text">Me contacter</a>
      </div>
    </div>
  </section>
</template>

<script setup>
// Pas de logique JS nécessaire pour ce composant statique
</script>

<style scoped>
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
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
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
  color: var(--color-button);
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
