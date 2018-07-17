<template>
    <div id="single-blog">
        <h1>{{ blog.title }}</h1>
        <article>{{ blog.content }}</article>
    </div>
</template>

<script>
const axios = require('axios');

export default {
    data: function() {
        return {
            id: this.$route.params.id,
            blog: {}
        }
    },

    created() {
        axios.get('https://testvue-c9d7d.firebaseio.com/posts/' + this.id + '.json').then( data => {
            this.blog = data.data
        })
    }
}
</script>

<style scoped>
    #single-blog {
        max-width: 960px;
        margin: 0px auto;
    }
</style>