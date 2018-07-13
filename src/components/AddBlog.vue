<template>
    <div id="add-blog">
        <h1>Add blog test...</h1>

        <form>
            <label>Blog title:</label>
            <input type='text' v-model.lazy="blog.title" required />
            <label>Blog content:</label>
            <textarea v-model.lazy="blog.content" required></textarea>
        </form>

        <div id="checkboxes">
            <label>Name</label>
            <input type="checkbox" value="name" v-model="blog.categories" />
            <label>Sex</label>
            <input type="checkbox" value="sex" v-model="blog.categories" />
            <label>Age</label>
            <input type="checkbox" value="age" v-model="blog.categories" />
            <label>Address</label>
            <input type="checkbox" value="address" v-model="blog.categories" />
        </div>

        <!-- select box -->
        <label>Author:</label>
        <select v-model="blog.author">
            <option v-for="author in authors">{{ author }}</option>
        </select>


        <div id="preview">
            <h3>Preview blog:</h3>
            <p>Blog title: {{ blog.title }}</p>
            <p>Blog content: {{ blog.content }}</p>
            <p>Blog categories:</p>
            <ul>
                <li v-for="category in blog.categories">{{ category }}</li>
            </ul>
            <p>Author:{{ blog.author }}</p>
        </div>


    </div>
</template>

<script>
export default {
    data() {
        return {
            blog: {
                title: '',
                content: '',
                categories: [],
                author: 'cjp'
            },
            authors:['tzt', 'cjp', 'ysy', 'hc']
        }
    }
}
</script>

<style scoped>
#add-blog *{
    box-sizing: border-box;
}

#add-blog {
    margin: 20px auto;
    max-width: 500px;
}

label {
    display: block;
    margin: 20px 0 10px;
}

input[type='text'], textarea {
    display: block;
    width: 100%;
    padding: 8px;
}

#preview {
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}

#checkboxes input {
    display: inline-block;
}

#checkboxes label {
    display: inline-block;
}

</style>