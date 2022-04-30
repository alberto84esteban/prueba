import { createI18n } from 'vue-i18n'
// import { createI18n } from "vue-i18n/dist/vue-i18n.esm-bundler.js";
const messages = {
    en: {
        message: {
            hello: 'hello world'
        }
    },
    es: {
        message: {
            hello: 'Таки здравствуйте'
        }
    }
}
const i18n = createI18n({
    locale: 'es',
    messages
})
export default i18n