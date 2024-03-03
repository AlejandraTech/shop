import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaprivadaComponent } from './areaprivada.component';

describe('AreaprivadaComponent', () => {
  let component: AreaprivadaComponent;
  let fixture: ComponentFixture<AreaprivadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreaprivadaComponent]
    });
    fixture = TestBed.createComponent(AreaprivadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
