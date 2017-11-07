<template>
  <v-layout>
    <v-flex text-xs-center xs12 sm6 offset-sm3>
      <div v-if="loading" class="loading">
        <v-progress-circular indeterminate :size="70" color="primary"></v-progress-circular>
        <h4>Loading...</h4>
      </div>
      <div v-else class="login">
        <h2 class="title">Sign In with Google</h2>
        <v-btn class="signIn mb-2" primary @click.native="googleSignUpPopup">Google Sign In</v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  computed: {
    loading() {
      return this.$store.getters.isLoading
    }
  },
  methods: {
    async googleSignUpPopup () {
      await this.$store.dispatch('signInWithGooglePopup')
      this.$router.replace('/admin')
    }
  }
}
</script>
