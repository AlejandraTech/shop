import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuisomComponent } from './quisom.component';

describe('QuisomComponent', () => {
  let component: QuisomComponent;
  let fixture: ComponentFixture<QuisomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuisomComponent]
    });
    fixture = TestBed.createComponent(QuisomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
