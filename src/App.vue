<template>
    <div>
        <app-header></app-header>
        <app-contents></app-contents>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './components/Header.vue'
    import Footer from './components/Footer.vue'
    import Contents from './components/Contents.vue'

    export default {
        components: {
            'app-header': Header,
            'app-footer': Footer,
            'app-contents': Contents,
        },
        data () {
            return {}
        }
    }
</script>

<style>

</style>
