<template>
  <div class="Overview">
    <v-container class="my-5">
      <v-row justify="center">
        <v-col
          cols="12" 
          sm="8"
        >
        <v-row justify="center">
          <h1>
            <v-btn text class="white--text x-large text-none">
              <span class="display-1">Over</span>
              <v-img  :src="require('@/assets/logo.png')" width="2.5rem"></v-img>
              <span class="display-1">iew</span>
            </v-btn>
          </h1>
        </v-row>

          <v-card dark color="rgba(0, 0, 0, 0.7)" flat>

            <div class="pa-5">
              <h3 class="text-center">
                <strong>Premium features are coming soon🔥</strong>
              </h3>
              <p>
                <!-- Get access to premium features: -->
                <br>
                <ul>
                  <li>Access to the <strong>statistics panel</strong> about your goals</li>
                  <li>Access to the <strong>multiple tasks lists</strong> of your Google Tasks</li>
                  <li>Access to the <strong>multiple agendas</strong> of your Google Calendar</li>
                </ul>
              </p>
              <p class="text-center">
                <v-btn class="white black--text mx-2" disabled x-small route to="">Buy Premium</v-btn>
              </p>
              
            </div>
          </v-card>
        </v-col>
        
      </v-row>

    </v-container>
  </div>
</template>


