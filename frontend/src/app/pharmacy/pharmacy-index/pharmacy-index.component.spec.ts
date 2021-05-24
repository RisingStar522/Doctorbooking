import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PharmacyIndexComponent } from './pharmacy-index.component';

describe('PharmacyIndexComponent', () => {
  let component: PharmacyIndexComponent;
  let fixture: ComponentFixture<PharmacyIndexComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacyIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacyIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
