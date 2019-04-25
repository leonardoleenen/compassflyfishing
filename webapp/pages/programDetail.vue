<template>
  <div>
    <v-img :src="program.photoCover" aspect-ratio="1.7"></v-img>
    <header>
      <caption>Jurassic Lake</caption>
      <h5 class='headline'>Strobel Lake Weekly</h5>
      <v-rating v-model="program.rating" size="18"></v-rating>
    </header>
    <content>
      <h6 class='title'> In a nutshell </h6>
      <article class="caption">{{program.summary}}</article>
      <h6 class='title'> Tips Travel </h6>
      <v-expansion-panel>
        <v-expansion-panel-content
          v-for="(item,i) in 5"
          :key="i"
        >
          <template v-slot:header>
            <div>Item</div>
          </template>
          <v-card>
            <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </content>
    <v-btn absolute bottom outline color="indigo">Request Rates and Info</v-btn>
  </div>
</template>

<style>
</style>

<script>
export default {
  name: 'programDetail',
  layout: 'programDetail',
  computed: {
    program() {
      return {
        name: 'Program Name',
        rating: 4,
        photoCover: 'https://res.cloudinary.com/dtyymz4nn/image/upload/c_scale,q_35,w_1307/v1556131459/compass-app/jurassic/AK8Z0939_2.jpg',
        summary: `Jurassic Lake Lodge is the original world-class Fly fishing Lodge located in one of the most remote and wild places of Argentine Patagonia. Our lodge is strategically located at a walking distance from the inlet of the only significant tributary of Strobel Lake, the Barrancoso River. This crystal clear river together with the Lake are undoubtedly the best system in the world for trophy rainbow trout fishing.`
      }
    }
  }
}
</script>
