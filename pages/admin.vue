<template>
  <section class="container">
    <div>
      <button @click="logout">Logout</button>
      <h1 class="title">
        Admin Page Here
      </h1>
      <nuxt-link to="/">Back To Main Page</nuxt-link>
    </div>
  </section>
</template>

<script>
import firebase from 'firebase'
export default {
  fetch ({ store, params }) {
    let user = firebase.auth().currentUser
    console.log('From Fetch: ', user);
    // store.commit('setUser', user)
  },

  methods: {
    logout () {
      this.$store.dispatch('userSignOut')
      .then(() => {
        alert('logged out!')
        this.$router.push('/')
      })
    }
  },
  middleware: 'auth'
}
</script>

<style>

</style>
