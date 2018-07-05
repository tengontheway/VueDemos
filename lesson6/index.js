/**
 * Created by evilcode on 2018/7/4.
 */
var app = new Vue({
    el: '#vue-app',
    data: {
        age: 18,
        x: 0,
        y: 0,
    },
    methods: {
        submitName: function() {
            console.log("input your name")
        },
        submitAge: function() {
            console.log("submit age")
        }
    }
})
