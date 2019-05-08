import { Component, State, Prop } from '@stencil/core';
import {fetchPrograms} from '../../globals/database';

@Component({
  tag: 'fl-program-list',
  styleUrl: 'fl-program-list.scss',
})

export class FLProgramList {


  @State() programs: Array<{}> =[]
  @Prop() title: string

  async componentWillLoad() {
    await fetchPrograms().each(program => {
      this.programs.push(program)
    })
  }

  

  render() {
    return <div>
      <h2 class="mdc-typography mdc-typography--headline6">
        {this.title}
      </h2>
      <div class="contain">
        <div class="row">
          <div class="row__inner">
            <a class="arrow arrow-prev" href="#item-3"></a>
            <a class="arrow arrow-next" href="#item-2"></a>
            {this.programs.map(program =>(
              <div class="tile">
                <fl-program-card programName={program['name']} summary={program['summary']}></fl-program-card>
              </div>
            ))
            }
          </div>
        </div>

      </div>
    </div>;
  }
}
