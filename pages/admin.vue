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

export default {
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
