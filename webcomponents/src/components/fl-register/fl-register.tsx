import { Component, Method, Prop } from '@stencil/core';
import {
  loadPrograms,
  cleanDatabase
} from '../../globals/database';

@Component({
  tag: 'fl-register',
  styleUrl: 'fl-register.scss',
  shadow: true
})
export class FLRegister {
 

  @Prop({mutable:true}) sync: boolean  

  @Method()
  loadPrograms() {
    loadPrograms()
  }

  @Method()
  cleanDatabase() {
    cleanDatabase()
  }

  @Method()
  syncData() {
    this.sync = !this.sync
  }
  
  render() {
    console.log('render')
    return <slot/>;
  }
}
