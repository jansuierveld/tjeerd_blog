import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManosqueComponent } from './manosque.component';

describe('ManosqueComponent', () => {
  let component: ManosqueComponent;
  let fixture: ComponentFixture<ManosqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManosqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManosqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
