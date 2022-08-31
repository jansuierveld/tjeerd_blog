import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StvithComponent } from './stvith.component';

describe('StvithComponent', () => {
  let component: StvithComponent;
  let fixture: ComponentFixture<StvithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StvithComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StvithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
