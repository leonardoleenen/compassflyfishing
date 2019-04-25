<template>
  <v-card>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <v-combobox
            v-model= 'chips'
            :items= 'destinations'
            item-text='name'
            return-object
            label= 'Your favorite destinations'
            chips
            clearable
            prepaend-icon= 'filter_list'
            solo
            multiple>
            <template v-slot:selection='data'>
              <v-chip
                :selected='data.selected'
                close
                @input='remove(data.item)'
              >
                <strong>{{data.item.name}}</strong>&nbsp;
                <span>(interest)</span>
              </v-chip>
            </template>
          </v-combobox>
        </v-flex>
        <v-flex xs6>
          <v-combobox
            :items= 'months'
            v-model='monthSelected'
            label= 'Month'
            clearable
          >
          </v-combobox>
        </v-flex>
        <v-flex xs6>
          <v-combobox
            :items= 'years'
            v-model= 'yearSelected'
            label= 'Year'
            clearable
          >
          </v-combobox>
        </v-flex>
      </v-layout>
      <v-card-actions>
        <v-flex>
          <v-btn small color='primary' @click='search'>Search</v-btn>
        </v-flex>
      </v-card-actions>
    </v-container>
  </v-card>
</template>

<script>
// import { filter } from 'rambda'

const findLowerPrice = (seasons) => {
  const prices = seasons.map(s => s.regularPrice)
  prices.sort((a, b) => { return a - b })
  return prices[0]
}

export default {
  name: 'search',
  data: () => ({
    valid: false,
    isEditing: false,
    model: null,
    chips: [],
    monthSelected: '',
    yearSelected: '',
    user: null,
    months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
    years: [2019, 2020, 2021, 2022]
  }),
  computed: {
    destinations() {
      return this.$store.state.main.destinations
    }
  },
  methods: {
    remove(item) {
      this.chips.splice(this.chips.indexOf(item), 1)
      this.chips = [...this.chips]
    },
    search() {
      // this.$store.commit('explore/setResult', filter(d => d.id === 'JURASSICLAKE', this.destinations).map(d => ({ ...d.programs, destinationName: d.name })))
      const _programs = []
      this.destinations.map(d => d.programs.map(p => _programs.push({ destinationName: d.name, photoAlbum: d.photoAlbum, program: { ...p, price: findLowerPrice(p.seasons) } })))
      this.$store.commit('explore/setResult', _programs)
      this.isEditing = true
    }
  }
}
</script>
