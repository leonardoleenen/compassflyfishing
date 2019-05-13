import { Component } from '@stencil/core';

@Component({
    tag: 'fl-program-sliders',
    styleUrl: 'fl-program-sliders.scss',
})
export class FLProgramSliders {

    render() {
        return (<div>
            <div id="images">

                <img id="image1" src="https://i.imgur.com/dL3io.jpg" />
                <img id="image2" src="https://i.imgur.com/qASVX.jpg" />
                <img id="image3" src="https://i.imgur.com/fLuHO.jpg" />
                <img id="image4" src="https://i.imgur.com/5Sd3Q.jpg" />
                <div class="app-fab--absolute white">
                    <button class="mdc-icon-button material-icons mdc-card__action mdc-card__action--icon--unbounded" aria-pressed="false" aria-label="Add to favorites" title="Add to favorites">
                       favorite_border
                    </button>
                    <button class="mdc-icon-button material-icons mdc-card__action mdc-card__action--icon--unbounded" title="Share" data-mdc-ripple-is-unbounded="true">share</button>
                </div>
                <div id="slider">
                    <div class="indicator"><a href="#image1"></a></div>
                    <div class="indicator">  <a href="#image2"></a></div>
                    <div class="indicator"><a href="#image3"></a></div>
                    <div class="indicator" ><a href="#image4"></a></div>
                </div>
            </div>

        </div>)
    }
}
