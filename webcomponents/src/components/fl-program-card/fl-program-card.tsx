import { Component, Prop, State, Element  } from '@stencil/core';
import {openProgramCard} from '../../actions';
import { Store, Action } from '@stencil/redux';
import {favProgram,fetchAvailability} from '../../globals/database';
import moment from 'moment'

@Component({
    tag: 'fl-program-card',
    styleUrl: 'fl-program-card.scss',
    shadow: true
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
    @Element() el: HTMLElement;

    @State() favProgram: boolean=false
    

    @State() showProgramDetail: boolean = false;

    @State() availability: Array<any> = [] 

    imageId: string  
    favId: string 
    openCard: Action 

    
    componentDidLoad() {
        const el = this.el.shadowRoot.querySelector('.' + this.imageId) as HTMLElement
        el.style.backgroundImage = 'url('+this.background +')'
    }

    async componentWillLoad() {
        await document.querySelector("fl-register").componentOnReady();
        this.imageId = 'image_background' + this.programId
        this.favId = 'FAVID' + this.programId

        this.store.mapDispatchToProps(this, {
            openCard: openProgramCard
          })

        console.log(fetchAvailability(this.programId).then(r => this.availability = r.datesAvailable))
        // fetchAvailability(this.programId).each(r => this.availability.push(r))
    }
    
    componentDidUpdate = () => {
       const el = this.el.shadowRoot.getElementById(this.favId) as HTMLElement
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
        console.log(this.availability)
        return (
            <div class="mdc-card demo-card demo-basic-with-header">
                <div class="mdc-card__primary-action demo-card__primary-action" tabindex="0">
                    <div class={'mdc-card__media mdc-card__media--16-9 demo-card__media image_background' + this.programId} >
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
                    <h2 class="demo-card__title mdc-typography mdc-typography--headline6 blue">Hot Dates</h2>

                    {
                        this.availability.map( d => (
                            <div class="mdc-chip" tabindex="0">
                                <div class="mdc-chip__text">{moment(d.date).format('D MMM')}</div>
                            </div>
                        ))
                    }

                </div> 
            </div>
        )
    }
}
