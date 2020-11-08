<template>
  <div class="home">
    <div class="container">
    <div :key="article.id" v-for="article in allArticles">
      <b-jumbotron :header=article.title :lead=article.content>
        <p>Created at: {{article.created_at}}</p>
        <p>By: {{article.author}}</p>
        <b-button variant="primary">Update</b-button>
        <b-button @click="deleteArticle(article.id)" variant="danger">Delete</b-button>
      </b-jumbotron>
    </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'Home',
  methods: {
    ...mapActions(['fetchArticles', 'deleteArticle']),
    
  },

  computed: mapGetters(['allArticles']),
  created(){
    return this.fetchArticles()
  },
}
</script>
