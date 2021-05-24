import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PharmacySearchComponent } from './pharmacy-search.component';

describe('PharmacySearchComponent', () => {
  let component: PharmacySearchComponent;
  let fixture: ComponentFixture<PharmacySearchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacySearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
