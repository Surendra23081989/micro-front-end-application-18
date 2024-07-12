import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreditRelationshipDashboardComponent } from './credit-relationship-dashboard/credit-relationship-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CreditRelationshipDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
