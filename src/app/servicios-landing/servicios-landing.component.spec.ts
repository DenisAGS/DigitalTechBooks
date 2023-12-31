import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosLandingComponent } from './servicios-landing.component';

describe('ServiciosLandingComponent', () => {
  let component: ServiciosLandingComponent;
  let fixture: ComponentFixture<ServiciosLandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiciosLandingComponent]
    });
    fixture = TestBed.createComponent(ServiciosLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
