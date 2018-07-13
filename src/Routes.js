/**
 * Created by evilcode on 2018/7/13.
 */
import AddBlog from './components/AddBlog.vue'
import ListBlog from './components/ListBlog.vue'
import ShowBlog from './components/ShowBlog.vue'

export default [
    { path: '/', component: ShowBlog},
    { path: '/list', component: ListBlog},
    { path: '/add', component: AddBlog},
]