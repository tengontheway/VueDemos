<template>
    <div id="area">
        <ul>
            <li v-for="user in users" v-on:click="user.show = !user.show">
                <h2>{{ user.name }}</h2>
                <h3 v-show="user.show">{{ user.speciality }}</h3>
            </li>
        </ul>
        <button v-on:click="delUser">Del user</button>
    </div>
</template>

<script>
export default {
    props: {
      users: {
          type: Array,
          required: true
      }
    },
    data() {
        return {

        }
    },
    methods: {
        delUser: function() {
            this.users.pop()
        }
    }
}
</script>

<style scoped>
    area {
        background: yellow;
        width: 100%;
        max-width: 100px;
        margin: 100px auto;
        padding: 0 20px;
        box-sizing: border-box;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0;
        /*background: red;*/
    }

    li {
        /*background: yellow;*/
        /*flex-grow: 1;*/
        flex-basis: 300px;
        text-align: center;
        padding: 10px 100px;
        border: 10px solid#222;
        margin: 10px;
    }



</style>
