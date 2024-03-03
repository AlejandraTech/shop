import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscripcionComponent } from './subscripcion.component';

describe('SubscripcionComponent', () => {
  let component: SubscripcionComponent;
  let fixture: ComponentFixture<SubscripcionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubscripcionComponent]
    });
    fixture = TestBed.createComponent(SubscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
