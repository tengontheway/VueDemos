<template>
    <div>
        <keep-alive>
            <component v-bind:is="component"></component>
        </keep-alive>
        
        <button v-on:click="changeDynamicComponent">change dynamic component</button>
        <button v-on:click="component = 'form-one'">Show form1</button>
        <button v-on:click="component = 'form-two'">Show form2</button>
    </div>
</template>

<script>
    import FormOne from './components/FormOne.vue'
    import FormTwo from './components/FormTwo.vue'

    export default {
        components: {
            'form-one': FormOne,
            'form-two': FormTwo,
        },
        data () {
            return {
                component: 'form-one'
            }
        },
        methods: {
            changeDynamicComponent: function() {
                if (this.component === 'form-one') {
                    this.component = 'form-two'
                } else {
                    this.component = 'form-one'
                }
            }
        },

    }
</script>

<style>

</style>
