<template>
  <v-conteiner>
    <v-layout
        align-center
        column
        justify-center
    >
      <search></search>
    </v-layout>
  </v-conteiner>
</template>

<script>
import Search from '../components/Search'

export default {
  name: 'index',
  components: {
    'search': Search
  }
}
</script>
