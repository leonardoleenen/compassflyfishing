import { Component, Prop, State } from '@stencil/core';
import {callBack,sendInfoByEmail} from '../../actions';
import { Store,Action } from '@stencil/redux';


@Component({
  tag: 'fl-ckeckout-email',
  styleUrl: 'fl-ckeckout-email.scss',
  shadow: true
})
export class CheckoutEmail {
 
  @Prop({ context: 'store' }) store: Store;
  @State() activeProcess: string

  close: Action 
  sendInfoByEmail: Action 

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
      sendInfoByEmail
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
      
          <div class="m16 mdc-typography mdc-typography--body2 center mtop30">
          Please, write your name and email below and we send you trip info, availability and travel planer to your email account. 
          </div>
          <div class="m16 mdc-typography mdc-typography--body2 center mb20">
          If you wish, you can chat with us later. Thanks for your interest!
          </div>
       
          <div class="mdc-text-field mdc-text-field--outlined mdc-text-field--with-leading-icon mdc-text-field--no-label">
            <i class="material-icons mdc-text-field__icon">person</i>
            <input class="mdc-text-field__input" placeholder="Name"  />
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
          
      </div>
             
    </div>
          <footer class="mdc-dialog__actions">
           
            <button type="button" class="demo-button mdc-button mdc-button--outlined mdc-ripple-upgraded" data-mdc-dialog-action="accept" onClick={() => this.sendInfoByEmail()}>
              <span class="mdc-button__label">Finish</span>
            </button>
          </footer>
        </div>
      </div>
      <div class="mdc-dialog__scrim"></div>
    </div>;
  }
}
