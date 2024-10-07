import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsRequestComponent } from './jobs-request.component';

describe('JobsRequestComponent', () => {
  let component: JobsRequestComponent;
  let fixture: ComponentFixture<JobsRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobsRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
