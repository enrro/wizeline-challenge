import Vue from 'vue'
import Router from 'vue-router'
import MoviePage from './components/movies/MoviePage.vue'
import InfoTrainer from './components/movies/InfoTrainer.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'movie-page',
      component: MoviePage
    },
    {
      path: '/infoEntrenador',
      name: 'info-entrenador',
      component: InfoTrainer
    }
  ]
})
