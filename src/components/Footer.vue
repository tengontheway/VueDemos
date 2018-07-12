<template>
    <footer>
        <h1>{{ copyright }}</h1>
    </footer>
</template>

<script>
export default {
    props: {
        copyright: {
            type: String,
            required: true
        }
    },
    data() {
        return {

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
