import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificacionComponent } from './identificacion.component';

describe('IdentificacionComponent', () => {
  let component: IdentificacionComponent;
  let fixture: ComponentFixture<IdentificacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdentificacionComponent]
    });
    fixture = TestBed.createComponent(IdentificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
