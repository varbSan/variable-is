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
        text
        class="text-none font-weight-light">
        <v-img :src="require('@/assets/VariableLogo.svg')" width="1.5rem" class="mr-2"></v-img>
        <span>Variable</span>
      </v-btn>
    </router-link>

      <v-spacer></v-spacer>

        <v-btn 
          small
          text
          class="text-none font-weight-light"
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
