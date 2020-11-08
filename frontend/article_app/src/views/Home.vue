<template>
  <div class="home">
    <div class="container">
      <div>
        <b-form @submit.prevent="onSubmit" @reset="onReset" v-if="showArticleForm">
          <b-form-group id="input-group-2" label="Your Article's Title:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="formData.title"
              required
              placeholder="Enter Article's Title"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-2" label="Your Article's Content:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="formData.content"
              required
              placeholder="Enter Article's Content"
            ></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
      </div>
      <div :key="article.id" v-for="article in allArticles">
        <b-jumbotron :header=article.title :lead=article.content>
          <p>Created at: {{article.created_at}}</p>
          <p>By: {{article.author}}</p>
          <b-button @click="toggleArticleForm(article.id)" variant="primary">Update</b-button>
          <b-button @click="deleteArticle(article.id)" variant="danger">Delete</b-button>
        </b-jumbotron>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapGetters, mapActions} from 'vuex'
import axios from 'axios'

export default {
  name: 'Home',
  methods: {
    ...mapActions(['fetchArticles', 'deleteArticle', 'updateArticle']),
    getSpecificArticle(articleId){
      axios.get(`http://localhost:8000/api/articles/${articleId}/`).then(resp => {
        return resp.data;
      });
    },

    toggleArticleForm(articleId) {
      //toggle the form
      this.showArticleForm = !this.showArticleForm

      //get the article to fill the form
      axios.get(`http://localhost:8000/api/articles/${articleId}/`).then(resp => {
        const response = resp.data
        this.formData.title = response.title
        this.formData.content = response.content
        this.articleId = response.id
      })
    },
    onReset(){
      this.formData.title = ""
      this.formData.content = ""
    },
    onSubmit(){
      //getting updated data from the form
      const article = {
        id: this.articleId,
        title: this.formData.title,
        content: this.formData.content,
        author: 1
      }
      this.updateArticle(article)
      this.fetchArticles()
    }
    
  },
  data(){
    return {
      articlId: 0,

      formData: {
        title: "",
        content: "",
      },
      showArticleForm: false
    }
  },

  computed: mapGetters(['allArticles']),
  created(){
    return this.fetchArticles()

  },
}
</script>
