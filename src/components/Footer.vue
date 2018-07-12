<template>
    <footer>
        <h1>{{ copyright }}</h1>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            copyright: 'Copyright 2017 cisiondata'
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
