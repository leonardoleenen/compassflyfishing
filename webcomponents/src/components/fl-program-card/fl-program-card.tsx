import { Component, Prop } from '@stencil/core';

@Component({
    tag: 'fl-program-card',
    styleUrl: 'fl-program-card.scss',
})
export class FLProgramCard {

    @Prop() programName: string
    @Prop() destinationName: string
    @Prop() summary: string 
    @Prop() background: string

    componentDidLoad = () => {
        const el = document.getElementsByClassName('image_background')[0] as HTMLElement
        el.style.backgroundImage = 'url(https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg)'
    }

    render() {
        return (
            <div class="mdc-card demo-card demo-basic-with-header">
                <div class="mdc-card__primary-action demo-card__primary-action" tabindex="0">
                    <div class="image_background mdc-card__media mdc-card__media--16-9 demo-card__media">
                       <div class="app-fab--absolute white">
                       <button class="mdc-icon-button mdc-card__action mdc-card__action--icon--unbounded " aria-pressed="false" aria-label="Add to favorites" title="Add to favorites">
                        <i class="material-icons mdc-icon-button__icon mdc-icon-button__icon--on">favorite</i>
                        <i class="material-icons mdc-icon-button__icon">favorite_border</i>
                    </button>
                    <button class="mdc-icon-button material-icons mdc-card__action mdc-card__action--icon--unbounded" title="Share" data-mdc-ripple-is-unbounded="true">share</button>
                  
                       </div>
                    </div>
                </div>
                <div class="demo-card__primary">
                    <h2 class="demo-card__title mdc-typography mdc-typography--headline6">{this.programName}</h2>
                    <fl-program-rating></fl-program-rating>
                    <h3 class="demo-card__subtitle mdc-typography mdc-typography--subtitle2">Starting from $6,850</h3>
                    <div class="demo-card__secondary mdc-typography mdc-typography--body2">{this.summary}</div>
                    <h2 class="demo-card__title mdc-typography mdc-typography--headline6">Hot Dates</h2>
                   
                    <div class="mdc-chip" tabindex="0">
                        <div class="mdc-chip__text">4 jan</div>
                    </div>
                    <div class="mdc-chip" tabindex="0">
                        <div class="mdc-chip__text">5 apr</div>
                    </div>
                </div>
                
            </div>
        )
    }
}
