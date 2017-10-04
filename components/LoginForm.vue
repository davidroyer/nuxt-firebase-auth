<template>
  <v-layout>
    <v-flex text-xs-center xs12 sm6 offset-sm3>
      <h5>Sign In with Google</h5>
     <v-btn class="signIn mb-2" primary @click="googleSignUp">Google Sign In</v-btn>

     <!-- <v-layout row>
       <v-flex>
         <v-text-field
           v-model="formEmail"
           name="email"
           label="Email"
           id="email"
         ></v-text-field>
       </v-flex>
     </v-layout>
     <v-layout row>
       <v-flex>
         <v-text-field
         v-model="formPassword"
         name="password"
         label="Password"
         id="password"
         ></v-text-field>
       </v-flex>
     </v-layout>
     <v-btn class="signIn mb-2" primary @click="emailLogin">Email Sign In</v-btn> -->

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
    emailLogin () {
      this.$store.dispatch('signInWithEmail', {
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
        console.log('inside then statement on login');
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
