<template>
  <section>
    <div>
      <h1 class="title">About</h1>
      <p>Some content will go here about this project.</p>
      <p>If you are not logged in then you should be redirected to login when clicking this link to the Admin page</p>
      <p class="title">Test Me </p>
      <ul>
        <li>
          Admin:  <nuxt-link to="/admin">/admin</nuxt-link>
        </li>
        <li>
          Admin Subroute:  <nuxt-link to="/admin/settings">/admin/settings</nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
}
</script>
