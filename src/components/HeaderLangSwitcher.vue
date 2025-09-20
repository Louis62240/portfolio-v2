<template>
  <header class="header">
    <div class="lang-switcher">
      <button v-for="lang in langs" :key="lang.value" :class="['lang-btn', { active: selectedLang === lang.value }]"
        @click="selectLang(lang.value)" :aria-label="lang.label">
        <span class="flag" v-html="lang.flag"></span>
        <span class="lang-label">{{ lang.label }}</span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const langs = [
  {
    value: 'fr',
    label: 'FR',
    flag: `<svg width="22" height="16" viewBox="0 0 22 16"><rect width="7.33" height="16" fill="#0055A4"/><rect x="7.33" width="7.33" height="16" fill="#fff"/><rect x="14.66" width="7.33" height="16" fill="#EF4135"/></svg>`
  },
  {
    value: 'en',
    label: 'EN',
    flag: `<svg width="22" height="16" viewBox="0 0 22 16"><rect width="22" height="16" fill="#00247D"/><path d="M0 0l22 16M22 0L0 16" stroke="#fff" stroke-width="2.5"/><path d="M0 0l22 16M22 0L0 16" stroke="#CF142B" stroke-width="1.2"/><rect x="9" width="4" height="16" fill="#fff"/><rect y="6" width="22" height="4" fill="#fff"/><rect x="10" width="2" height="16" fill="#CF142B"/><rect y="7" width="22" height="2" fill="#CF142B"/></svg>`
  },
  {
    value: 'es',
    label: 'ES',
    flag: `<svg width="22" height="16" viewBox="0 0 22 16"><rect width="22" height="16" fill="#AA151B"/><rect y="4" width="22" height="8" fill="#F1BF00"/></svg>`
  }
]

const { locale } = useI18n()
const selectedLang = ref(locale.value)

function selectLang(lang) {
  selectedLang.value = lang
  locale.value = lang
  // Optionnel : persister la langue
  // localStorage.setItem('lang', lang)
}

// Optionnel : synchroniser avec localStorage au chargement
if (typeof window !== 'undefined') {
  const stored = localStorage.getItem('lang')
  if (stored && langs.some(l => l.value === stored)) {
    selectedLang.value = stored
    locale.value = stored
  }
}

// Optionnel : surveiller les changements et stocker
watch(selectedLang, (val) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('lang', val)
  }
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  right: 0;
  padding: 0.5rem 1.2rem;
  z-index: 1000;
  background: color-mix(in srgb, var(--color-background) 85%, transparent);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom-left-radius: 16px;
  transition: all 0.3s cubic-bezier(.4, 1, .7, 1);
}

.lang-switcher {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.lang-btn {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  background: transparent;
  border: none;
  border-radius: 8px;
  padding: 0.25rem 0.7rem 0.25rem 0.5rem;
  font-size: 1rem;
  color: var(--color-paragraph, #333);
  cursor: pointer;
  transition: background 0.18s, color 0.18s, box-shadow 0.18s;
  outline: none;
  position: relative;
  min-width: 48px;
  font-weight: 500;
}

.lang-btn .flag {
  width: 22px;
  height: 16px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 0.2rem;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.07));
}

.lang-btn .lang-label {
  font-size: 0.98rem;
  letter-spacing: 0.5px;
  margin-left: 0.1rem;
}

.lang-btn.active,
.lang-btn:focus {
  background: var(--color-button, #e0e7ff);
  color: var(--color-button-text, #222);
  box-shadow: 0 2px 8px 0 rgba(102, 126, 234, 0.08);
}

.lang-btn:hover:not(.active) {
  background: var(--color-button, #f3f6fd);
  color: var(--color-button-text, #222);
}
</style>
