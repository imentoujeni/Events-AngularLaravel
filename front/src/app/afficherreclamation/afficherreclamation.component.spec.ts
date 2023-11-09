import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherreclamationComponent } from './afficherreclamation.component';

describe('AfficherreclamationComponent', () => {
  let component: AfficherreclamationComponent;
  let fixture: ComponentFixture<AfficherreclamationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherreclamationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherreclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
