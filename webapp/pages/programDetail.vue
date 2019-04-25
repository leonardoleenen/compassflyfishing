<template>
  <div>
  <div>
    <v-card-text style="position: relative; padding:0px; top:25px;">
    <v-btn
      flat
      icon
      absolute
      fab
      top
      small
      left>
      <v-icon color="white">arrow_back_ios</v-icon>
    </v-btn>
    </v-card-text>
   <v-img :src="program.photoCover" aspect-ratio="1.7"></v-img>
    <v-card-text style="position: relative; padding:0px">
      <v-btn
        absolute
        dark
        fab
        top
        right
        color="cyan accent-2"
        >
        <v-icon color="white">favorite</v-icon>
      </v-btn>
    </v-card-text>
            </div>
    <header>
      <caption>  <v-icon size="14" >location_on </v-icon> Strobel Lake Weekly - Jurassic Lake</caption>
      <h5 class='headline'>Starting from USD 3,850 </h5>
      <div class="reviews">
      <v-rating v-model="program.rating" small></v-rating> <span> 46 reviews</span>
      </div>
    </header>
    <div>
      <h6 class='title'> In a nutshell </h6>
      <article class="textCard">{{program.summary}}</article>
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
      <v-btn  outline color="indigo" >Request Rates and Info</v-btn>
    </div>
    </div>
</template>

<style>
header{
  padding:1rem;
}
.headline{
  font-size: 1.25rem;
  font-weight: 500;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 400;
  letter-spacing: normal;
  letter-spacing: .0125em;
}
.title{
  padding:1rem;
}
caption{
  font-size: 0.875rem;
  line-height: 1.375rem;
  font-weight: 500;
  letter-spacing: 0.0071428571em;
  text-decoration: inherit;
  width:100%;
  min-width: 300px;
  text-align: left;
}
.textCard{
  padding:1rem;
  padding-top:0px;
}
.v-rating .v-icon {
  padding:0px;
}
.reviews{
  display: grid;
  grid-template-columns: 90px 1fr;
}
.v-expansion-panel{
  margin-bottom: 48px;
  margin-top: 16px;
}
.v-btn.v-btn--outline{
 margin: auto;
margin-bottom: 30px;
margin-left: 20%;
}
content{
  padding:1rem;
}
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
