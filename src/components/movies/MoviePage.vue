<template>
  <div>

    <div class="container">
      <center><h1>Entrenadores</h1></center>
    </div>

    <movie-nav/>

    <div class="container">


      <div :class="movieContainerClasses" class="row movie-container">

        <div v-for="(movie, index) in movies" :key = "index" class="col-xs-12 col-sm-6 col-lg-3">
          <movie-card v-bind="movie"/>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import MovieCard from './MovieCard'
import MovieNav from './MovieNav'

export default {
  components: {
    MovieCard,
    MovieNav
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