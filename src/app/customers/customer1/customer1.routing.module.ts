import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

import { defaultRoutesOverrider } from '../_default/default.routing.module';

import { Customer1PersonPage } from './pages/person/person.page';
import { Customer1TermsAndConditionsPage } from './pages/terms-and-conditions/terms-and-conditions.page';

const customer1Routes: Routes = defaultRoutesOverrider([
    { path: 'person', component: Customer1PersonPage },
    { path: 'terms-and-conditions', component: Customer1TermsAndConditionsPage }
]);

@NgModule({
  imports: [RouterModule.forChild(customer1Routes)],
  exports: [RouterModule]
})
export class Customer1RoutingModule { }
