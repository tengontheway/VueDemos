/**
 * Created by evilcode on 2018/7/4.
 */
var app = new Vue({
    el: '#vue-app',
    data: {
        isShow: false,
        isNearby: false
    },
    methods: {

    },
    computed: {
        /**
         * 动态返回样式
         * @returns {{available: boolean, nearby: boolean}}
         */
        computedClass: function() {
            return {
                available: this.isShow,
                nearby: this.isNearby
            }
        }
    }
})
