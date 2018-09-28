import Vue from 'vue'
import Router from 'vue-router'
import MoviePage from './components/movies/MoviePage.vue'
import InfoTrainer from './components/movies/InfoTrainer.vue'
import InfoTrainerJulio from './components/movies/InfoTrainerJulio.vue'
import InfoTrainerDom from './components/movies/InfoTrainerDom.vue'

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
      path: '/infoEntrenadorEdgar',
      name: 'info-entrenador-edgar',
      component: InfoTrainer
    },
    {
      path: '/infoEntrenadorJulio',
      name: 'info-entrenador-julio',
      component: InfoTrainerJulio
    },
    {
      path: '/infoEntrenadorDom',
      name: 'info-entrenador-dom',
      component: InfoTrainerDom
    }
  ]
})
