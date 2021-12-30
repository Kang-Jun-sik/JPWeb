import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from 'vuetify/lib/locale/en'
import ko from 'vuetify/lib/locale/ko'

Vue.use(VueI18n);

const messages = {
  en: {
    ...require('@/locales/en.json'), //영문 설정
    $vuetify: en,
  },
  ko: {
    ...require('@/locales/ko.json'), //한국어 설정
    $vuetify: ko,
  }
}

/**
 * i18n 객체 생성
 * @returns {VueI18n | VueI18n | VueI18n | VueI18n}
 */
export default new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'ko',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages,
})
