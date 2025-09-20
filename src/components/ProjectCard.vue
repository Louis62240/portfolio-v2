<template>
  <div class="project-card" @click="handleCardClick">
    <div v-if="isUpwork" class="upwork-badge">
      <img src="/images/upwork-logo.png" alt="Upwork" class="upwork-logo" />
    </div>
    <div class="image-section">
      <img :src="image" :alt="title" class="project-image" />
      <div class="year-badge">{{ year }}</div>

    </div>

    <div class="content-section">
      <h3 class="project-title">{{ title }}</h3>

      <div class="skills">
        <span v-for="skill in skillList" :key="skill" class="skill">
          <img v-if="getSkillIcon(skill)" :src="getSkillIcon(skill)" class="skill-icon" :alt="skill + ' icon'"
            loading="lazy" />
          {{ skill }}
        </span>
      </div>

      <div class="footer">
        <a v-if="link" :href="link" class="project-link" target="_blank" rel="noopener" @click.stop>
          Voir le projet
          <svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M7 17L17 7M7 7h10v10" />
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
.project-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.2s ease;
  cursor: pointer;
  border: 1px solid #e5e5e5;
  position: relative;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.image-section {
  position: relative;
  aspect-ratio: 16/9;
  overflow: hidden;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image {
  transform: scale(1.05);
}


.year-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: var(--color-button);
  color: var(--color-button-text);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  z-index: 2;
  box-shadow: 0 2px 8px rgba(249, 188, 96, 0.15);
  letter-spacing: 0.5px;
}


.upwork-badge {
  position: absolute;
  bottom: 12px;
  right: 12px;
  border-radius: 16px;
  padding: 3px 10px 3px 6px;
  display: flex;
  align-items: center;
  z-index: 2;
}

.upwork-logo {
  width: 51px;
  height: 20px;
  display: block;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.08));
}

.content-section {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
  line-height: 1.3;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill {
  background: #f3f4f6;
  color: #6b7280;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 0.75rem;
  font-weight: 500;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 4px;
}

.skill-icon {
  width: 18px;
  height: 18px;
  margin-right: 4px;
  display: inline-block;
  vertical-align: middle;
}

.project-card:hover .skill {
  background: #e5e7eb;
  color: #374151;
}

.footer {
  margin-top: auto;
  padding-top: 8px;
  display: flex;
  justify-content: flex-end;
}


.project-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--color-button);
  color: var(--color-button-text);
  padding: 10px 16px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 600;
  transition: all 0.2s ease;
}


.project-link:hover {
  background: #ffd789;
  color: var(--color-button-text);
  transform: translateX(2px);
}

.arrow {
  width: 16px;
  height: 16px;
  transition: transform 0.2s ease;
}

.project-link:hover .arrow {
  transform: translate(2px, -2px);
}

/* Responsive */
@media (max-width: 768px) {
  .content-section {
    padding: 16px;
    gap: 12px;
  }

  .project-title {
    font-size: 1.125rem;
  }
}
</style>