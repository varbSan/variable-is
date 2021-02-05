<template>
  <div class="Software">
    <v-container class="my-5">
      <v-row justify="center">
        <v-col
          cols="12" 
          sm="5"
        >
        <v-row justify="center">
          <h1>
            <v-btn text class="white--text x-large" route to="/overview">
              <span class="display-1">Over</span>
              <v-img  :src="require('@/assets/logo.png')" width="3rem"></v-img>
              <span class="display-1">iew</span>
            </v-btn>
          </h1>
        </v-row>
        

          <v-card dark color="rgba(0, 0, 0, 0.7)" flat>
            <router-link to="/overview">
              <v-img :src="require('@/assets/ss_overview.png')"></v-img>
            </router-link>

            <div class="pa-5">
              <h3 class="text-center">
                <strong>A browser extension to set goals</strong>
              </h3>
              <p>Make your new tab page display your goals — along with your Google Calendar events and tasks.<br>
              </p>
              <p class="text-center">
                <v-btn class="white black--text mx-2" x-small href="https://chrome.google.com/webstore/detail/overview/bnacpnpmhffilkifmaahoabkgpkblcnl">Install</v-btn>
                <router-link route to="/overview">
                  <v-btn class="white black--text mx-2" x-small>More Info</v-btn>
                </router-link>
                
              </p>
              
              
            </div>
          </v-card>
        </v-col>
        <v-col
          cols="12" 
          sm="5"
        >
        <v-row justify="center">
          <h1>
            <v-btn text class="white--text x-large" target="_blank" href="http://citizencult.com">
              <span class="display-1">Citizen Cult</span>   
            </v-btn>
          </h1>
        </v-row>

          <v-card dark color="rgba(0, 0, 0, 0.7)" flat>
            <v-img :src="require('@/assets/ss_citizen_cult.png')">
            </v-img>

            <div class="pa-5">
              <h3 class="text-center">
                <strong>A web app quizz for cinephiles</strong>
              </h3>
              <p>
                Test your knowledge through the 30 most epic quotes the cinema has ever seen.
              </p>
              <p class="text-center">
                <v-btn class="white black--text mx-2" x-small target="_blank" href="http://citizencult.com">Play</v-btn>
              </p>
            </div>
          </v-card>
        </v-col>
      </v-row>

    </v-container>
  </div>
</template>

<style lang="scss" scoped>
  
  a { // avoid underline for router-link
    text-decoration: none;
  }
</style>

