<template>
  <v-app>
    <v-navigation-drawer
      persistent
      app
      enableResizeWatcher
      v-model="drawer">
      <v-list>
        <v-list-tile
          router
          nuxt
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed>
      <v-btn
        icon
        @click.native.stop="drawer = !drawer">
        <v-icon>menu</v-icon>
      </v-btn>

      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <div v-if="user" id="user" class="text-xs-center">
            <v-menu
              offset-x
              :close-on-content-click="false"
              :nudge-top="200"
              v-model="menu">
              <v-btn icon slot="activator"><v-icon medium>settings</v-icon></v-btn>
                <v-card>
                  <v-list>
                    <v-list-tile avatar>
                      <v-list-tile-avatar>
                        <img :src="$store.state.user.photoURL" alt="John">
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

    </v-toolbar>
    <main>
     <v-container fluid>
       <nuxt />
     </v-container>
   </main>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: true,
      fixed: false,
      items: [
        { icon: 'home', title: 'Welcome', to: '/' },
        { icon: 'info', title: 'About', to: '/about' },
        { icon: 'person', title: 'Admin', to: '/admin' },
        // { icon: 'store', title: 'FireStore', to: '/firestore' }
      ],
      title: 'Nuxt Firebase Auth',
      menu: false
    }
  },
  computed: {
    user () {
      return this.$store.getters.activeUser
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('signOut').then(() => {
        alert('logged out!')
        this.$router.push('/')
      })
    }
  }
 }
</script>

<style>
.navigation-drawer>.list:not(.list--dense) .list__tile {
  font-size: 17px;
}
.avatar {
  max-width: 75px;
}

</style>
