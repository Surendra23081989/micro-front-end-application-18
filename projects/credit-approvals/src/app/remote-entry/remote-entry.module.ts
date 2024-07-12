import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditApprovalsDashboardComponent } from '../credit-approvals-dashboard/credit-approvals-dashboard.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CreditApprovalsDashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CreditApprovalsDashboardComponent,
      },
    ]),
  ],
})
export class RemoteEntryModule {}
