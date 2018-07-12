<template>
    <div id="add-blog">
        <h1>Add blog test...</h1>

        <form>
            <label>Blog title:</label>
            <input type='text' v-model.lazy="blog.title" required />
            <label>Blog content:</label>
            <textarea v-model.lazy="blog.content" required></textarea>
        </form>

        <div id="preview">
            <h3>Preview blog:</h3>
            <p>Blog title: {{ blog.title }}</p>
            <p>Blog content: {{ blog.content }}</p>
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
            }
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


</style>