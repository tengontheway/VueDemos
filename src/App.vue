<template>
    <div>
        <app-header></app-header>
        <router-view></router-view>
    </div>
</template>

<script>
    import AddBlog from './components/AddBlog.vue'
    import ShowBlog from './components/ShowBlog.vue'
    import ListBlog from './components/ListBlog.vue'
    import Header from './components/Header.vue'

    export default {
        components: {
            'add-blog': AddBlog,
            'show-blog': ShowBlog,
            'list-blog': ListBlog,
            'app-header': Header,
        },
        data () {
            return {
                component: 'sh ow-blog'
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

<style scoped>

</style>
