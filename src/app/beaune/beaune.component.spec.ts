import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeauneComponent } from './beaune.component';

describe('BeauneComponent', () => {
  let component: BeauneComponent;
  let fixture: ComponentFixture<BeauneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeauneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeauneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
