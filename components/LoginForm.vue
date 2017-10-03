<template>
  <v-layout>
    <v-flex xs12 sm5>
      <v-card class="grey lighten-4 elevation-3">
         <v-card-text>
           <h3>Login</h3>
           <v-container fluid>
             <v-layout row>
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
               <v-flex xs8>
                 <v-text-field
                 v-model="formPassword"
                 name="password"
                 label="Password"
                 id="password"
                 ></v-text-field>
               </v-flex>
             </v-layout>

           </v-container>
         </v-card-text>
         <v-btn primary @click="login">Login</v-btn>
         <v-btn @click="googleSignUp">Google Sign In</v-btn>

       </v-card>
    </v-flex>
    <v-flex xs12 sm5>
      <v-card class="grey lighten-4 elevation-3">
         <v-card-text>
           <h3>Sign Up</h3>
           <v-container fluid>
             <v-layout row>
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
               <v-flex xs8>
                 <v-text-field
                 v-model="formPassword"
                 name="password"
                 label="Password"
                 id="password"
                 ></v-text-field>
               </v-flex>
             </v-layout>

           </v-container>
         </v-card-text>
         <v-btn primary @click="login">Login</v-btn>
         <v-btn @click="googleSignUp">Google Sign In</v-btn>

       </v-card>
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
</style>
