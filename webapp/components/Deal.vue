<template>
  <v-card>
     <v-card-text style='position: relative; padding:0px; top:25px;'>
        <v-btn
          flat
          icon
          absolute
          fab
          top
          small
          right>
          <v-icon color='white'>favorite</v-icon>
        </v-btn>
      </v-card-text>
    <v-img :src='urlCover' aspect-ratio='1.33'></v-img>
    <v-card-title primary-title pb-0 pt-0>
      <v-container grid-list-sm pl-0 pb-0>
        <caption>
        <v-icon size='14'>location_on</v-icon>{{ destinationName}} -  {{ programName }} program
      </caption>
        <v-flex pt-0 pb-0 pl-0>
          <h3 class='headline mb-0'>USD {{ price }},00</h3>
        </v-flex>
      </v-container>
    </v-card-title>
     <article class='textCard'> {{summary}}</article>
     <div class='reviews'>
        <v-rating v-model='rating' small></v-rating>
        <span>46 reviews</span>
      </div>
    <v-card-actions>
      <v-btn outline color='indigo'>Reserve</v-btn>
      <v-btn icon>
        <v-icon>share</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
     </v-card-actions>
  </v-card>
</template>
<style>
caption {
  font-size: 0.875rem;
  line-height: 1.75rem;
  font-weight: 500;
  letter-spacing: 0.0071428571em;
  text-decoration: inherit;
  text-align: left;
}
.headline {
  font-size: 1.25rem;
  font-weight: 500;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 400;
  letter-spacing: normal;
  letter-spacing: 0.0125em;
}
.v-sheet {
    border-radius: 4px;
}
.textCard {
  padding: 1rem;
  padding-top: 0px;
  overflow: hidden;
  margin-right: 16px
}
.v-image {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
}
.demo-card__primary {
    padding: 1rem;
}
.v-card__title--primary {
    padding-top: 0px;
    padding-bottom: 0px;
}
.v-card__title {
    padding: 1rem;
}
.v-rating .v-icon {
  padding: 0px;
}
.reviews {
  display: grid;
  padding-left: 1rem;
  padding-bottom: 16px;}
</style>
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
