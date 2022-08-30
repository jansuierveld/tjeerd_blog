import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoorbereidingComponent } from './voorbereiding.component';

describe('VoorbereidingComponent', () => {
  let component: VoorbereidingComponent;
  let fixture: ComponentFixture<VoorbereidingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoorbereidingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoorbereidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
