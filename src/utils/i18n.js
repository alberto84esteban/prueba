import { createI18n } from 'vue-i18n'
const messages = {
  en: {
    hello: 'Hola',
    appTitle: 'Web application',
    menu : 'Menu',
    movies: 'Movies',
    actors: 'Actors',
    companies: 'Companies',
    company: 'Company',
    errorMsg : 'Error',
    noDataMessage : 'No movies found',
    rating: 'Rating',
    duration: 'Duration',
    genres: 'Genres',
    confirmation: 'Are you sure to delete the movie?'

  },

    es: {
      hello: 'Hello',
        appTitle: 'Aplicación web',
        menu : 'Menú',
        movies: 'Películas',
        actors: 'Actores',
        companies: 'Estudios',
        company: 'Estudio',
        errorMsg : 'Error',
        noDataMessage : 'No se han encontrado películas',
        rating: 'Puntuación',
        duration: 'Duración',
        genres: 'Géneros',
        confirmation: '¿Está seguro de eliminar la película?'
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