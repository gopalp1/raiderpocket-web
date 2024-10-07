import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsRequestsComponent } from './claims-requests.component';

describe('ClaimsRequestsComponent', () => {
  let component: ClaimsRequestsComponent;
  let fixture: ComponentFixture<ClaimsRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimsRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaimsRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
