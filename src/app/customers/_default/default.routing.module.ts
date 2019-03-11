import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

import { DefaultHomePage } from './pages/home/home.page';
import { DefaultPersonPage } from './pages/person/person.page';
import { DefaultTermsAndConditionsPage } from './pages/terms-and-conditions/terms-and-conditions.page';

const defaultRoutes: Routes = [
  { path: '', component: DefaultHomePage },
  { path: 'person', component: DefaultPersonPage },
  { path: 'terms-and-conditions', component: DefaultTermsAndConditionsPage }
];

export function defaultRoutesOverrider(routes: Routes): Routes {
  let paths: string[] = routes.map(route => route.path);
  return defaultRoutes.filter(route => !paths.includes(route.path)).concat(routes);
}

@NgModule({
  imports: [RouterModule.forChild(defaultRoutes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }
