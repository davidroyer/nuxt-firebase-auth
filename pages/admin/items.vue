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
        <v-layout row>
          <v-flex md4>
            <v-list>
              <v-list-tile v-for="(item, key) in items" :key="key">
                <v-list-tile-title>{{item.name}}</v-list-tile-title>
                <v-spacer></v-spacer>
                <v-list-tile-action @click="deleteItem(key)">
                  <v-btn icon><v-icon>delete</v-icon></v-btn>
                </v-list-tile-action>
              </v-list-tile>
            </v-list>
          </v-flex>
          <v-spacer></v-spacer>
          <v-flex md6>
            <v-text-field
              @keyup.enter.stop="addItem"
              name="item"
              label="Add New Item"
              id="item"
              v-model="item"
            ></v-text-field>
            <v-btn @click="addItem">Add Item</v-btn>
          </v-flex>
        </v-layout>

      <!-- </v-row> -->
  </section>
</template>

<script>
import {DB} from '@/services/fireinit.js'

export default {
  asyncData({store}) {
    return {
      itemsRef: DB.ref(`items/${store.state.user.uid}`)
    }
  },
  data () {
    return {
      item: '',
      items: {}
    }
  },
  created () {
    let vm = this
    vm.itemsRef.on('value', function(snapshot) {
      vm.items = snapshot.val()
    });
  },
  methods: {
    addItem () {
      this.itemsRef.push({
        name: this.item
      }).then(() => {
        this.item = ''
      })
    },
    deleteItem (key) {
      this.itemsRef.child(key).remove()
    }
  }
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
