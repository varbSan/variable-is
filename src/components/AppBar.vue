<template>
    <v-app-bar
      app
      flat
      color="rgba(0,0,0,0)"
      dark
    >
    <router-link to="/">
      <v-btn 
        small 
        text>
        <v-img  :src="require('@/assets/logo.png')" max-width="20"></v-img>
        <span class="font-weight-light">ariable</span>
      </v-btn>
    </router-link>

      <v-spacer></v-spacer>

        <v-btn 
          small
          text
          class="white--text text-none font-weight-light"
          target="_blank" 
          href="https://www.linkedin.com/in/bak-sanou-61027b66/">
          Linked
          <v-icon small>mdi-linkedin</v-icon>
        </v-btn>

    </v-app-bar>
</template>

<script>
  export default {
    name: 'AppBar',

    data() {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
  
  a { // avoid underline for router-link
    text-decoration: none;
  }
</style>
