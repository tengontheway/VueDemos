<template>
    <footer>
        <h1>{{ copyright }} {{ title }}</h1>
    </footer>
</template>

<script>
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
