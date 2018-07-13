<template>
    <div>
        <component v-bind:is="component"></component>
        <button v-on:click="toggleComponent">toggle</button>
    </div>
</template>

<script>
    import AddBlog from './components/AddBlog.vue'
    import ShowBlog from './components/ShowBlog.vue'

    export default {
        components: {
            'add-blog': AddBlog,
            'show-blog': ShowBlog,
        },
        data () {
            return {
                component: 'show-blog'
            }
        },
        methods: {
            toggleComponent: function() {
                if (this.component === 'add-blog')
                    this.component = 'show-blog'
                else
                    this.component = 'add-blog'
            }
        }
    }

</script>

<style>

</style>
