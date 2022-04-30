import { createI18n } from 'vue-i18n'
// import { createI18n } from "vue-i18n/dist/vue-i18n.esm-bundler.js";
const messages = {
    en: {
        hello: 'Hola',
        appTitle: 'Web application',
        menu : "Menu",
        movies: "Movies",
        actors: "Actors",
        companies: "Companies",
        errorMsg : 'Error',
        noDataMessage : 'No movies found'

    },

    es: {
      hello: 'Hello',
        appTitle: 'Aplicación web',
        menu : 'Menú',
        movies: "Películas",
        actors: "Actores",
        companies: "Compañías",
        errorMsg : 'Error',
        noDataMessage : 'No se han encontrado películas'
    }
};
const i18n = createI18n({
    legacy: false,
    locale: 'es',
    fallbackLocale: 'es',
    globalInjection: true,
    messages
})
export default i18n