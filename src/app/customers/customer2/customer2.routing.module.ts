import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

import { defaultRoutesOverrider } from '../_default/default.routing.module';

import { Customer2HomePage } from './pages/home/home.page';
import { Customer2PrivacyPoliciesPage } from '../customer2/pages/privacy-policies/privacy-policies.page';

const customer2Routes: Routes = defaultRoutesOverrider([
  { path: '', component: Customer2HomePage },
  { path: 'terms-and-conditions', redirectTo: '' },
  { path: 'privacy-policies', component: Customer2PrivacyPoliciesPage },
]);

@NgModule({
  imports: [RouterModule.forChild(customer2Routes)],
  exports: [RouterModule]
})
export class Customer2RoutingModule { }
