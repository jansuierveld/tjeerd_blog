import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsensechildComponent } from './adsensechild.component';

describe('AdsensechildComponent', () => {
  let component: AdsensechildComponent;
  let fixture: ComponentFixture<AdsensechildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdsensechildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdsensechildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
