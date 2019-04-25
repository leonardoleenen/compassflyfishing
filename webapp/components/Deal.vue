<template>
  <v-card>
    <v-img :src='urlCover' aspect-ratio='1.33'></v-img>
    <v-card-title primary-title pb-0 pt-0>
      <v-container grid-list-sm pl-0 pb-0>
        <v-layout row align-start wrap>
          <v-flex xs1 pt-0 pb-0>
            <v-icon>location_on</v-icon>
          </v-flex>
          <v-flex xs11 pt-0 pb-0>
            <div>{{ destinationName}} -  {{ programName }} program</div>
          </v-flex>
        </v-layout>
        <v-flex pt-0 pb-0 pl-0>
          <h3 class='headline mb-0'>from USD {{ price }},00</h3>
        </v-flex>
      </v-container>
    </v-card-title>
    <v-card-actions>
      <v-btn outline color='indigo'>Reserve</v-btn>
      <v-btn icon>
        <v-icon>{{ user.favorite.find(e => e === programName) ? 'favorite_border' : 'favorite'}}</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>share</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon @click='show = !show'>
        <v-icon>{{show ? 'keyboard_arrow_down' : 'keyboard_arrow_up'}}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-slide-y-transition>
      <v-card-text v-show='show'>{{summary}}</v-card-text>
    </v-slide-y-transition>
  </v-card>
</template>

<script>
export default {
  name: 'deal-card',
  props: [
    'urlCover',
    'destinationName',
    'summary',
    'programName',
    'programId',
    'price'
  ],
  data: () => ({
    card_text: 'TExto de prueba',
    rating: 3,
    show: false
  }),
  computed: {
    user() {
      return this.$store.state.main.user
    }
  }
}
</script>
