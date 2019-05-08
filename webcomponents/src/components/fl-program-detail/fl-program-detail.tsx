import { Component, State } from '@stencil/core';

@Component({
  tag: 'fl-program-detail',
  styleUrl: 'fl-program-detail.scss'
})
export class FLProgramDetail {
  @State() showItinerary: boolean = false
  handleShowItinerary() {
    this.showItinerary = !this.showItinerary
  }

  programDetail = () => {
    return (<div class="mdc-dialog mdc-dialog--open mdc-dialog--scrollable"
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="my-dialog-title"
      aria-describedby="my-dialog-content">

      <div class="mdc-dialog__container">
        <div class="mdc-dialog__surface">

          <h2 class="mdc-dialog__title" id="my-dialog-title">
          Jurassic Lake
          </h2>

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

          <button class="collapsible" onClick={this.handleShowItinerary}>Itinerary</button>
          {this.showItinerary ? <div class="content"><p>Lorem ipsum...</p></div> : ''}
        </div>
      </div>

    </div>)
  }
  render() {
    return (
      <div class="mdc-dialog mdc-dialog--open"
     role="alertdialog"
     aria-modal="true"
     aria-labelledby="my-dialog-title"
     aria-describedby="my-dialog-content">
  <div class="mdc-dialog__container">
    <div class="mdc-dialog__surface">
      
      <h2 class="mdc-dialog__title" id="my-dialog-title">
    </h2>
      <div class="mdc-dialog__content" id="my-dialog-content">
        <ul class="mdc-list">
          <li class="mdc-list-item" tabindex="0">
            <span class="mdc-list-item__graphic">
              <div class="mdc-radio">
                <input class="mdc-radio__native-control"
                       type="radio"
                       id="test-dialog-baseline-confirmation-radio-1"
                       name="test-dialog-baseline-confirmation-radio-group"
                       checked></input>
                <div class="mdc-radio__background">
                  <div class="mdc-radio__outer-circle"></div>
                  <div class="mdc-radio__inner-circle"></div>
                </div>
              </div>
            </span>
           
          </li>
         
        </ul>
      </div>
      <footer class="mdc-dialog__actions">
        <button type="button" class="mdc-button mdc-dialog__button" data-mdc-dialog-action="close">
          <span class="mdc-button__label">Cancel</span>
        </button>
        <button type="button" class="mdc-button mdc-dialog__button" data-mdc-dialog-action="accept">
          <span class="mdc-button__label">Reserve this spot</span>
        </button>
      </footer>
    </div>
  </div>
  <div class="mdc-dialog__scrim"></div>
</div>
    )
  }
}
