<template>
  <section class="">
  
    <h2>Admin Dashboard for Child Routes</h2>
    <h5>The index page inside the admin folder</h5>
  </section>
</template>

<script>
export default {
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
