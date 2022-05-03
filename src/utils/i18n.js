import { createI18n } from 'vue-i18n'
const messages = {
  en: {
    hello: 'Hola',
    appTitle: 'Web application',
    menu: 'Menu',
    movies: 'Movies',
    actors: 'Actors',
    companies: 'Companies',
    company: 'Company',
    errorMsg: 'Error',
    noDataMessage: 'No movies found',
    rating: 'Rating',
    duration: 'Duration',
    genres: 'Genres',
    title: 'Title',
    poster: 'Poster (url)',
    confirmation: 'Are you sure to delete the movie?',
    add_genre: 'Add a genre',
    year: 'Year',
    select_actor: 'Select an actor',
    select_company: 'Select a compamy',
    new_movie: 'New movie',
    add: 'Add',
    update: 'Update'

  },

  es: {
    hello: 'Hello',
    appTitle: 'Aplicación web',
    menu: 'Menú',
    movies: 'Películas',
    actors: 'Actores',
    companies: 'Estudios',
    company: 'Estudio',
    errorMsg: 'Error',
    noDataMessage: 'No se han encontrado películas',
    rating: 'Puntuación',
    duration: 'Duración',
    genres: 'Géneros',
    title: 'Título',
    poster: 'Póster (url)',
    confirmation: '¿Está seguro de eliminar la película?',
    add_genre: 'Añade un género',
    year: 'Año',
    select_actor: 'Selecciona un actor',
    select_company: 'Selecciona un estudio',
    new_movie: 'Nueva película',
    add: 'Añadir',
    update: 'Actualizar'
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