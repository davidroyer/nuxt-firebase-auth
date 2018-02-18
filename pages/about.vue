<template>
  <v-layout justify-center align-center>
    <v-flex xs12 sm8>
      <v-card>
        <v-card-title class="headline">About Nuxt.js Firebase Auth</v-card-title>
        <v-card-text>
            <p>If you are not logged in then you should be redirected to login when clicking this link to the Admin page</p>
            <p class="title">Test Me </p>

              <div>
                Admin:  <nuxt-link to="/admin">/admin</nuxt-link>
              </div>
              <div>
                Admin Subroute:  <nuxt-link to="/admin/settings">/admin/settings</nuxt-link>
              </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat nuxt to="/inspire">Continue</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
}
</script>
