import { NgModule } from '@angular/core';

import { defaultModuleOverrider } from '../_default/default.module';

import { Customer3RoutingModule } from './customer3.routing.module';

const customer3Module = defaultModuleOverrider({
  imports: [
    { old: 'DefaultRoutingModule', new: Customer3RoutingModule }
  ]
});

@NgModule(customer3Module)
export class Customer3Module { }
