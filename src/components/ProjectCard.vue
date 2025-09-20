<template>
  <div class="project-card" @click="handleCardClick">
    <div class="image-wrapper">
      <img :src="image" :alt="title" class="project-image" />
      <div class="overlay">
        <div class="year-badge">{{ year }}</div>
        <div v-if="link" class="view-project-overlay">
          <svg class="external-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="m9 18 6-6-6-6" />
          </svg>
          <span>Voir le projet</span>
        </div>
      </div>
      <div class="gradient-overlay"></div>
    </div>

    <div class="project-content">
      <div class="header-section">
        <h3 class="project-title">{{ title }}</h3>
        <div class="skills">
          <span v-for="(skill, index) in skillList" :key="skill" class="skill"
            :style="{ animationDelay: `${index * 0.1}s` }">
            {{ skill }}
          </span>
        </div>
      </div>

      <div v-if="testimonial" class="testimonial-section">
        <div class="testimonial-content">
          <svg class="quote-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
          </svg>
          <blockquote class="testimonial-text">{{ testimonial }}</blockquote>
          <cite v-if="clientName" class="client-name">— {{ clientName }}</cite>
        </div>
      </div>

      <div class="footer-section">
        <a v-if="link" :href="link" class="project-link" target="_blank" rel="noopener" @click.stop>
          <span>Explorer</span>
          <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </a>
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: { type: String, required: true },
  year: { type: String, required: true },
  image: { type: String, required: true },
  skills: { type: String, required: true },
  link: { type: String, required: false },
  testimonial: { type: String, required: false },
  clientName: { type: String, required: false }
});

const skillList = computed(() => props.skills.split(',').map(s => s.trim()));

const handleCardClick = () => {
  if (props.link) {
    window.open(props.link, '_blank', 'noopener');
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;600;700&display=swap');

.project-card {
  background: linear-gradient(145deg, rgba(255, 255, 254, 0.95), rgba(255, 255, 254, 0.9));
  border-radius: 20px;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(249, 188, 96, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  width: 100%;
  max-width: 480px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border: 2px solid rgba(249, 188, 96, 0.2);
  position: relative;
  backdrop-filter: blur(20px);
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(145deg, rgba(249, 188, 96, 0.08), rgba(0, 70, 67, 0.05));
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
  z-index: 1;
}

.project-card:hover {
  transform: translateY(-16px) scale(1.02);
  box-shadow:
    0 24px 80px rgba(0, 0, 0, 0.5),
    0 0 0 2px rgba(249, 188, 96, 0.6),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
  border-color: rgba(249, 188, 96, 0.8);
}

.project-card:hover::before {
  opacity: 1;
}

.image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  overflow: hidden;
  background: linear-gradient(135deg, #001e1d, #003f3c);
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  filter: brightness(0.9) contrast(1.1);
}

.project-card:hover .project-image {
  transform: scale(1.08);
  filter: brightness(1) contrast(1.2) saturate(1.1);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1.5rem;
  z-index: 2;
}

.gradient-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60%;
  background: linear-gradient(transparent, rgba(0, 70, 67, 0.8));
  z-index: 1;
}

.year-badge {
  background: rgba(249, 188, 96, 0.95);
  color: var(--color-button-text);
  font-family: 'Roboto Mono', monospace;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.5em 1em;
  border-radius: 50px;
  letter-spacing: 1px;
  box-shadow:
    0 4px 16px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-transform: uppercase;
}

.view-project-overlay {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: rgba(255, 255, 254, 0.95);
  color: var(--color-background);
  padding: 0.7rem 1.2rem;
  border-radius: 50px;
  font-family: 'Roboto Mono', monospace;
  font-size: 0.8rem;
  font-weight: 700;
  opacity: 0;
  transform: translateX(30px) scale(0.9);
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(249, 188, 96, 0.3);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}

.project-card:hover .view-project-overlay {
  opacity: 1;
  transform: translateX(0) scale(1);
}

.external-link-icon {
  width: 16px;
  height: 16px;
}

.project-content {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex: 1;
  z-index: 2;
  position: relative;
}

.header-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.project-title {
  font-family: 'Roboto Mono', monospace;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: var(--color-background);
  letter-spacing: -0.02em;
  line-height: 1.2;
  text-shadow: none;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.skill {
  background: linear-gradient(145deg, rgba(0, 70, 67, 0.1), rgba(0, 70, 67, 0.15));
  color: var(--color-background);
  font-family: 'Roboto Mono', monospace;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.5em 1em;
  border-radius: 50px;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  border: 1px solid rgba(0, 70, 67, 0.2);
  letter-spacing: 0.5px;
  text-transform: uppercase;
  opacity: 0;
  animation: skillFadeIn 0.6s ease-out forwards;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}

.skill::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(249, 188, 96, 0.1), transparent);
  transition: left 0.6s;
}

@keyframes skillFadeIn {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.8);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.project-card:hover .skill {
  background: linear-gradient(145deg, var(--color-button), #e6a84d);
  color: var(--color-button-text);
  transform: translateY(-3px);
  box-shadow:
    0 6px 20px rgba(249, 188, 96, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.2);
}

.project-card:hover .skill::before {
  left: 100%;
}

.testimonial-section {
  background: linear-gradient(145deg, rgba(0, 70, 67, 0.08), rgba(0, 70, 67, 0.12));
  border-radius: 16px;
  padding: 1.5rem;
  border: 1px solid rgba(0, 70, 67, 0.2);
  position: relative;
  backdrop-filter: blur(10px);
}

.testimonial-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(145deg, rgba(249, 188, 96, 0.03), transparent);
  border-radius: 16px;
  pointer-events: none;
}

.testimonial-content {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  position: relative;
  z-index: 1;
}

.quote-icon {
  width: 22px;
  height: 22px;
  color: var(--color-button);
  opacity: 0.8;
}

.testimonial-text {
  font-family: 'Roboto Mono', monospace;
  font-style: italic;
  color: var(--color-background);
  line-height: 1.6;
  margin: 0;
  font-size: 0.9rem;
  font-weight: 400;
  opacity: 0.8;
}

.client-name {
  font-family: 'Roboto Mono', monospace;
  font-size: 0.8rem;
  color: var(--color-button);
  font-weight: 600;
  font-style: normal;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: auto;
}

.project-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  background: linear-gradient(145deg, var(--color-button), #e6a84d);
  color: var(--color-button-text);
  font-family: 'Roboto Mono', monospace;
  font-weight: 700;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  font-size: 0.9rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  box-shadow:
    0 6px 20px rgba(249, 188, 96, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.project-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.6s;
}

.project-link:hover::before {
  left: 100%;
}

.project-link:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow:
    0 12px 40px rgba(249, 188, 96, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  background: linear-gradient(145deg, #ffc970, var(--color-button));
}

.arrow-icon {
  width: 18px;
  height: 18px;
  transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

.project-link:hover .arrow-icon {
  transform: translate(4px, -4px) rotate(5deg);
}

/* Container pour 2 projets par ligne */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

@media (max-width: 1000px) {
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .project-card {
    max-width: 100%;
  }
}

@media (max-width: 600px) {
  .project-card {
    border-radius: 16px;
  }

  .project-content {
    padding: 1.5rem;
    gap: 1.2rem;
  }

  .overlay {
    padding: 1.2rem;
  }

  .project-title {
    font-size: 1.3rem;
  }

  .testimonial-section {
    padding: 1.2rem;
  }

  .project-link {
    padding: 0.9rem 1.8rem;
    font-size: 0.85rem;
  }

  .projects-grid {
    padding: 1rem;
    gap: 1.2rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>