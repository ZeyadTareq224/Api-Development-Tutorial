<template>
  <div class="about">
    <h1>Create A New Article</h1>
    <button @click="toggleArticleForm()" class="btn btn-primary">Add Article</button>
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
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: "create",
  data(){
    return{
      showArticleForm: false,
      formData:{
        title: "",
        content: "",
      }
    }
  },
  methods:{
    ...mapActions(['addArticle']),

    toggleArticleForm(){
      this.showArticleForm = !this.showArticleForm
    },
    onReset(){
      this.formData.title = ""
      this.formData.content = ""
    },
    onSubmit(){
      const {title, content} = this.formData
      const payload = {
        title,
        content,
        author: 1
      }
      this.addArticle(payload)
      this.$router.push({ name: "Home" })
    }
  },
  

}
</script>