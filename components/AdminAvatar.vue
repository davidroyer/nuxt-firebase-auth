<template>
  <div id="user" class="text-xs-center">
    <v-btn primary class="mt-2" color="primary" @click.native="logout">
      Logout
    </v-btn>
    <v-menu offset-x :close-on-content-click="false" :nudge-top="200" v-model="menu">
      <v-btn icon slot="activator">
        <v-icon medium>settings</v-icon>
      </v-btn>
      <v-card>
        <v-list>
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img v-if="user.displayName" :src="$store.state.user.photoURL" alt="John">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title v-if="user.displayName">{{user.displayName}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider></v-divider>

          <v-list-tile>
            <v-spacer></v-spacer>
            <v-list-tile-action>
              <v-btn primary class="mt-2" color="primary" @click.native="logout">
                Logout
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
export default {
  props: ['user']
}
</script>

<style lang="css">
</style>
