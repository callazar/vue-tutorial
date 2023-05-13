<template>
<div>
    <h1>API TEST</h1>
    <ul v-if="posts && posts">
        <li v-for="post of posts">
            <p>Country : {{ post.propinsi }}</p>
            <p>Distric : {{ post.kota }}</p>
            <p>Subdistrict : {{ post.kecamatan }}</p>
            <p>Latitude : {{ post.lat }}</p>
            <p>Longitude : {{ post.lon }}</p>
        </li>
    </ul>

    <ul v-if="errors && errors.length">
        <li v-for="error of errors">
            {{ error.message }}
        </li>
    </ul>
</div>
</template>

<script>

import axios from 'axios';

export default{
    data() {
        return {
            posts: [],
            errors: []
        }
    },
    async created() {
        try{
            const response = await axios.get(`https://ibnux.github.io/BMKG-importer/cuaca/wilayah.json`)
            console.log(response)
            this.posts = response.data
        } catch (e) {
            this.errors.push(e)
        }
    }
}
</script>

<style>
td {
    margin-left: 50px;
}
</style>