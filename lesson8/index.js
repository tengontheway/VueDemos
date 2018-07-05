/**
 * Created by evilcode on 2018/7/4.
 */
var app = new Vue({
    el: '#vue-app',
    data: {
        age: 20,
        a: 0,
        b: 0,
    },
    methods: {
        aAdd: function() {
            this.a += 1
        },
        bAdd: function() {
            this.b += 1
        },

        resultA: function() {
            console.log("resultA is called!")
            return this.age + this.a
        },
        resultB: function() {
            console.log("resultB is called!")
            return this.age + this.b
        },
    },
    computed: {
        computedA: function() {
            console.log("computedA is called!")
            return this.age + this.a
        },
        computedB: function() {
            console.log("computedB is called!")
            return this.age + this.b
        },
    }
})
