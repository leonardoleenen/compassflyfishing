import { Component, State, Prop, Method } from '@stencil/core';
import {fetchPrograms} from '../../globals/database';
import { Store } from '@stencil/redux';


@Component({
  tag: 'fl-program-list',
  styleUrl: 'fl-program-list.scss',
})
export class FLProgramList {
  @State() programs: Array<{}> =[]
  @State() activeProcess: string
  @State() showProgramDetail: boolean = false
  @Prop({ context: 'store' }) store: Store;
  @Prop() title: string
  

  async componentWillLoad() {
    await document.querySelector("fl-register").componentOnReady();
    const aux =  []
    fetchPrograms().then(programs => {
      programs.each(program => {
        aux.push(program)
      }).then( ()  =>  this.programs = aux)
    })

    this.store.mapStateToProps(this, (state) => {
      this.activeProcess = state.activeProcess.processID
      return {
        activeProcess: state.activeProcess.operationType
      }
    })

    
   
  }

  @Method()
  showDetailsHandler(programId){
    if (programId)
      this.showProgramDetail = true
    else
      this.showProgramDetail = false 
  }

  
  
  
  render() {
    
    let modal = null

    if ( this.activeProcess === 'OPEN PROGRAM CARD')
      modal = <fl-program-detail></fl-program-detail>
  
    if ( this.activeProcess === 'OPEN PRE RESERVE')
      modal = <fl-prereserve></fl-prereserve>

    if ( this.activeProcess === 'OPEN SEND EMAIL INFO'){
      modal = <fl-ckeckout-email></fl-ckeckout-email>
    }
      
    if ( this.activeProcess === 'OPEN RESERVE NOW')
      modal = <fl-checkout-online></fl-checkout-online>
  
    if ( this.activeProcess === 'SHOW CONFIRMATION')
      modal = <fl-confirmation-checkout></fl-confirmation-checkout>

    
    return <div>
      {modal}
      <h2 class="mdc-typography mdc-typography--headline6">
        {this.title}
      </h2>
      <div class="contain">
        <div class="row">
          <div class="row__inner">
           
            {this.programs.map(program =>(
              <div class="tile">
                <fl-program-card 
                  programId = {program['id']} 
                  programName={program['name']} 
                  background = {program['photoCover']}
                  callBack = 'PROGRAM LIST'
                  startingPrice = {program['startingPrice']}
                  summary={program['summary']}></fl-program-card>
              </div>
            ))
            }
          </div>
        </div>

      </div>
    </div>;
  }
}
