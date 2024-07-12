import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDashboardComponent } from '../customer-dashboard/customer-dashboard.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CustomerDashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CustomerDashboardComponent,
      },
    ]),
  ],
})
export class RemoteEntryModule {}
