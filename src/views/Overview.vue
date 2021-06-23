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
            <v-img :src="require('@/assets/ss_overview.png')">
            </v-img>

            <div class="pa-5">
              <h3 class="text-center">
                <strong>A Chrome extension to set goals</strong>
              </h3>
              <p>
                Install via the <a href="https://chrome.google.com/webstore/detail/overview/bnacpnpmhffilkifmaahoabkgpkblcnl">Google Chrome Web Store</a>.<br>
                Open a new tab to access Over[v]iew interface. <br>
                Set new goals for yourself on different timelines (year, quarter, week, day). Check your Google Calendar events and tasks along.<br>
                Become accountable by seeing these goals every time you open a new tab.<br>
                Keep track of them with statistics.<br>
              </p>
              <p class="text-center">
                <v-btn class="white black--text mx-2" x-small target="_blank" href="https://chrome.google.com/webstore/detail/overview/bnacpnpmhffilkifmaahoabkgpkblcnl">Install</v-btn>
                <v-btn class="white black--text mx-2" x-small route to="/overview/premium">Upgrade to Premium</v-btn>
                <v-btn class="white black--text mx-2" x-small route to="/overview/privacypolicy">Privacy Policy</v-btn>
              </p>
              
            </div>
          </v-card>
        </v-col>
        
      </v-row>

    </v-container>
  </div>
</template>


