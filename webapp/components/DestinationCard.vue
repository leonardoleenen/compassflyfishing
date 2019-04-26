<template>
<v-layout>
  <div class="mdc-card demo-card demo-basic-with-text-over-media">
  <v-img
          class="white--text"
          height="350px"
          width="350px"
          :src="coverPhoto"
        >
        <div class="mdc-card__media-content demo-card__media-content">
          <div class="demo-card__primary">
            <h2 class="demo-card__title mdc-typography mdc-typography--headline6">{{mantra}}</h2>
          </div>
      </div>
      </v-img>
    </div>
  </v-layout>
</template>

<style>
.demo-basic-with-text-over-media .demo-card__media-content{
  display: flex;
  align-items: flex-end;
  bottom: 60px;
  position: absolute;
}
</style>
<script>
export default {
  name: 'DestinationCard',
  props: [
    'mantra',
    'coverPhoto'
  ]
}
</script>
