<template>
  <v-container>
    <v-layout text-xs-center>
      <v-flex xs12 md8 offset-md2>
        <div class="wrapper">
          <h1 class="title">Nuxt Firebase Auth</h1>
          <div v-if="!$store.state.user">
            <v-btn outline large flat nuxt @click="$router.push('/login')" primary>Login</v-btn>
            <v-btn outline large flat nuxt @click="$router.push('/login')" primary>Sign-Up</v-btn>
          </div>
          <div v-else class="flexWrapper">
            <h4 class="blue--text">You're already logged in</h4>
            <v-btn icon class="blue white--text">
              <v-icon>thumb_up</v-icon>
            </v-btn>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
}
</script>

<style scoped>
.wrapper {
  margin-top: -7.5em;
}
.flexWrapper {
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
}
.container {
  height: calc(100vh - 100px);
  align-items: center;
  align-content: center;
  display: flex;
  justify-content: center;
}
.title {
  font-size: 2.5em !important;
  /*margin-top: -5em;*/
}

@media (min-width: 750px) {
  .title {
    font-size: 3.5em !important;
  }
}
</style>
