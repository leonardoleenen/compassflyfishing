import { Component, Prop,State } from '@stencil/core';
import {callBack} from '../../actions';
import { Store,Action } from '@stencil/redux';


@Component({
  tag: 'fl-prereserve',
  styleUrl: 'fl-prereserve.scss',
})
export class PreReserve {

  @Prop({ context: 'store' }) store: Store;
  @State() activeProcess: string

  close: Action 

  async componentWillLoad() {
    await document.querySelector("fl-register").componentOnReady()
    this.store.mapStateToProps(this, (state) => {
      this.activeProcess = state.activeProcess.processID
      return {
        activeProcess: state.activeProcess.operationType
      }
    })

    this.store.mapDispatchToProps(this, {
      close: callBack
    })
  }

  openDrawer() {
    const drawer  = document.getElementsByClassName('drawer')[0]
    drawer.classList.add('transition')
    const surface =  document.getElementsByClassName('mdc-dialog__surface')[0] as HTMLElement
    surface.style.backgroundColor="#ccc"
  }

  closeDrawer() {
    const drawer  = document.getElementsByClassName('drawer')[0]
    drawer.classList.remove('transition')
    const surface = document.getElementsByClassName('mdc-dialog__surface')[0] as HTMLElement
    surface.style.backgroundColor="#fff"
  }

  render() {
    return <div class="mdc-dialog mdc-dialog--open "
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="my-dialog-title"
      aria-describedby="my-dialog-content">
      <div class="mdc-dialog__container">
        <div class="mdc-dialog__surface">
          <div class="mdc-dialog__content" id="my-dialog-content">
            <div class="container">
              <button class="mdc-icon-button material-icons close" data-mdc-dialog-action="close" onClick={() => this.close('PROGRAM LIST')}>close</button>

              <h2 class="mdc-typography--headline3">First Half Week</h2>
              <h4 class="mdc-typography--headline6">Jurassic Lake</h4>
              <div class="m16 mdc-typography mdc-typography--body2">Jurassic Lake Lodge is the original world-class Fly fishing Lodge located in one of the most remote and wild places of Argentine Patagonia. Our lodge is strategically located at a walking distance from the inlet of the only significant tributary of Strobel Lake, the Barrancoso River. This crystal clear river together with the Lake are undoubtedly the best system in the world for trophy rainbow trout fishing.</div>
              <ul class="mdc-list">
                <li class="mdc-list-item mdc-ripple-upgraded" tabindex="0" id="7e71316e-cc5e-4e8a-aab1-0e2e33e23557">
                  <span class="mdc-list-item__graphic material-icons" aria-hidden="true">calendar_today</span>
                  Your trips start at March 12, 2019 till March 22 2019</li>
                <li class="mdc-list-item mdc-ripple-upgraded" tabindex="0" id="7e71316e-cc5e-4e8a-aab1-0e2e33e23557">
                  <span class="mdc-list-item__graphic material-icons" aria-hidden="true">person</span>
                  For 2 anglers and 1 non Angler</li>
                <li class="mdc-list-item mdc-ripple-upgraded" tabindex="0" id="7e71316e-cc5e-4e8a-aab1-0e2e33e23557">
                  <div class="mdc-checkbox mdc-list-item__meta mdc-checkbox--upgraded mdc-ripple-upgraded mdc-ripple-upgraded--unbounded">
                    <input type="checkbox" class="mdc-checkbox__native-control" aria-labelledby="8f81afb3-2255-4ee7-96fc-f0038b99564e" tabindex="-1" />
                    <div class="text">I have been read and accept terms and conditions</div>
                  </div>
                </li>
                <li class="mdc-list-item mdc-ripple-upgraded" tabindex="0" id="7e71316e-cc5e-4e8a-aab1-0e2e33e23557">
                  <div class="mdc-checkbox mdc-list-item__meta mdc-checkbox--upgraded mdc-ripple-upgraded mdc-ripple-upgraded--unbounded">
                    <input type="checkbox" class="mdc-checkbox__native-control" aria-labelledby="8f81afb3-2255-4ee7-96fc-f0038b99564e" tabindex="-1" />
                    <div class="text">I have been read and accept inclusion and exclusion terms</div>
                  </div>
                </li>
                <li class="mdc-list-item mdc-ripple-upgraded" tabindex="0" id="7e71316e-cc5e-4e8a-aab1-0e2e33e23557">
                  <div class="mdc-checkbox mdc-list-item__meta mdc-checkbox--upgraded mdc-ripple-upgraded mdc-ripple-upgraded--unbounded">
                    <input type="checkbox" class="mdc-checkbox__native-control" aria-labelledby="8f81afb3-2255-4ee7-96fc-f0038b99564e" tabindex="-1" />
                    <div class="text">Program Info</div>
                  </div>
                </li>
              </ul>
              <h1>$3,870</h1>

             
            </div>

          </div>
          <footer class="mdc-dialog__actions">
          

            <button type="button" class="demo-button mdc-button mdc-button--outlined mdc-ripple-upgraded" data-mdc-dialog-action="accept" onClick={this.openDrawer}>
              <span class="mdc-button__label">Continue</span>
            </button>
          </footer>
          <div class="drawer">
                <ul class="command-list mdc-list">
                  <li class="mdc-list-item mdc-ripple-upgraded" tabindex="0">
                    <span class="mdc-list-item__graphic material-icons" aria-hidden="true">credit_card</span>
                    I want to reserve right now
                  </li>
                  <li class="mdc-list-item mdc-ripple-upgraded" tabindex="0" >
                    <span class="mdc-list-item__graphic material-icons" aria-hidden="true">chat_bubble_outline</span>
                    I want to chat with sales assistant
                  </li>
                  <li class="mdc-list-item mdc-ripple-upgraded" tabindex="0" >
                    <span class="mdc-list-item__graphic material-icons" aria-hidden="true">call</span>
                    Please, call me back
                  </li>
                  <li class="mdc-list-item mdc-ripple-upgraded" tabindex="0" >
                    <span class="mdc-list-item__graphic material-icons" aria-hidden="true">email</span>
                    Only Info, I want to reserve later
                  </li>
                  <li class="mdc-list-item mdc-ripple-upgraded" tabindex="0" >
                    <span class="mdc-list-item__graphic material-icons" aria-hidden="true">share</span>
                    Send this deal to a friend
                  </li>
                  <li class="mdc-list-item mdc-ripple-upgraded" tabindex="0"  onClick={this.closeDrawer}>
                    <span class="mdc-list-item__graphic material-icons" aria-hidden="true">close</span>
                    Close
                  </li>
                 
                </ul>
              </div>
        </div>
      </div>
      <div class="mdc-dialog__scrim"></div>
    </div>;
  }
}
