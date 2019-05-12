import { Component } from '@stencil/core';

@Component({
  tag: 'fl-confirmation-checkout',
  styleUrl: 'fl-confirmation-checkout.scss',
})
export class confirmationCheckout {
 
  
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
          <button class="mdc-icon-button material-icons close" data-mdc-dialog-action="close">close</button>
          <button class="mdc-icon-button material-icons close fLR" data-mdc-dialog-action="close">vertical_align_bottom</button>
          <button class="mdc-icon-button material-icons close fLR mr16" data-mdc-dialog-action="close">calendar_today</button>
          
          <div class="m16 mdc-typography--headline5 center">Thanks for your purchase. We send to leonardo@flicktrip.com email a receipt and invoice with all trip info and travel planner as well.
           </div>
           <div class="m16 mdc-typography mdc-typography--headline5 center"> Your trip was confirmed with this constraints:</div>
          <ul class="mdc-list">
            <li class="mdc-list-item mdc-ripple-upgraded" tabindex="0" id="7e71316e-cc5e-4e8a-aab1-0e2e33e23557">
            <span class="mdc-list-item__graphic material-icons" aria-hidden="true">location_on</span>
            <div class="text mdc-typography--body2">Jurassic Lake, Weekly program</div></li>
            <li class="mdc-list-item mdc-ripple-upgraded" tabindex="0" id="7e71316e-cc5e-4e8a-aab1-0e2e33e23557">
            <span class="mdc-list-item__graphic material-icons" aria-hidden="true">calendar_today</span>
            <div class="text mdc-typography--body2">Your trips start at March 12, 2019 till March 22 2019</div></li>
            <li class="mdc-list-item mdc-ripple-upgraded" tabindex="0" id="7e71316e-cc5e-4e8a-aab1-0e2e33e23557">
            <span class="mdc-list-item__graphic material-icons" aria-hidden="true">person</span>
            <div class="text mdc-typography--body2">For 2 anglers and 1 non Angler</div></li>
            <li class="mdc-list-item mdc-ripple-upgraded" tabindex="0" id="7e71316e-cc5e-4e8a-aab1-0e2e33e23557">
            <span class="mdc-list-item__graphic material-icons" aria-hidden="true">attach_money</span>
            <div class="text mdc-typography--body2">Your invoice will be for $ 3,850 and will charge now 50% ($ 1,925) as pay in advance</div></li>
            
          </ul>
          <h1 class="center mb20">YR435WA</h1>

          <ul class="mdc-list pb30">
            <li class="mdc-list-item mdc-ripple-upgraded" tabindex="0" id="7e71316e-cc5e-4e8a-aab1-0e2e33e23557">
            <span class="mdc-list-item__graphic material-icons" aria-hidden="true">photo_camera</span>
            <div class="text mdc-typography--body2">This is Your reservation code, will be a good idea take an screenshot</div></li>
            
          </ul>
            </div>
             
        </div>
          
        </div>
      </div>
      <div class="mdc-dialog__scrim"></div>
    </div>;
  }
}
