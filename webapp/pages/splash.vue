<template v-slot:activator>
  <div class="welcome-section content-hidden">
        <div class="content-wrap">
          <ul class="fly-in-text">
            <li>C</li>
            <li>F</li>
          </ul>
            <v-btn class="enter-button" @click="sheet = true">Enter</v-btn>
        </div>
        <v-bottom-sheet v-model="sheet">
        <v-list>
          <v-subheader>Sign in with</v-subheader>
          <v-layout align-center justify-center row fill-height>
             <v-btn outline color="indigo" @click="loginWithGoogle">Google</v-btn>
              <v-btn outline color="indigo">Facebook</v-btn>
               <v-btn outline color="indigo">Twitter</v-btn>
          </v-layout>
      </v-list>
    </v-bottom-sheet>
    </div>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Open Sans', Arial, sans-serif;
    font-weight: 700;
  }
  .welcome-section {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #3B4252;
    overflow: hidden;
  }
  .welcome-section .content-wrap {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%,0);
  }
  .welcome-section .content-wrap .fly-in-text {
    list-style: none;
  }

  .welcome-section .content-wrap .fly-in-text li {
    display: inline-block;
    margin-right: 30px;
    font-size: 5em;
    color: white;
    opacity: 1;
    transform: all 2s ease;
  }
  .welcome-section .content-wrap .fly-in-text li:last-child {
    margin-right: 0;
  }
  .welcome-section.content-hidden .content-wrap .fly-in-text li {
    opacity: 0;
  }
  .welcome-section.content-hidden .content-wrap .fly-in-text li:nth-child(1) {transform: translate3d(-100px,0,0)}
  .welcome-section.content-hidden .content-wrap .fly-in-text li:nth-child(2) {transform: translate3d(100px,0,0)}
  .welcome-section.content-hidden .content-wrap .enter-button { opacity: 0; transform: translate3d(0,-30px,0)}
  @media (min-width: 800px) {
    .welcome-section .content-wrap .fly-in-text li {font-size: 10em; }
    .welcome-section .content-wrap .enter-button {font-size: 1.5em;}
  }

</style>

<script>
import firebase from '../services/fireinit'

export default {
  name: 'splash',
  layout: 'splash',
  mounted() {
    const welcomeSection = document.querySelector('.welcome-section')
    // const enterButton = welcomeSection.find('.enter-button')
    setTimeout(() => {
      welcomeSection.classList.remove('content-hidden')
    }, 500)
  },
  data: () => ({
    sheet: false,
    tiles: [
      { img: 'google.png', title: 'Google' },
      { img: 'twitter.png', title: 'Hangouts' },
      { img: 'facebook-f', title: 'Messenger' }
    ]
  }),
  methods: {
    loginWithGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider()
      const that = this
      provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
      firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = result.credential.accessToken
        // The signed-in user info.
        const user = result.user
        // console.log(token, user)
        that.$store.commit('main/loadUserData', { user, token })
        that.$router.push('/secure/backoffice')
        // ...
      }).catch(function (error) {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        // The email of the user's account used.
        const email = error.email
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential
        console.log(errorCode, errorMessage, email, credential)
        // ...
      })
    },
    loginWithFacebook() {
      this.$store.commit('main/loadUserData', { name: 'Leonardo' })
    }
  }
}
</script>
