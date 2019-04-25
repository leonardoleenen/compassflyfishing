<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      temporary
      absolute
    >
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>Leonardo G. Leenen</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
       <v-list-tile>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Compass Fly Fishing</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class='hidden-sm-and-down'>
        <v-btn flat>Why us?</v-btn>
        <v-btn flat>Explore</v-btn>
        <v-btn flat>Help</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer
    height="auto"
    color="primary lighten-1"
  >
    <v-layout
      justify-center
      row
      wrap
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        flat
        round
      >
        {{ link }}
      </v-btn>
      <v-flex
        primary
        lighten-2
        py-3
        text-xs-center
        white--text
        xs12
      >
        &copy;2019 — <strong>Compass Fly Fishing</strong>
      </v-flex>
    </v-layout>
  </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    links: [
      'Home',
      'About Us',
      'Contact Us'
    ],
    drawer: null
  }),
  mounted() {
    (function (b, c) {
      const e = document.createElement('link')
      e.rel = 'stylesheet'
      e.type = 'text/css'
      e.href = 'https://chatboxappdev.mybluemix.net/static/css/main.css'
      document.getElementsByTagName('head')[0].appendChild(e)
      const f = document.createElement('script')
      f.onload = () => {
        let g = null
        if (c) {
          g = 'previewInit'
        } else {
          const h = document.createElement('div')
          g = 'cbinit'
          h.id = 'cbinit'
          document.body.append(h)
        }
        const chatbox = window.chatbox
        chatbox.initChat(document.querySelector('#' + g), b, c)
      }
      f.src = 'https://chatboxappdev.mybluemix.net/static/js/chat-lib.js'
      document.getElementsByTagName('head')[0].appendChild(f)
    })('55b90326fbb8be3395008fc939642c5d', 0)
  }
}
</script>
