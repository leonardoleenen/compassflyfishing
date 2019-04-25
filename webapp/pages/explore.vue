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
  </div>
</template>

<script>
import Deal from '../components/Deal'
import Search from '../components/Search'

export default {
  name: 'explore',
  components: {
    'deal-card': Deal,
    'search': Search
  },
  computed: {
    result() {
      return this.$store.state.explore.results
    }
  },
  methods: {
    search() {
      this.$store.commit('explore/setResult', this.$store.state.main.destinations)
    }
  }
}

</script>
