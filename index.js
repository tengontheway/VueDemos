/**
 * Created by evilcode on 2018/7/4.
 */
var app1 = new Vue({
    el: '#vue-app1',
    data: {
        name: 'tzt',
        age: 18
    },
    methods: {
        greet: function() {
            return "hello app 1"
        }
    },
    computed: {
        calcAge: function() {
            return  this.age
        }
    }
})


var app2 = new Vue({
    el: '#vue-app2',
    data: {
        name: 'li',
        age: 20,
    },
    methods: {
        greet: function() {
            return "hello app 2"
        },
        changeName: function() {
            app1.name = 'hello'
        }
    },
    computed: {
        calcAge: function() {
            return  this.age
        }
    }
})
