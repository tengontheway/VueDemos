/**
 * Created by evilcode on 2018/7/4.
 */
var app = new Vue({
    el: '#vue-app',
    data: {
        message: 'just a test!',
        name: 'tzt',
        job: 'hacker',
    },
    methods: {
        greet: function(time) {
            return 'Hello ' + time + ' ' + this.name
        },
    }
})
