<template>
  <div>
    <h1>{{ title }}</h1>
    <app-content></app-content>
  </div>
</template>

<script>
  import Content from './Content.vue'

  export default {
    components: {
    appContent: Content
    },
    data () {
      return {
        title: 'Simple Vue',
      }
    }
  }
</script>

<style>
h1 {
  color: red;
}
</style>
