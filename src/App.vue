<template>
    <div>
        <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
        <app-contents v-bind:users="users"></app-contents>
        <hr />
        <app-contents v-bind:users="users"></app-contents>
        <app-footer v-bind:title="title"></app-footer>
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
            return {
                users: [
                    {name: 'tzt', speciality: 'tzt is super man!', show: false},
                    {name: 'cai', speciality: 'cai is super man!', show: false},
                    {name: 'ye', speciality: 'ye is super man!', show: false},
                    {name: 'he', speciality: 'he is super man!', show: false},
                    {name: 'li', speciality: 'li is super man!', show: false},
                    {name: 'wang', speciality: 'wang is super man!', show: false},
                ],
                title: 'Component Test',
            }
        },
        methods: {
            updateTitle: function(newTitle) {
                this.title = newTitle
            }
        }
    }
</script>

<style>

</style>
