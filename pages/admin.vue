<template>
  <section class="">
      <h1 class="title">
        Admin
      </h1>
      <!-- <v-row> -->
        <v-flex xs12 id="adminNav">
          <!-- <nuxt-link to="/admin">Back To Main Page</nuxt-link> -->
          <nuxt-link class="adminNavRoute" to="/admin/settings">Settings</nuxt-link>
        </v-flex>
        <v-divider></v-divider>
        <v-flex id="adminChild" xs12>
          <nuxt-child :key="$router.fullPath"></nuxt-child>
        </v-flex>
      <!-- </v-row> -->
  </section>
</template>

<script>
export default {
}
</script>

<style>
#adminNav {
  display: flex;
  flex-flow: row wrap;
  /*justify-content: space-around;*/
  margin-bottom: 1em;
}
.adminNavRoute {
  margin: .25em .5em;
  padding: .25em;
}
#adminChild {
  margin-top: 1em;
}
</style>
<!--  -->
