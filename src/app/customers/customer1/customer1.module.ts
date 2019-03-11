import { NgModule } from '@angular/core';

import { defaultModuleOverrider } from '../_default/default.module';

import { Customer1TermsAndConditionsPage } from './pages/terms-and-conditions/terms-and-conditions.page';
import { Customer1PersonPage } from './pages/person/person.page';
import { Customer1RoutingModule } from './customer1.routing.module';

const customer1Module = defaultModuleOverrider({
  declarations: [
    { old: 'DefaultPersonPage', new: Customer1PersonPage },
    { old: 'DefaultTermsAndConditionsPage', new: Customer1TermsAndConditionsPage }
  ],
  imports: [
    { old: 'DefaultRoutingModule', new: Customer1RoutingModule },
  ]
});

@NgModule(customer1Module)
export class Customer1Module { }
