import { Component, State, Prop } from '@stencil/core';
import {callBack, openPreReserve} from '../../actions';
import { Store,Action } from '@stencil/redux';

@Component({
  tag: 'fl-program-detail',
  styleUrl: 'fl-program-detail.scss',
  shadow: true
})
export class FLProgramDetail {
  @Prop({ context: 'store' }) store: Store;
  @State() showItinerary: boolean = false
  @State() activeProcess: string

  close: Action
  openPreReserve: Action 


  handleShowItinerary() {
    this.showItinerary = !this.showItinerary
  }


  async componentWillLoad() {
    await document.querySelector("fl-register").componentOnReady()
    this.store.mapStateToProps(this, (state) => {
      this.activeProcess = state.activeProcess.processID
      return {
        activeProcess: state.activeProcess.operationType
      }
    })

    this.store.mapDispatchToProps(this, {
      close: callBack,
      openPreReserve: openPreReserve
    })
  }
  


  render() {
    

    return (
      <div class="mdc-dialog mdc-dialog--open "
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="my-dialog-title"
        aria-describedby="my-dialog-content">
        <div class="mdc-dialog__container">
          <div class="mdc-dialog__surface">

            <div class="mdc-dialog__content" id="my-dialog-content">
            <fl-program-sliders> </fl-program-sliders>
              <div class="contentCard">
                <caption>
                  <i class="material-icons mdc-icon-button__icon">location_on</i> Jurassic Lake
              </caption>
                <h2 class=" mdc-typography mdc-typography--headline5">First Half Week</h2>
                <h3 class=" mdc-typography mdc-typography--subtitle2">6.5 fishing days / 5 nights</h3>
                <div class="contain">
                  <div class="row">
                    <div class="row__inner">
                      <div class="mdc-chip" tabindex="0">
                      <div class="mdc-chip__text">Jan 04 to 12
                    <div class=" blue">ARG $300000</div></div> 
                      </div>
                      <div class="mdc-chip" tabindex="0">
                      <div class="mdc-chip__text">Jan 04 to 12
                    <div class=" blue">ARG $300000</div></div> 
                      </div>
                      <div class="mdc-chip" tabindex="0">
                      <div class="mdc-chip__text">Jan 04 to 12
                    <div class=" blue">ARG $300000</div></div> 
                      </div>
                      <div class="mdc-chip" tabindex="0">
                      <div class="mdc-chip__text">Jan 04 to 12
                    <div class=" blue">ARG $300000</div></div> 
                      </div>
                    </div>
                  </div>
                </div>
                <div class="m16 mdc-typography mdc-typography--body2">Jurassic Lake Lodge is the original world-class Fly fishing Lodge located in one of the most remote and wild places of Argentine Patagonia. Our lodge is strategically located at a walking distance from the inlet of the only significant tributary of Strobel Lake, the Barrancoso River. This crystal clear river together with the Lake are undoubtedly the best system in the world for trophy rainbow trout fishing.</div>
                <fl-program-rating></fl-program-rating>
                <button class="collapsible" onClick={this.handleShowItinerary}>Itinerary</button>
                {this.showItinerary ? <div class="content"><p>Lorem ipsum...</p></div> : ''}
                <div class="m16 mdc-typography mdc-typography--body2">Jurassic Lake Lodge is the original world-class Fly fishing Lodge located in one of the most remote and wild places of Argentine Patagonia. Our lodge is strategically located at a walking distance from the inlet of the only significant tributary of Strobel Lake, the Barrancoso River. This crystal clear river together with the Lake are undoubtedly the best system in the world for trophy rainbow trout fishing.</div>
                
            </div>
            </div>
              <footer class="mdc-dialog__actions">
                <button type="button" class="mdc-button mdc-dialog__button" data-mdc-dialog-action="close" onClick={() => this.close('PROGRAM LIST')}>
                  <span class="mdc-button__label">Cancel</span>
                </button>
                <button type="button" class="mdc-button mdc-dialog__button" data-mdc-dialog-action="accept" onClick={this.openPreReserve}>
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
