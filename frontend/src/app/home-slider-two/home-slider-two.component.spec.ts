import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeSliderTwoComponent } from './home-slider-two.component';

describe('HomeSliderTwoComponent', () => {
  let component: HomeSliderTwoComponent;
  let fixture: ComponentFixture<HomeSliderTwoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSliderTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSliderTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
