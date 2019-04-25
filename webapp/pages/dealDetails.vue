<template>
  <v-layout xs12 row>
    <v-card v-if='deal'>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color='primary'>Reserve your spot</v-btn>
      </v-card-actions>
      <v-carousel>
        <v-carousel-item
          v-for="(item,id) in deal.photoAlbum"
          :key="id"
          :src="item.url"></v-carousel-item>
      </v-carousel>
      <v-card-title class='headline'> {{deal.name}}</v-card-title>
      <v-card-text>{{deal.summary}}</v-card-text>
      <v-card-title class='subheading'> Programs</v-card-title>
      <v-card-title class='subheading'> Inclusions</v-card-title>
      <v-card-title class='subheading'> Wheather</v-card-title>
      <v-card-title class='subheading'> Fishing Gear</v-card-title>
    </v-card>
    <v-progress-linear :indeterminate='true' v-if='!deal'></v-progress-linear>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      card_text: 'Texto de prueba',
      show: false,
      rating: 4.5,
      valor: {}
    }
  },
  computed: {
    destinations() {
      return this.$store.state.main.destinations
    },
    deal() {
      const _query = this.$route.query
      console.log(_query)
      const _destinations = this.$store.state.main.destinations
      if (_destinations.length !== 0) {
        const _destination = _destinations.filter(d => d.id === _query.destination)[0]
        const _program = _destination.programs.filter(p => p.id === _query.program)[0]
        return { ..._program, destinationName: _destination.name, photoAlbum: _destination.photoAlbum }
      } else {
        return null
      }
    }
  },
  mounted() {
    this.valor = this.destinations
  }
}
</script>
