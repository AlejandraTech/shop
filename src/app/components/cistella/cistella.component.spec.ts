import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CistellaComponent } from './cistella.component';

describe('CistellaComponent', () => {
  let component: CistellaComponent;
  let fixture: ComponentFixture<CistellaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CistellaComponent]
    });
    fixture = TestBed.createComponent(CistellaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
