import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemichComponent } from './remich.component';

describe('RemichComponent', () => {
  let component: RemichComponent;
  let fixture: ComponentFixture<RemichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemichComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
