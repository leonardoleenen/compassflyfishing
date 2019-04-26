<template>
  <div>
    <search></search>
    <v-subheader class='pl-0 ml-0' inset>Results</v-subheader>
      <v-container fluid grid-list-xl>
        <v-layout row wrap>
          <v-flex
            xs12
            v-for="(element,id) in result"
            :key='id'>
            <deal-card
              :urlCover= 'element.program.coverPhoto'
              :destinationName= 'element.destinationName'
              :programName= 'element.program.name'
              :progrmId= 'element.program.id'
              :summary= 'element.program.summary'
              :price= 'element.program.price'
              ></deal-card>
          </v-flex>
        </v-layout>
      </v-container>
    <v-subheader class='pl-0 ml-0' inset>Programs</v-subheader>
    <div class='scrolling-wrapper'>
      <div v-for="(program,id) in programs" :key='id' class='card'>
        <deal-card
            :urlCover= 'program.coverPhoto'
            :destinationName= 'program.provider.name'
            :programName= 'program.name'
            :programId= 'program.id'
            :summary= 'program.summary'
            :price= 'program.minPrice'
            ></deal-card>
      </div>
    </div>
    <v-subheader class='pl-0 ml-0 ' inset>Destinations</v-subheader>
    <div class='scrolling-wrapper'>
      <div v-for="(destination,id) in destinations" :key='id' class='card_destination'>
        <destination-card :mantra='destination.mantra' :coverPhoto='destination.coverPhoto' class='card_destination'></destination-card>
      </div>
    </div>
  </div>
</template>

<style lang="stylus">
.scrolling-wrapper {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
}
.card {
    display: inline-block;
    padding-right 20px;
    width: 330px;
    height: 490px
  }
  .card_destination {
    display: inline-block;
    padding-right 20px;
  }
  .theme--light.v-subheader{
    color: #0277bd;
    font-size: 25px;
    padding-top 16px;
    padding-bottom 8px;
  }
 </style>

<script>
import Deal from '../components/Deal'
import Search from '../components/Search'
import DestinationCard from '../components/DestinationCard'
import { fetchPrograms, fetchDestinations } from '../services/database'

export default {
  name: 'explore',
  components: {
    'deal-card': Deal,
    'search': Search,
    'destination-card': DestinationCard
  },
  computed: {
    result() {
      return this.$store.state.explore.results
    },
    programs() {
      const programs = this.$store.state.explore.programs
      const final = []

      programs.forEach((p) => {
        const prices = []
        Object.keys(p.seasons).forEach((s) => {
          prices.push(p.seasons[s].regularPrice)
        })
        p.minPrice = prices.sort()[0]
        final.push(p)
      })
      return final
    },
    destinations() {
      return this.$store.state.explore.destinations
    }
  },
  methods: {
    search() {
      this.$store.commit('explore/setResult', this.$store.state.main.destinations)
    }
  },
  beforeMount() {
    fetchPrograms(this)
    fetchDestinations(this)
  }
}

</script>
