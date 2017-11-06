<template>
  <v-layout>
    <v-flex text-xs-center xs12 sm6 offset-sm3>
      <div v-if="loading" class="loading">
        <v-progress-circular indeterminate :size="70" color="primary"></v-progress-circular>
        <h4>Loading...</h4>
      </div>
      <div v-else class="login">
        <h2 class="title">Sign In with Google</h2>
        <v-btn class="signIn mb-2" primary @click.native="googleSignUpPopup">Google Sign In - Popup</v-btn>
      </div>
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
  computed: {
    loading() {
      return this.$store.getters.isLoading
    }
  },
  created() {

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
    googleSignUpPopup () {
      this.$store.dispatch('signInWithGooglePopup').then(() => {
        this.$router.replace('/admin')
      }).catch((e) => {
        console.log(e.message);
      })
    },
    googleSignUpRedirect () {
      this.$store.dispatch('signInWithGoogleRedirect').then(() => {
        // this.$router.replace('/admin')
      }).catch((e) => {
        console.log(e.message);
      })
    }

  }
}
</script>

<style lang="css">
</style>
