import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditRelationshipDashboardComponent } from './credit-relationship-dashboard.component';

describe('CreditRelationshipDashboardComponent', () => {
  let component: CreditRelationshipDashboardComponent;
  let fixture: ComponentFixture<CreditRelationshipDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreditRelationshipDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditRelationshipDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
