import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';

import firebase from "firebase/app"
import "firebase/analytics"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqqsdZKYKTtMkvyZKPb3pvMRhBPAAfNCc",
  authDomain: "overview-8d94f.firebaseapp.com",
  databaseURL: "https://overview-8d94f.firebaseio.com",
  projectId: "overview-8d94f",
  storageBucket: "overview-8d94f.appspot.com",
  messagingSenderId: "1003414123745",
  appId: "1:1003414123745:web:ad6351269f5717919673a0",
  measurementId: "G-YM69MGQYHP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

Vue.config.productionTip = false

// alias
Vue.prototype.$analytics = firebase.analytics();


new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

