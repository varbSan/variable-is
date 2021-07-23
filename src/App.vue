<template>
  <v-app style="
      backgroundImage: url('https://free4kwallpapers.com/uploads/originals/2018/08/24/brutalist-interior-wallpaper.jpg');
      backgroundPosition: center;
      background-size: cover;
    ">
    <AppBar/>
    <v-main >
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar'

export default {
  name: 'App',

  components: {
    AppBar
  },

  data() {
    return {

    }
  }
}
</script>
