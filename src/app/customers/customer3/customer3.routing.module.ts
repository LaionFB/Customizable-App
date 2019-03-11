import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

import { defaultRoutesOverrider } from '../_default/default.routing.module';

const customer3Routes: Routes = defaultRoutesOverrider([]);

@NgModule({
  imports: [RouterModule.forChild(customer3Routes)],
  exports: [RouterModule]
})
export class Customer3RoutingModule { }
