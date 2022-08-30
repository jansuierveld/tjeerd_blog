import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuxeuisComponent } from './luxeuis.component';

describe('LuxeuisComponent', () => {
  let component: LuxeuisComponent;
  let fixture: ComponentFixture<LuxeuisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuxeuisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuxeuisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
