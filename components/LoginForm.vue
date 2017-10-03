<template>
  <v-layout>
    <v-flex text-xs-center xs12 sm6 offset-sm3>
      <h5>Sign In with Google</h5>
     <v-btn class="signIn mb-2" primary @click="googleSignUp">Google Sign In</v-btn>
    </v-flex>
  </v-layout>

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
    },
    googleSignUp () {
      this.$store.dispatch('signInWithGoogle').then(() => {

      }).catch((e) => {
        console.log(e.message);
      })
    }
  }
}
</script>

<style lang="css">
.signIn {

}
</style>
