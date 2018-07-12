<template>
    <div>
        <form-helper>
            <div slot="form-header">
                <h3>Thi is the title of the form!</h3>
                <p>Information about the form</p>
            </div>
            <div slot="form-fields">
                <Input type="text" placeholder="text" required />
                <Input type="password" placeholder="password" required />
            </div>
            <div slot="form-controls">
                <butotn v-on:click="handleSubmitL">Submit</butotn>
            </div>
        </form-helper>
    </div>
</template>

<script>
    import FormHelper from './components/FormHelper.vue'

    export default {
        components: {
            'form-helper': FormHelper,
        },
        data () {
            return {

            }
        },
        methods: {
            handleSubmitL: function() {

            }
        },

    }
</script>

<style>

</style>
