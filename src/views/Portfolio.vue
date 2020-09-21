<template>
  <div class="Portfolio">
    <v-container class="my-5">
      <v-row>
        <v-col
          cols="12" 
          sm="4"
        >
          <h1 class="text-center white--text">Citizen Cult</h1>

          <v-card dark color="rgba(0, 0, 0, 0.7)" flat>
            <v-img :src="require('@/assets/ss_citizen_cult.png')">
            </v-img>

            <div class="pa-5">
              <h3 class="text-center">
                <strong>A web app quizz for cinephiles</strong>
              </h3>
              <p>
                <u>Tech Stack:</u><br>
                Javascript - HTML/CSS - NoSQL - Node.js - Express.js
                - MongoDB - Heroku - Git - npm<br>
              </p>
              <p>
                <a target="_blank" href="http://citizencult.com">http://citizencult.com</a>
              </p>
            </div>
          </v-card>
        </v-col>
        <v-col
          cols="12" 
          sm="4"
        >
          <h1 class="text-center white--text">Over[v]iew</h1>

          <v-card dark color="rgba(0, 0, 0, 0.7)" flat>
            <v-img :src="require('@/assets/ss_overview.png')">
            </v-img>

            <div class="pa-5">
              <h3 class="text-center">
                  <strong>
                  A web extension to set goals</strong>
              </h3>
              <p>
                <u>Tech Stack:</u><br>
                Javascript - HTML/CSS - NoSQL - Vue.js - Vuex 
                - Firebase - Chrome Web Store - Git - npm<br>
              </p>
              <p>
                <a target="_blank" href="https://chrome.google.com/webstore/detail/overview/bnacpnpmhffilkifmaahoabkgpkblcnl">https://chrome.google.com/webstore/detail/overview/bnacpnpmhffilkifmaahoabkgpkblcnl</a>
              </p>
            </div>
          </v-card>
        </v-col>
        <v-col 
          cols="12" 
          sm="4"
        >
          <h1 class="text-center white--text">Bak Sanou</h1>

          <v-card dark color="rgba(0, 0, 0, 0.7)" flat>
            <v-img :src="require('@/assets/ss_baksanou.png')"></v-img>

            <div class="pa-5">
              <h3 class="text-center">
                <strong>A portfolio website</strong>
              </h3>
              <p>
                <u>Tech Stack:</u><br>
                Javascript - HTML/CSS - Vue.js - Vuetify
                - Netlify - Namecheap - Git - npm<br>
              </p>
              <p>
                <a target="_blank" href="https://baksanou.com">https://baksanou.com</a>
              </p>
            </div>
          </v-card>
        </v-col>
      </v-row>

    </v-container>
  </div>
</template>
