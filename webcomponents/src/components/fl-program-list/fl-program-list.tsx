import { Component } from '@stencil/core';

@Component({
  tag: 'fl-program-list',
  styleUrl: 'fl-program-list.scss',
})

export class FLProgramList {
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

      <div class="tile">
       <fl-program-card></fl-program-card>
      </div>
      <div class="tile">
       <fl-program-card></fl-program-card>
      </div>
      <div class="tile">
       <fl-program-card></fl-program-card>
      </div>
  </div>
  </div>

</div>
    </div>;
  }
}
