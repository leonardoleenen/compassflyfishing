import { Component, Method, Prop } from '@stencil/core';
import { Store } from '@stencil/redux';
import {configureStore} from '../../store';
import moment from 'moment';

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
 
  @Prop({ context: 'store' }) store: Store;
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

  componentWillLoad() {
    window['m'] = moment
    this.store.setStore(configureStore({}));
  }
  
  render() {
    return <slot/>;
  }
}
