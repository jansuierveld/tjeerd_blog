import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournonComponent } from './tournon.component';

describe('TournonComponent', () => {
  let component: TournonComponent;
  let fixture: ComponentFixture<TournonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TournonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
