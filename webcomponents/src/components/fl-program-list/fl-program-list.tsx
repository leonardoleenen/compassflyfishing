import { Component, State, Prop } from '@stencil/core';
import {fetchPrograms} from '../../globals/database';

@Component({
  tag: 'fl-program-list',
  styleUrl: 'fl-program-list.scss',
})

export class FLProgramList {


  @State() programs: Array<{}> =[]
  @Prop() title: string

  componentWillLoad() {
    const aux =  []
    fetchPrograms().then(programs => {
      console.log(programs)
      programs.each(program => {
        console.log(program)
        aux.push(program)
      }).then( ()  =>  this.programs = aux)
    })
  }
  
  render() {
    console.log(this.programs)
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
