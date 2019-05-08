import { Component, State } from '@stencil/core';

@Component({
  tag: 'fl-program-detail',
  styleUrl: 'fl-program-detail.scss',
})
export class FLProgramDetail {
  @State() showItinerary: boolean = false
  handleShowItinerary(){
    this.showItinerary = !this.showItinerary
  }
  render() {
    return (<div>

      <fl-program-sliders> </fl-program-sliders>
      <div class="contentCard">
        <caption>
          <i class="material-icons mdc-icon-button__icon">location_on</i> Jurassic Lake
      </caption>
        <h2 class=" mdc-typography mdc-typography--headline6">First Half Week</h2>
        <h3 class=" mdc-typography mdc-typography--subtitle2">6.5 fishing days / 5 nights</h3>
        <div class="contain">
          <div class="row">
            <div class="row__inner">
              <div class="mdc-chip" tabindex="0">
                <div class="mdc-chip__text">Jan 04 to 12</div>
                <div class="mdc-chip__text blue">ARG $300000</div>
              </div>
              <div class="mdc-chip" tabindex="0">
                <div class="mdc-chip__text">Jan 04 to 12</div>
                <div class="mdc-chip__text blue">ARG $300000</div>
              </div>
              <div class="mdc-chip" tabindex="0">
                <div class="mdc-chip__text">Jan 04 to 12</div>
                <div class="mdc-chip__text blue">ARG $300000</div>
              </div>
              <div class="mdc-chip" tabindex="0">
                <div class="mdc-chip__text">Jan 04 to 12</div>
                <div class="mdc-chip__text blue">ARG $300000</div>
              </div>
            </div>
          </div>
        </div>



        <div class="m16 mdc-typography mdc-typography--body2">Jurassic Lake Lodge is the original world-class Fly fishing Lodge located in one of the most remote and wild places of Argentine Patagonia. Our lodge is strategically located at a walking distance from the inlet of the only significant tributary of Strobel Lake, the Barrancoso River. This crystal clear river together with the Lake are undoubtedly the best system in the world for trophy rainbow trout fishing.</div>


        <fl-program-rating></fl-program-rating>
      </div>

      <button  class="collapsible" onClick={this.handleShowItinerary}>Itinerary</button>
      {this.showItinerary ? <div class="content"><p>Lorem ipsum...</p></div> : '' }
      
    </div>)
  }
}
