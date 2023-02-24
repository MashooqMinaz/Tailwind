import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsbarComponent } from './adsbar.component';

describe('AdsbarComponent', () => {
  let component: AdsbarComponent;
  let fixture: ComponentFixture<AdsbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdsbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdsbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
