import { Component, Prop, State  } from '@stencil/core';
import {openProgramCard} from '../../actions';
import { Store, Action } from '@stencil/redux';
import {favProgram} from '../../globals/database';


@Component({
    tag: 'fl-program-card',
    styleUrl: 'fl-program-card.scss'
})
export class FLProgramCard {
    @Prop({ context: 'store' }) store: Store;
    @Prop() programName: string
    @Prop() destinationName: string
    @Prop() summary: string 
    @Prop() background: string
    @Prop() startingPrice: number
    @Prop() programId: string
    @Prop() callBack: string 
     

    @State() favProgram: boolean=false

    @State() showProgramDetail: boolean = false;

    imageId: string  
    favId: string 
    openCard: Action 

    
    componentDidLoad() {
        const el = document.getElementsByClassName(this.imageId)[0] as HTMLElement
        el.style.backgroundImage = 'url('+this.background +')'
    }

    async componentWillLoad() {
        await document.querySelector("fl-register").componentOnReady();
        this.imageId = 'mdc-card__media mdc-card__media--16-9 demo-card__media image_backgrund' + this.programId
        this.favId = 'FAVID' + this.programId

        this.store.mapDispatchToProps(this, {
            openCard: openProgramCard
          })
    }
    
    componentDidUpdate = () => {
       const el = document.getElementById(this.favId) as HTMLElement
       this.favProgram ? el.style.color = 'red' : el.style.color = 'white'
    }

    /*
    showProgramDetailHandler(programId) {
        const el = document.querySelector('fl-program-list')
        this.showProgramDetail = !this.showProgramDetail
        if (this.showProgramDetail)
            el.showDetailsHandler(programId)
        else
            el.showDetailsHandler(null)
        // this.showProgramDetail.emit(this.programId)
    }*/

    render() {
        return (
            <div class="mdc-card demo-card demo-basic-with-header">
                <div class="mdc-card__primary-action demo-card__primary-action" tabindex="0">
                    <div class={this.imageId} >
                       <div class="app-fab--absolute white">
                       <button class="mdc-icon-button mdc-card__action mdc-card__action--icon--unbounded" aria-pressed="false" aria-label="Add to favorites" title="Add to favorites" onClick={() => {
                           this.favProgram = favProgram(this.programId,this.favId)
                       }}>
                        <i id={this.favId} class="material-icons mdc-icon-button__icon">favorite</i>
                    </button>
                    <button class="mdc-icon-button material-icons mdc-card__action mdc-card__action--icon--unbounded" title="Share" data-mdc-ripple-is-unbounded="true">share</button>
                       </div>
                    </div>
                </div>
                <div class="demo-card__primary">
                    <h2 class="demo-card__title mdc-typography mdc-typography--headline6">{this.programName}</h2>
                    <fl-program-rating></fl-program-rating>
                    <h3 class="demo-card__subtitle mdc-typography mdc-typography--subtitle2">Starting from ${this.startingPrice}</h3>
                    <div class="demo-card__secondary mdc-typography mdc-typography--body2" onClick={() => this.openCard(this.programId)}>{this.summary}</div>
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
