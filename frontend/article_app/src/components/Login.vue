<template>
    <div class="container">
    <b-form @submit.prevent="onSubmit" v-show="showForm">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="Username is the unique name you sigend up with"
      >
        <b-form-input
          id="input-1"
          v-model="formData.username"
          type="text"
          required
          placeholder="Enter Username ..."

        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password: " label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.password"
          type="password"
          required
          placeholder="Enter Password ..."

        ></b-form-input>
      </b-form-group>

      

      <b-button type="submit" variant="success">Login</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {

    name: "Login",
    data() {
        return {
            showForm: true,

            formData:{
                username: "",
                password: ""
            }
        }
    },
    methods: {
        ...mapActions(['getToken']),

        onSubmit() {
            const payload = {
                username: this.formData.username,
                password: this.formData.password
            }
            this.getToken(payload)

        }
    }
}
</script>

<style scoped>

</style>