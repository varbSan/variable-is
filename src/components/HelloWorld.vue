<template>
  <v-container class="text-center" height="auto" align="center">
    
    <v-row>
      <v-col 
        cols="12"
      >
        <v-spacer
          :class="{
            'xs-height': $vuetify.breakpoint.xs, 
            'sm-height': $vuetify.breakpoint.sm,
            'md-height': $vuetify.breakpoint.md,
            'up-height': $vuetify.breakpoint.lgAndUp
          }"
          class="my-3"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col 
        class="mb-4"
        cols="12"
      >
        <h1 class="display-1 font-weight-bold mb-3">
          <span>Hi</span><br>
          <span>I'm Bak</span><br>
          <span class="display-2 font-weight-bold mb-3">I make web applications</span>
        </h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col 
        class="mb-5" 
        cols="12"
      >
          <v-btn class="white mr-2" route to="/portfolio">View My Work</v-btn>
          <v-btn outlined class="white--text ml-2" route to="/contact">Contact</v-btn>
      </v-col>
    </v-row>

  </v-container>
</template>

<style lang="scss">
.xs-height {
  height: 25vh
}

.sm-height {
  height: 15vh
}

.md-height {
  height: 20vh
}
.up-height {
  height: 25vh
}

</style>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
    }),
  }
</script>
