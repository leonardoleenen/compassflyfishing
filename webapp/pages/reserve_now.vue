<template>
  <div>
    <v-stepper v-model='e6'  vertical>
      <h1 class='pl-4 pt-2 headline'>Reserve Now</h1>
      <v-stepper-step :complete='e6 > 1' step='1'>
        Welcome letter
        <small>Sumarrize if need</small>
      </v-stepper-step>
      <v-stepper-content step='1'>
        <v-text-field
          v-model = 'email'
          :rules = 'emailRules'
          label = 'E-mail'
          required></v-text-field>
        <v-btn color='primary' @click='e6 = 2'>Continue</v-btn>
      </v-stepper-content>
      <v-stepper-step :complete='e6 > 2' step='2'>Program Details</v-stepper-step>
      <v-stepper-content step='2'>
        <v-btn color='primary' @click='e6 = 3'>Continue</v-btn>
      </v-stepper-content>
      <v-stepper-step :complete='e6 > 3' step='4'>Choose date</v-stepper-step>
      <v-stepper-content step='3'>
        <v-btn color='primary' @click='e6 = 4'>Continue</v-btn>
      </v-stepper-content>
      <v-stepper-step :complete='e6 > 4' step='5'>Terms and conditions</v-stepper-step>
      <v-stepper-content step='4'>
        <v-btn color='primary' @click='e6 = 5'>Continue</v-btn>
      </v-stepper-content>
    </v-stepper>
  </div>
</template>

<script>
export default {
  name: 'Reserve now',
  data() {
    return {
      text: '',
      params: '',
      e6: 1
    }
  },
  methods: {
    appendIconCallback() {},
    prependIconCallback() {}
  },
  computed: {
    destinations() {
      return this.$store.state.main.destinations
    },
    deal() {
      const _query = this.$route.query
      const _destinations = this.$store.state.main.destinations
      if (_destinations.length !== 0) {
        const _destination = _destinations.filter(d => d.id === _query.destination)[0]
        const _program = _destination.programs.filter(p => p.id === _query.program)[0]
        return { ..._program, destinationName: _destination.name, photoAlbum: _destination.photoAlbum }
      } else {
        return null
      }
    }
  }
}
</script>
