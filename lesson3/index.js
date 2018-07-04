/**
 * Created by evilcode on 2018/7/4.
 */
var app = new Vue({
    el: '#vue-app',
    data: {
        message: 'just a test!',
        name: 'tzt',
        job: 'hacker',
        website: 'http://www.baidu.com',
        websiteTag: '<a href="http://www.youku.com">youku</a>'
    },
    methods: {
        greet: function(time) {
            return 'Hello ' + time + ' ' + this.name
        },
    }
})
