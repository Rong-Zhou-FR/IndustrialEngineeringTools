<template>
  <div class="language-switcher">
    <button
      v-for="locale in availableLocales"
      :key="locale.code"
      :class="['lang-btn', { active: currentLocale === locale.code }]"
      @click="switchLanguage(locale.code)"
    >
      {{ locale.name }}
    </button>
  </div>
</template>

<script setup>
const { locale, locales } = useI18n()

const currentLocale = computed(() => locale.value)
const availableLocales = computed(() => locales.value)

const switchLanguage = (code) => {
  locale.value = code
}
</script>

<style scoped>
.language-switcher {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
}

.lang-btn {
  padding: 8px 16px;
  border: 2px solid #667eea;
  background: white;
  color: #667eea;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.lang-btn:hover {
  background: #f0f4ff;
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.lang-btn.active {
  background: #667eea;
  color: white;
}
</style>
