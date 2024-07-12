import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditApprovalsDashboardComponent } from './credit-approvals-dashboard.component';

describe('CreditApprovalsDashboardComponent', () => {
  let component: CreditApprovalsDashboardComponent;
  let fixture: ComponentFixture<CreditApprovalsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreditApprovalsDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditApprovalsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
