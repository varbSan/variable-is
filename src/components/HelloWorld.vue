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
          <span>We are</span>
        </h2>

          <v-btn class="pa-0" text x-large>
            <h1 class="display-2">
              <span class="font-weight-bold white--text">Var</span>
              <span class="font-weight-light white--text">iable</span>
            </h1>
          </v-btn>
<p>
</p>
        <h2 class="white--text mb-3">
          <span>We make software</span>
        </h2>
            

          <!-- <span class="display-2 font-weight-bold mb-3">ariable software</span> -->
      </v-col>
    </v-row>

    <v-row>
      <v-col 
        class="mb-5" 
        cols="12"
      >
          <v-btn class="white" route to="/software">View our Apps</v-btn>
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
  }
</script>
