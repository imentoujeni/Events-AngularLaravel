import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherreservationComponent } from './afficherreservation.component';

describe('AfficherreservationComponent', () => {
  let component: AfficherreservationComponent;
  let fixture: ComponentFixture<AfficherreservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherreservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherreservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
