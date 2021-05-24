import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeTwoComponent } from './home-two.component';

describe('HomeTwoComponent', () => {
  let component: HomeTwoComponent;
  let fixture: ComponentFixture<HomeTwoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
