<template>
  
  <div class="card club-card" >
    <img class="card-img-top" :src="image" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <h3 class="card-text">{{ description }}</h3>
      <br>
      <a href="#" class="btn btn-primary">Más información</a>
    </div>
  </div>
</template>

<script>
import MovieCardVoteAverage from './MovieCardVoteAverage'

export default {
  components: {
    MovieCardVoteAverage
  },

  data () {
    return {
      imageError: false
    }
  },

  props: {
    title: {
      type: String
    },
    description: {
      type: String
    },
    image: {
      type: String,
      default: "./entrenador.png"
    }
  },

  computed: {
    workingImage () {
      if (this.imageError) {
        const escapedMovieTitle = this.title.replace(' ','+')
        return `http://via.placeholder.com/370x556?text=${escapedMovieTitle}`
      }
      return this.image
    },
    saved () {
      return this.$store.getters.savedMoviesIds.indexOf(this.id) >= 0
    },
    movieObject () {
      return {
        'id': this.id,
        'title': this.title,
        'description': this.description,
        'image': this.image,
      }
    },
  },

  methods: {
    saveMovie () {
      this.$store.commit('saveMovie', this.movieObject)
    },
    removeSavedMovie (movieObject) {
      this.$store.commit('removeMovie', this.movieObject)
    }
  }
}
</script>

<style scoped>
.movie-card {
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, .5);
  color: white;
  position: relative;
  overflow: hidden;
}
.club-card{
  margin-top: 25px;
  margin-bottom: 25px;
  margin-left: 5px;
}
.movie-card-saved-icon {
  width: 30px;
  height: 30px;
  top: 10px;
  right: 10px;
  position: absolute
}
.movie-card-body {
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 20px;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.3s, transform 0.3s;
}
.movie-card:hover .movie-card-body {
  opacity: 1;
  transform: translateY(0);
}
.text-container {
  max-height: 300px;
  margin-bottom: 20px;
  overflow: hidden;
}
.card-text {
  font-size: 18px;
}
.save-btn {
  float: right;
}
</style>
