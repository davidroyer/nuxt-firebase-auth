<template>
  <section class="">
    <div>
      <v-btn secondary @click="logout">Logout</v-btn>
      <h1 class="title">
        Admin Page Here
      </h1>
      <v-avatar
        v-if="$store.state.user"
        :tile="false"
        :size="avatarSize"
        class="grey lighten-4">
        <img :src="$store.state.user.photoURL" alt="avatar">
      </v-avatar>
      <nuxt-link to="/">Back To Main Page</nuxt-link>
    </div>
  </section>
</template>

<script>
import firebase from 'firebase'
export default {
  fetch ({ store, params }) {
    let user = firebase.auth().currentUser
    console.log('In admin fetch', user);
  },
  data () {
    return {
      avatarSize: '15'
    }
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
.avatar {
  max-width: 100px;
}
.avatar img {
  max-width: 100%;
}
</style>
