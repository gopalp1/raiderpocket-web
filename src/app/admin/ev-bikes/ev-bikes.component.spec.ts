import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvBikesComponent } from './ev-bikes.component';

describe('EvBikesComponent', () => {
  let component: EvBikesComponent;
  let fixture: ComponentFixture<EvBikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvBikesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvBikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
