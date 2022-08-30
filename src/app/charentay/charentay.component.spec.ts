import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharentayComponent } from './charentay.component';

describe('CharentayComponent', () => {
  let component: CharentayComponent;
  let fixture: ComponentFixture<CharentayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharentayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharentayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
