<template>
    <div v-theme:column="'narrow'" id="all-blogs">
        <h1>All blog articles</h1>
        <input id="search-input" type="text" placeholder="search blogs" v-model="search"/>
        <div v-for="blog in filterBlogs" class="single-blog">
            <router-link v-bind:to="'/blog/' + blog.id"><h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
            </router-link>
            <article>{{ blog.content | mini-article }}</article>
        </div>
    </div>
</template>

<script>
    import SearchMixin from '../minins/SearchMixin'
    const axios = require('axios');

    export default {

        data() {
            return {
                search: '',
                blogs: [
                ]
            }
        },

        created() {
            axios.get('https://testvue-c9d7d.firebaseio.com/posts.json').then(data => {
                let articles = data.data

                let blogArray = []
                for (let k in articles) {
                    articles[k].id = k
                    blogArray.push(articles[k])
                }
                this.blogs = blogArray
                console.log(this.blogs)
            })
        },
        computed: {},
        filters: {
            toUppercase(value) {
                return value.toUpperCase()
            }
        },
        directives: {
            'rainbow': {
                bind(el, binding, vnode) {
                    el.style.color = '#' + Math.random().toString().slice(2, 8)
                }
            }
        },
        mixins: [SearchMixin]

    }
</script>

<style scoped>
    #all-blogs {
        max-width: 800px;
        margin: 0 auto;
    }

    .single-blog {
        padding: 10px 20px;
        margin: 20px 0;
        box-sizing: border-box;
        background: #eee;
    }

    #search-input {
        width: 100%;
    }

</style>