<template>
  <div class="login">
    <h5>Login</h5>
    <div><label for="email">Email<input type="text" v-model="formEmail" name="email"></label></div>
    <div><label for="email">Password<input type="text" v-model="formPassword" name="password"></label></div>
    <button @click="login">Login</button>
    <hr>
    <!-- <button @click="googleSignUp">Google Sign In</button> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      formEmail: '',
      formPassword: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('userSignIn', {
        email: this.formEmail,
        password: this.formPassword
      }).then(() => {
        this.formEmail = ''
        this.formPassword = ''
      }).catch((e) => {
        console.log(e.message);
      })
    }
  }
}
</script>

<style lang="css">
</style>
