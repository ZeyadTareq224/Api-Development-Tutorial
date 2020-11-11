<template>
    <div class="container">
        <button @click="logout" class="btn btn-warning">Logout</button>
    </div>    
</template>

<script>
import { mapActions } from 'vuex'
export default {
    
    name: "Logout",

    methods:{
        ...mapActions(['removeToken']),

        logout() {
            this.removeToken()
            this.$router.push({ name: 'Home' })
        }
    }
}
</script>

<style scoped>

</style>