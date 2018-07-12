<template>
    <div>
        <form-helper>
            <div slot="form-header">
                <h3>Thi is the title of the form two!</h3>
                <p>Information about the form</p>
                <hr />
            </div>
            <div slot="form-fields">
                <Input type="text" placeholder="text" required />
                <Input type="password" placeholder="password" required />
                <hr />
            </div>
            <div slot="form-controls">
                <button v-on:click="handleSubmit">Login</button>
            </div>
        </form-helper>
    </div>
</template>

<script>
    import FormHelper from './FormHelper.vue'

    export default {
        components: {
            'form-helper': FormHelper,
        },
        data () {
            return {

            }
        },
        methods: {
            handleSubmit: function() {

            }
        },

    }
</script>


<style>
    h3 {
    color: green;
}
</style>
