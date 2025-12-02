import translations from './UI-translation.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: translations
}))
