<template>
  <v-container class="text-center">
    
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

    <v-row justify="center">
      <v-col 
        class="mb-4"
        cols="12"
      >
        <h2 class="font-weight-light white--text mb-3">
          <span>Hi</span><br>
          <span>I make</span>
        </h2>

            <h1 class="display-3 font-weight-bold white--text">
              <span>Variable software</span>
            </h1>
        <!-- <p>
        </p>
        <h2 class="white--text mb-3">
          <span>We make software</span>
        </h2> -->
            

          <!-- <span class="display-2 font-weight-bold mb-3">ariable software</span> -->
      </v-col>
    </v-row>

    <v-row>
      <v-col 
        class="mb-5" 
        cols="12"
      >
          <v-btn @click="logEvent()" class="white" route to="/software">View my Apps</v-btn>
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
      //
    }),

    methods: {
      logEvent() {
        this.$analytics.logEvent("got a click!")
        console.log('fix analytics logEvent')
      }
    },

    mounted() {
      this.$analytics.logEvent("got a visit!")
      console.log('fix analytics logEvent')
    }
  }
</script>
