import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnbardedUsersComponent } from './onbarded-users.component';

describe('OnbardedUsersComponent', () => {
  let component: OnbardedUsersComponent;
  let fixture: ComponentFixture<OnbardedUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnbardedUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnbardedUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
