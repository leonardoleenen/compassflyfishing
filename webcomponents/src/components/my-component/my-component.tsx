import { Component } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
 
  
  render() {
    return <div>this is an empty component</div>;
  }
}
