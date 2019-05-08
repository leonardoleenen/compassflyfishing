import { Component, State } from '@stencil/core';
import {fetchPrograms} from '../../globals/database';

@Component({
  tag: 'fl-program-list',
  styleUrl: 'fl-program-list.scss',
})

export class FLProgramList {


  @State() programs: Array<{}> =[]

  componentWillLoad() {
    const aux = []
    fetchPrograms().each(() => {
      aux.push({summary: 'this is summary'})
    })
    window['aux'] = aux 
    
    this.programs = aux
    window['programs'] = this.programs
  }

  

  render() {

    return <div>
      <h2>
        titulo
      </h2>
      <div class="contain">
        <div class="row">
          <div class="row__inner">
            <a class="arrow arrow-prev" href="#item-3"></a>
            <a class="arrow arrow-next" href="#item-2"></a>
            {this.programs.map(program =>(
              <div class="tile">
                <fl-program-card summary={program['summary']}></fl-program-card>
              </div>
            ))

            }
           
          </div>
        </div>

      </div>
    </div>;
  }
}
