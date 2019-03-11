import { NgModule } from '@angular/core';

import { defaultModuleOverrider } from '../_default/default.module';

import { Customer2HomePage } from './pages/home/home.page';
import { InputComponent } from './components/input/input.component';
import { Customer2PrivacyPoliciesPage } from './pages/privacy-policies/privacy-policies.page';
import { Customer2RoutingModule } from './customer2.routing.module';

const customer2Module = defaultModuleOverrider({
  declarations: [
    { old: 'DefaultHomePage', new: Customer2HomePage },
    { old: 'DefaultInputComponent', new: InputComponent },
    { new: Customer2PrivacyPoliciesPage }
  ],
  imports: [
    { old: 'DefaultRoutingModule', new: Customer2RoutingModule },
    { old: 'DefaultTermsAndConditionsPage' }
  ],
  entryComponents: [
    { old: 'DefaultInputComponent', new: InputComponent }
  ]
});

@NgModule(customer2Module)
export class Customer2Module { }
