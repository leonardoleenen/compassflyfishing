import { Component } from '@stencil/core';

@Component({
  tag: 'fl-ckeckout-email',
  styleUrl: 'fl-ckeckout-email.scss',
})
export class CheckoutEmail {
 
  
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
           
            <button type="button" class="demo-button mdc-button mdc-button--outlined mdc-ripple-upgraded" data-mdc-dialog-action="accept">
              <span class="mdc-button__label">Finish</span>
            </button>
          </footer>
        </div>
      </div>
      <div class="mdc-dialog__scrim"></div>
    </div>;
  }
}
