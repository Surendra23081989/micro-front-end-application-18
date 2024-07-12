import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacilityDashboardComponent } from '../facility-dashboard/facility-dashboard.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FacilityDashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: FacilityDashboardComponent,
      },
    ]),
  ],
})
export class RemoteEntryModule {}
