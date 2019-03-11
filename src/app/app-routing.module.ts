import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: '',
    redirectTo: '/default',
    pathMatch: 'full'
  },
  { path: 'default', loadChildren: 'src/app/customers/_default/default.module#DefaultModule' },
  { path: 'customer1', loadChildren: 'src/app/customers/customer1/customer1.module#Customer1Module' },
  { path: 'customer2', loadChildren: 'src/app/customers/customer2/customer2.module#Customer2Module' },
  { path: 'customer3', loadChildren: 'src/app/customers/customer3/customer3.module#Customer3Module' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
