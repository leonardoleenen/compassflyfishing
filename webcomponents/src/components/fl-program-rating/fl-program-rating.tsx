import { Component } from '@stencil/core';

@Component({
  tag: 'fl-program-rating',
  styleUrl: 'fl-program-rating.scss',
})
export class ProgramRating {
 
  
  render() {
    return <div>
        <div class="rating">
            <button class="mdc-icon-button material-icons">start</button>
            <button class="mdc-icon-button material-icons">start</button>
            <button class="mdc-icon-button material-icons">start</button>
            <button class="mdc-icon-button material-icons">start</button>
            <button class="mdc-icon-button material-icons">start</button>
        </div>
    </div>;
  }
}
