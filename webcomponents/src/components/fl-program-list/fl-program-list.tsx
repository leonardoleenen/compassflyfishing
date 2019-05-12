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
      console.log(programs)
      programs.each(program => {
        console.log(program)
        aux.push(program)
      }).then( ()  =>  this.programs = aux)
    })

    this.store.mapStateToProps(this, (state) => {
      console.log(state)
      //this.activeProcess = state.activeProcess.processID
      return {
        activeProcess: state.activeProcess.processID
        
      }
    });
    
    console.log(this)
  }

  @Method()
  showDetailsHandler(programId){
    console.log(programId)
    if (programId)
      this.showProgramDetail = true
    else
      this.showProgramDetail = false 
  }

  
  
  
  render() {
    
    if (this.showProgramDetail)
      return <fl-program-detail></fl-program-detail>
    
    return <div>
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
