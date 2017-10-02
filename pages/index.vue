<template>
  <section class="container">
    <div>
      <h1 class="title">Nuxt Firebase Auth</h1>
      <nuxt-link to="/admin">Admin</nuxt-link>
    </div>
    <login></login>
  </section>
</template>

<script>
import Login from '~/components/Login'

export default {
  components: {
    Login
  }
}
</script>
