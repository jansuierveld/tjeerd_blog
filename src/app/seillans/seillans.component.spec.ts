import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeillansComponent } from './seillans.component';

describe('SeillansComponent', () => {
  let component: SeillansComponent;
  let fixture: ComponentFixture<SeillansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeillansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeillansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
