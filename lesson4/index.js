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
        add: function(val) {
            this.age += val
        },
        sub: function(val) {
            this.age -= val
        },
        updateXY: function(event) {
            this.x = event.offsetX
            this.y = event.offsetY
        }
    }
})
