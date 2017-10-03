<template>
  <v-app toolbar footer>
    <v-navigation-drawer
      persistent
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
    <v-toolbar fixed>
      <v-btn
        icon
        @click.native.stop="drawer = !drawer">
        <v-icon>menu</v-icon>
      </v-btn>

      <v-toolbar-title v-text="title"></v-toolbar-title>

    </v-toolbar>
    <main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </main>
    <v-footer :fixed="fixed">
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  components: {
  },
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        { icon: 'home', title: 'Welcome', to: '/' },
        { icon: 'info', title: 'About', to: '/about' },
        { icon: 'person', title: 'Admin', to: '/admin' }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<style>
.navigation-drawer>.list:not(.list--dense) .list__tile {
  font-size: 17px;
}
</style>
