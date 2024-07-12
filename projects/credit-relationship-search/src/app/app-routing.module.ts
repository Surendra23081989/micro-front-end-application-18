import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditRelationshipDashboardComponent } from './credit-relationship-dashboard/credit-relationship-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'credit-relationship', pathMatch: 'full' },
  {
    path: 'credit-relationship',
    component: CreditRelationshipDashboardComponent,
  },
  {
    path: 'credit-approvals',
    loadChildren: () =>
      import('credit-approvals/credit-approvals-module').then(
        (m) => m.RemoteEntryModule
      ),
  },
  {
    path: 'customer',
    loadChildren: () =>
      import('customer/customer-module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'facility',
    loadChildren: () =>
      import('facility/facility-module').then((m) => m.RemoteEntryModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
