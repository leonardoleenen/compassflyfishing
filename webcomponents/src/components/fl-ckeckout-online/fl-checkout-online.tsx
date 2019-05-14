import { Component, Prop,State } from '@stencil/core';
import {callBack, showConfirmation} from '../../actions';
import { Store,Action } from '@stencil/redux';

@Component({
  tag: 'fl-checkout-online',
  styleUrl: 'fl-checkout-online.scss',
})
export class CheckoutOnline {

  @Prop({ context: 'store' }) store: Store;
  @State() activeProcess: string

  close: Action 
  showConfirmation: Action
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
      showConfirmation
    })
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

              <div class="m16 mdc-typography mdc-typography--body2 center top48 b30">
                Thanks for choose Weekly Program of Jurassic Lake. Now, we will request to you some information (and confirmation) for book your your trip. Please read info below and press confirm button.
          Notice that we use Stripe service for this transaction. At the end you will recibe an invoice and receipt.</div>

              <h2 class="mdc-typography--headline6 " >Personal Information</h2>

              <div class="mdc-text-field mdc-text-field--outlined mdc-text-field--with-leading-icon mdc-text-field--no-label">
                <i class="material-icons mdc-text-field__icon">person</i>
                <input class="mdc-text-field__input" placeholder="Name" />
                <div class="mdc-notched-outline">
                  <div class="mdc-notched-outline__leading"></div>
                  <div class="mdc-notched-outline__trailing"></div>
                </div>
              </div>

              <div class="mdc-text-field mdc-text-field--outlined mdc-text-field--with-leading-icon mdc-text-field--no-label">
                <i class="material-icons mdc-text-field__icon">email</i>
                <input class="mdc-text-field__input" placeholder="Email" />
                <div class="mdc-notched-outline">
                  <div class="mdc-notched-outline__leading"></div>
                  <div class="mdc-notched-outline__trailing"></div>
                </div>
              </div>

              <h2 class="mdc-typography--headline6 " >Credit Card Info</h2>

              <div class="mdc-text-field mdc-text-field--outlined mdc-text-field--with-leading-icon mdc-text-field--no-label">
                <i class="material-icons mdc-text-field__icon">credit_card</i>
                <input class="mdc-text-field__input" placeholder="Number" />
                <div class="mdc-notched-outline">
                  <div class="mdc-notched-outline__leading"></div>
                  <div class="mdc-notched-outline__trailing"></div>
                </div>
              </div>
              <div class="price center top48">$3,870</div>
            </div>

          </div>
          <footer class="mdc-dialog__actions">

            <button type="button" class="demo-button mdc-button mdc-button--outlined mdc-ripple-upgraded" data-mdc-dialog-action="accept" onClick={() => this.showConfirmation()}>
              <span class="mdc-button__label">Finish</span>
            </button>
          </footer>
        </div>
      </div>
      <div class="mdc-dialog__scrim"></div>
    </div>;
  }
}
