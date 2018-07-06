/**
 * Created by evilcode on 2018/7/4.
 */
var app = new Vue({
    el: '#vue-app',
    data: {
        health: 100,
        isOver: false
    },
    methods: {
        hit: function() {
            this.health -= 10
            if (this.health <= 0) {
                this.health = 0
                this.isOver = true
            }
        },

        restart: function() {
            this.health = 100
            this.isOver = false
        }
    },
    computed: {

    }
})
