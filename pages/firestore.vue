<template lang="html">
      <v-card>
        <v-container fuild>

        <v-layout row>
          <v-flex xs12>
            <v-subheader>Add Item to FireStore</v-subheader>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs8>
            <v-text-field
              @keyup.enter="addItem"
              name="item"
              label="Add New Item"
              id="item"
              v-model="item"
            ></v-text-field>
          </v-flex>
          <v-flex xs4>
            <v-btn @click="addItem">Add Item</v-btn>
          </v-flex>
        </v-layout>
        <v-layout>
        </v-layout>
        <ul v-for="item in items">
          <li>
            <h6>{{item.id}}:</h6>
            <pre>{{item.data()}}</pre>
          </li>
        </ul>
      </v-container>
    </v-card>


</template>

<script>

import {StoreDB} from '@/services/fireinit.js'
const Posts = StoreDB.collection('posts')

export default {
  async asyncData ({store}) {
    const querySnapshot = await Posts.get()

    return {
      items: querySnapshot.docs
    }
  },

  data () {
    return {
      item: '',
      posts: []
    }
  },

  methods: {
    async addItem () {
      const ItemRef = await Posts.add({ name: this.item })
      this.item = ''
    }
  }
}
</script>

<style lang="css">
</style>
