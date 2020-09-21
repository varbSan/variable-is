<template>
    <v-app-bar
      app
      flat
      color="rgba(0,0,0,0)"
      dark
    >
      <v-btn 
        small 
        text
        href="/">
        <span class="font-weight-light">Bak</span>
        <span class="font-weight-bold">Sanou</span>
      </v-btn>

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
