<template>
  <div class="project-card" @click="handleCardClick" :class="{ 'is-upwork': isUpwork }">
    <!-- AI Robot indicator -->
    <div class="ai-indicator">
      <div class="ai-core"></div>
      <div class="ai-rings">
        <div class="ring ring-1"></div>
        <div class="ring ring-2"></div>
      </div>
    </div>

    <!-- Section image with modern glass effect -->
    <div class="image-section">
      <div class="image-container">
        <img :src="image" :alt="title" class="project-image" />
        <div class="image-mesh"></div>
        <div class="glass-overlay"></div>
      </div>

      <!-- Neural scan effect -->
      <div class="neural-scan">
        <div class="scan-beam"></div>
        <div class="scan-grid">
          <div class="grid-line" v-for="n in 6" :key="n"></div>
        </div>
      </div>

      <!-- Modern HUD -->
      <div class="modern-hud">
        <div class="hud-frame">
          <div class="frame-corner tl"></div>
          <div class="frame-corner tr"></div>
          <div class="frame-corner bl"></div>
          <div class="frame-corner br"></div>
        </div>
        <div class="analysis-text">
          <span class="analysis-status">●</span>
          <span>AI ANALYSIS</span>
        </div>
      </div>

      <!-- Floating badges -->
      <div class="year-badge">
        <div class="badge-glow"></div>
        <span>{{ year }}</span>
      </div>

      <div v-if="isUpwork" class="upwork-badge">
        <div class="badge-pulse"></div>
        <img src="/images/upwork-logo.png" alt="Upwork" class="upwork-logo" />
      </div>
    </div>

    <!-- Modern content section -->
    <div class="content-section">
      <!-- Title with modern typography -->
      <div class="title-section">
        <div class="title-prefix">[PROJECT]</div>
        <h3 class="project-title">{{ title }}</h3>
        <div class="title-glow"></div>
      </div>

      <!-- Tech stack with modern pills -->
      <div class="tech-stack">
        <div class="stack-header">
          <div class="stack-icon">⚡</div>
          <span class="stack-label">TECH STACK</span>
          <div class="stack-counter">{{ skillList.length }}</div>
        </div>
        <div class="tech-pills">
          <div v-for="(skill, index) in skillList" :key="skill" class="tech-pill"
            :style="{ '--delay': index * 0.1 + 's' }">
            <div class="pill-bg"></div>
            <img v-if="getSkillIcon(skill)" :src="getSkillIcon(skill)" class="tech-icon" :alt="skill" loading="lazy" />
            <span class="tech-name">{{ skill }}</span>
            <div class="pill-shine"></div>
          </div>
        </div>
      </div>

      <!-- Modern CTA button -->
      <div class="cta-section">
        <a v-if="link" :href="link" class="cta-button" target="_blank" rel="noopener" @click.stop>
          <div class="button-bg">
            <div class="bg-gradient"></div>
            <div class="bg-mesh"></div>
          </div>
          <div class="button-content">
            <div class="button-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M13 17l5-5-5-5M6 17l5-5-5-5" />
              </svg>
            </div>
            <span class="button-text">Explore Project</span>
          </div>
          <div class="button-glow"></div>
        </a>
      </div>
    </div>

    <!-- Floating particles -->
    <div class="particle-system">
      <div class="particle" v-for="n in 8" :key="n" :style="{ '--i': n }"></div>
    </div>

    <!-- Modern border effect -->
    <div class="card-border">
      <div class="border-glow"></div>
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
  isUpwork: { type: Boolean, default: false }
});

const skillList = computed(() => props.skills.split(',').map(s => s.trim()));

const skillIcons = {
  'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'PHP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  'Laravel': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg',
  'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  'GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  'Sass': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
  'Bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
  'Tailwind': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
  'WordPress': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg',
  'Figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  'Photoshop': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg',
  'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
  'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
};

const getSkillIcon = (skill) => {
  return skillIcons[skill] || '';
};

const handleCardClick = () => {
  if (props.link) {
    window.open(props.link, '_blank', 'noopener');
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

.project-card {
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%),
    rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(20px) saturate(1.2);
  border: 1px solid rgba(249, 188, 96, 0.15);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  cursor: pointer;
  position: relative;
  font-family: 'Inter', sans-serif;
  height: 420px;
  display: flex;
  flex-direction: column;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.project-card:hover {
  transform: translateY(-8px) scale(1.02);
  border-color: rgba(249, 188, 96, 0.4);
  box-shadow:
    0 20px 60px rgba(249, 188, 96, 0.15),
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

/* AI Indicator */
.ai-indicator {
  position: absolute;
  top: 16px;
  left: 16px;
  width: 32px;
  height: 32px;
  z-index: 10;
}

.ai-core {
  width: 8px;
  height: 8px;
  background: var(--color-button);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 12px var(--color-button);
  animation: coreGlow 2s ease-in-out infinite;
}

.ai-rings {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.ring {
  position: absolute;
  border: 1px solid rgba(249, 188, 96, 0.3);
  border-radius: 50%;
  animation: ringRotate 8s linear infinite;
}

.ring-1 {
  width: 20px;
  height: 20px;
  top: 6px;
  left: 6px;
  border-top-color: var(--color-button);
}

.ring-2 {
  width: 32px;
  height: 32px;
  top: 0;
  left: 0;
  border-right-color: var(--color-button);
  animation-duration: 6s;
  animation-direction: reverse;
}

@keyframes coreGlow {

  0%,
  100% {
    box-shadow: 0 0 12px var(--color-button);
  }

  50% {
    box-shadow: 0 0 20px var(--color-button), 0 0 30px rgba(249, 188, 96, 0.5);
  }
}

@keyframes ringRotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

/* Modern Image Section */
.image-section {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.image-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  filter: contrast(1.1) saturate(1.1) brightness(0.95);
}

.image-mesh {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    linear-gradient(rgba(249, 188, 96, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(249, 188, 96, 0.02) 1px, transparent 1px);
  background-size: 20px 20px;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.glass-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 50%,
      rgba(0, 0, 0, 0.2) 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.project-card:hover .project-image {
  transform: scale(1.08);
  filter: contrast(1.2) saturate(1.2) brightness(1.05);
}

.project-card:hover .image-mesh,
.project-card:hover .glass-overlay {
  opacity: 1;
}

/* Neural Scan */
.neural-scan {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.scan-beam {
  position: absolute;
  top: -5px;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg,
      transparent,
      rgba(249, 188, 96, 0.8),
      var(--color-button),
      rgba(249, 188, 96, 0.8),
      transparent);
  box-shadow: 0 0 20px var(--color-button);
  animation: neuralScan 3s ease-in-out infinite;
}

.scan-grid {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 10%;
}

.grid-line {
  width: 1px;
  height: 100%;
  background: linear-gradient(to bottom,
      transparent,
      rgba(249, 188, 96, 0.3),
      transparent);
  animation: gridPulse 2s ease-in-out infinite;
  animation-delay: calc(var(--i) * 0.2s);
}

@keyframes neuralScan {

  0%,
  20% {
    transform: translateY(0);
    opacity: 0;
  }

  25%,
  75% {
    opacity: 1;
  }

  80%,
  100% {
    transform: translateY(210px);
    opacity: 0;
  }
}

@keyframes gridPulse {

  0%,
  100% {
    opacity: 0.2;
  }

  50% {
    opacity: 0.8;
  }
}

.project-card:hover .neural-scan {
  opacity: 1;
}

/* Modern HUD */
.modern-hud {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 3;
}

.hud-frame {
  position: absolute;
  top: 8px;
  left: 8px;
  right: 8px;
  bottom: 8px;
  pointer-events: none;
}

.frame-corner {
  position: absolute;
  width: 24px;
  height: 24px;
  border: 2px solid var(--color-button);
  filter: drop-shadow(0 0 8px rgba(249, 188, 96, 0.5));
}

.frame-corner.tl {
  top: 0;
  left: 0;
  border-right: none;
  border-bottom: none;
  border-radius: 4px 0 0 0;
}

.frame-corner.tr {
  top: 0;
  right: 0;
  border-left: none;
  border-bottom: none;
  border-radius: 0 4px 0 0;
}

.frame-corner.bl {
  bottom: 0;
  left: 0;
  border-right: none;
  border-top: none;
  border-radius: 0 0 0 4px;
}

.frame-corner.br {
  bottom: 0;
  right: 0;
  border-left: none;
  border-top: none;
  border-radius: 0 0 4px 0;
}

.analysis-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--color-button);
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(0, 0, 0, 0.7);
  padding: 6px 12px;
  border-radius: 20px;
  border: 1px solid rgba(249, 188, 96, 0.3);
  backdrop-filter: blur(10px);
  text-shadow: 0 0 10px var(--color-button);
}

.analysis-status {
  animation: statusBlink 1.5s infinite;
  font-size: 0.6rem;
}

@keyframes statusBlink {

  0%,
  70% {
    opacity: 1;
  }

  85% {
    opacity: 0.3;
  }
}

.project-card:hover .modern-hud {
  opacity: 1;
}

/* Floating Badges */
.year-badge {
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(249, 188, 96, 0.3);
  border-radius: 12px;
  padding: 8px 12px;
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-button);
  z-index: 5;
  position: relative;
  overflow: hidden;
}

.badge-glow {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(249, 188, 96, 0.2), transparent);
  transition: left 0.6s ease;
}

.project-card:hover .badge-glow {
  left: 100%;
}

.upwork-badge {
  position: absolute;
  bottom: 16px;
  right: 16px;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(249, 188, 96, 0.3);
  border-radius: 12px;
  padding: 6px 8px;
  z-index: 5;
  position: relative;
  overflow: hidden;
}

.badge-pulse {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(249, 188, 96, 0.1);
  animation: badgePulse 3s infinite;
}

@keyframes badgePulse {

  0%,
  100% {
    opacity: 0;
    transform: scale(1);
  }

  50% {
    opacity: 1;
    transform: scale(1.05);
  }
}

.upwork-logo {
  width: 36px;
  height: 14px;
  display: block;
  position: relative;
  z-index: 1;
}

/* Modern Content */
.content-section {
  padding: 24px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
  position: relative;
}

.title-section {
  position: relative;
}

.title-prefix {
  font-size: 0.65rem;
  font-weight: 500;
  color: rgba(249, 188, 96, 0.8);
  letter-spacing: 2px;
  margin-bottom: 4px;
  font-family: 'Inter', sans-serif;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-headline);
  margin: 0;
  line-height: 1.3;
  font-family: 'Inter', sans-serif;
  letter-spacing: -0.025em;
  position: relative;
  z-index: 1;
}

.title-glow {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--color-button), transparent);
  transform: translateY(-50%) scaleX(0);
  transform-origin: left;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.project-card:hover .title-glow {
  transform: translateY(-50%) scaleX(1);
}

/* Tech Stack */
.tech-stack {
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
}

.stack-header {
  display: flex;
  align-items: center;
  gap: 8px;
}

.stack-icon {
  font-size: 0.9rem;
  color: var(--color-button);
}

.stack-label {
  font-size: 0.7rem;
  font-weight: 600;
  color: rgba(249, 188, 96, 0.9);
  letter-spacing: 1px;
  font-family: 'Inter', sans-serif;
}

.stack-counter {
  margin-left: auto;
  background: rgba(249, 188, 96, 0.15);
  color: var(--color-button);
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 0.65rem;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
}

.tech-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-pill {
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(249, 188, 96, 0.15);
  border-radius: 20px;
  padding: 6px 10px;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.7rem;
  font-weight: 500;
  color: var(--color-paragraph);
  font-family: 'Inter', sans-serif;
  backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  animation: pillSlideIn 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  animation-delay: var(--delay);
  opacity: 0;
  transform: translateY(10px);
  overflow: hidden;
}

@keyframes pillSlideIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.pill-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(249, 188, 96, 0.1);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.tech-pill:hover {
  transform: translateY(-2px);
  border-color: rgba(249, 188, 96, 0.4);
  box-shadow: 0 4px 20px rgba(249, 188, 96, 0.15);
}

.tech-pill:hover .pill-bg {
  opacity: 1;
}

.tech-icon {
  width: 16px;
  height: 16px;
  transition: transform 0.3s ease;
}

.tech-pill:hover .tech-icon {
  transform: rotate(5deg) scale(1.1);
}

.pill-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.tech-pill:hover .pill-shine {
  left: 100%;
}

/* Modern CTA */
.cta-section {
  margin-top: auto;
}

.cta-button {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 44px;
  text-decoration: none;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  transform-origin: center;
}

.button-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.bg-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, var(--color-button) 0%, #ffcc44 100%);
}

.bg-mesh {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.15) 1px, transparent 0);
  background-size: 20px 20px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.button-content {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--color-button-text);
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 0.85rem;
}

.button-icon {
  width: 16px;
  height: 16px;
  transition: transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.button-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.3), transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(249, 188, 96, 0.4);
}

.cta-button:hover .bg-mesh,
.cta-button:hover .button-glow {
  opacity: 1;
}

.cta-button:hover .button-icon {
  transform: translateX(2px);
}

/* Particle System */
.particle-system {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
}

.particle {
  position: absolute;
  width: 2px;
  height: 2px;
  background: var(--color-button);
  border-radius: 50%;
  opacity: 0;
  animation: particleFloat 4s infinite;
  animation-delay: calc(var(--i) * 0.5s);
}

.particle:nth-child(1) {
  top: 10%;
  left: 15%;
}

.particle:nth-child(2) {
  top: 30%;
  left: 85%;
}

.particle:nth-child(3) {
  top: 50%;
  left: 10%;
}

.particle:nth-child(4) {
  top: 70%;
  left: 75%;
}

.particle:nth-child(5) {
  top: 20%;
  left: 60%;
}

.particle:nth-child(6) {
  top: 80%;
  left: 30%;
}

.particle:nth-child(7) {
  top: 60%;
  left: 90%;
}

.particle:nth-child(8) {
  top: 40%;
  left: 5%;
}

@keyframes particleFloat {

  0%,
  100% {
    opacity: 0;
    transform: translateY(0) scale(1);
  }

  25% {
    opacity: 0.8;
    transform: translateY(-10px) scale(1.2);
  }

  50% {
    opacity: 0.4;
    transform: translateY(-15px) scale(0.8);
  }

  75% {
    opacity: 0.9;
    transform: translateY(-5px) scale(1.1);
  }
}

.project-card:hover .particle {
  animation-play-state: running;
}

/* Card Border */
.card-border {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 20px;
  pointer-events: none;
  z-index: 1;
}

.border-glow {
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  background: linear-gradient(45deg,
      transparent,
      rgba(249, 188, 96, 0.1),
      transparent,
      rgba(249, 188, 96, 0.1),
      transparent);
  background-size: 400% 400%;
  border-radius: 20px;
  opacity: 0;
  transition: opacity 0.4s ease;
  animation: borderFlow 8s ease-in-out infinite;
}

@keyframes borderFlow {

  0%,
  100% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }
}

.project-card:hover .border-glow {
  opacity: 1;
}

/* Responsive Design */
@media (max-width: 768px) {
  .project-card {
    height: 400px;
    border-radius: 16px;
  }

  .ai-indicator {
    width: 28px;
    height: 28px;
    top: 12px;
    left: 12px;
  }

  .ai-core {
    width: 6px;
    height: 6px;
  }

  .ring-1 {
    width: 16px;
    height: 16px;
    top: 6px;
    left: 6px;
  }

  .ring-2 {
    width: 28px;
    height: 28px;
  }

  .image-section {
    height: 180px;
  }

  .content-section {
    padding: 20px 16px 16px;
    gap: 16px;
  }

  .project-title {
    font-size: 1.1rem;
  }

  .tech-pills {
    gap: 6px;
  }

  .tech-pill {
    padding: 4px 8px;
    font-size: 0.65rem;
  }

  .tech-icon {
    width: 14px;
    height: 14px;
  }

  .cta-button {
    height: 40px;
  }

  .button-content {
    font-size: 0.8rem;
  }

  .frame-corner {
    width: 20px;
    height: 20px;
  }

  .year-badge,
  .upwork-badge {
    top: 12px;
    right: 12px;
    padding: 6px 10px;
    border-radius: 10px;
    font-size: 0.7rem;
  }

  .upwork-badge {
    bottom: 12px;
    top: auto;
    padding: 4px 6px;
  }

  .upwork-logo {
    width: 32px;
    height: 12px;
  }

  .analysis-text {
    font-size: 0.7rem;
    padding: 4px 8px;
  }

  .card-border .border-glow {
    border-radius: 16px;
  }

  /* Disable heavy animations on mobile for performance */
  .neural-scan,
  .particle-system {
    display: none;
  }
}

/* Dark mode compatibility */
@media (prefers-color-scheme: dark) {
  .project-card {
    background:
      linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%),
      rgba(0, 0, 0, 0.4);
  }

  .tech-pill {
    background: rgba(255, 255, 255, 0.03);
  }
}
</style>