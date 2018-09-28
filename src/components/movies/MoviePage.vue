<template>
  <div>
    <center><img src="../../assets/logo.png" height="100" width="100"></center>
    <div class="container">
      <h1 style="color: #ffffff; font-family: Arial Black"><center>Entrenadores</center></h1>
    </div>

    <div class="container circular" :style="{ backgroundImage: 'url(/../../../assets/wallpaper.jpg)' }">


      <div :class="movieContainerClasses" class="row movie-container">
        <div v-for="(trainer, index) in entrenadores" :key = "index" class="col-xs-12 col-sm-6 col-lg-3">
          <movie-card v-bind="trainer"/>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import MovieCard from './MovieCard'

export default {
  data () {
    return {
      entrenadores: [
        {title: "Edgar", description: "Especialista en Caniches", image: require('../../assets/Black.png')},
        {title: "Julio", description: "Especialista en Pitbull", image: require('../../assets/Red_(game).png')},
        {title: "Dom", description: "Especialista en Schnauzer", image: require('../../assets/entrenador.png')}
      ]
    }
  },
  components: {
    MovieCard
  },
  computed: {
    message(){
      return this.$store.state.hello
    },
    movies() {
      return this.$store.getters.movieCards
    },
    movieContainerClasses () {
      return {
        'loading': this.$store.state.loading
      }
    },
    isDiscover() {
      return this.$store.state.currentSection === 'discover'
    }
  },
  created(){
    //Fetch API data
    this.$store.dispatch('fetchMovies')
  }
}
</script>

<style scoped>
.movie-container {
  margin-top: 10px;
  margin-bottom: 10px;
  transition: 0.3s opacity;
}

.loading{
  opacity: 0.2;
}
</style>