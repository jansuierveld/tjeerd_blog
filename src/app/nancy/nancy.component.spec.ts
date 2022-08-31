import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NancyComponent } from './nancy.component';

describe('NancyComponent', () => {
  let component: NancyComponent;
  let fixture: ComponentFixture<NancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NancyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
