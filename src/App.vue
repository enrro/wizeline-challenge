<template>
  <div id="app">
    <br>
    <router-view/>
  </div>
</template>

<script>
import TodoPage from './components/todo/TodoPage'
export default {
  name: 'App',
  components: {
    TodoPage
  }
}
</script>
