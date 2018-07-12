<template>
    <footer>
        <h1>{{ copyright }} {{ title }}</h1>
    </footer>
</template>

<script>
import { bus } from '../main'

export default {
    props: {
        title: {
            type: String
        }
    },
    data() {
        return {
            copyright: 'copyright'
        }
    },
    created: function() {
        bus.$on('titleChanged', (data) => {
            this.title = data
        })
    }
}
</script>

<style scoped>
    footer {
        background: #222;
        padding: 10px;
    }

    h1 {
        color: lightgreen;
        text-align: center;
    }
</style>
