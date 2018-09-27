<template>
<ul class="list-gropu">
      <li v-for="(task, index) in listTasks" v-bind:key="index" class="list-group-item">
        {{ task.description }} - {{ task.isDone ?  'Completed' : 'Pending' }}
        <button type="button" class="btn btn-sm btn-primary float-right" v-on:click="toggle(task)">
          Toggle
        </button>
      </li>
    </ul>
</template>

<script>
    export default{
        props: {
            listTasks: {
                type: Array,
                required: true
            }
        },
        methods:{
        toggle(task) {
            this.$emit('toggle', task)
        }
    }
}
</script>